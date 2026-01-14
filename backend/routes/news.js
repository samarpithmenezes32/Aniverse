const express = require('express');
const axios = require('axios');
const router = express.Router();

const cache = { data: null, timestamp: 0 };
const CACHE_TTL = 10 * 60 * 1000;

// Helper to extract image from HTML content
function extractImageFromHtml(html) {
  if (!html) return '';
  // Try various image patterns
  const patterns = [
    /<img[^>]+src=["']([^"']+)["']/i,
    /<img[^>]+data-src=["']([^"']+)["']/i,
    /src=["']([^"']+\.(?:jpg|jpeg|png|gif|webp)[^"']*)["']/i,
    /url\(["']?([^"')]+\.(?:jpg|jpeg|png|gif|webp)[^"')]*)["']?\)/i,
  ];
  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match && match[1]) {
      let url = match[1];
      // Clean up the URL
      if (url.startsWith('//')) url = 'https:' + url;
      if (!url.startsWith('http')) continue;
      return url;
    }
  }
  return '';
}

async function fetchMALNews() {
  try {
    // Try the anime news endpoint instead
    const response = await axios.get('https://api.jikan.moe/v4/anime/1/news', { timeout: 12000 });
    if (response.data && response.data.data) {
      return response.data.data.slice(0, 10).map(item => ({
        mal_id: item.mal_id,
        title: item.title,
        link: item.url,
        pubDate: item.date,
        thumbnail: item.images?.jpg?.image_url || '',
        description: item.excerpt || '',
        author: item.author_username,
        source: 'MyAnimeList News',
      }));
    }
  } catch (error) {
    console.error('Failed to fetch MAL news:', error.message);
  }
  return [];
}

async function fetchANNNews() {
  try {
    const annUrl = 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent('https://www.animenewsnetwork.com/all/rss.xml');
    const response = await axios.get(annUrl, { timeout: 12000 });
    if (response.data && response.data.items) {
      return response.data.items.slice(0, 20).map((it, idx) => {
        // Extract image from description/content if thumbnail is missing
        let thumbnail = it.thumbnail || (it.enclosure ? it.enclosure.link : '');
        if (!thumbnail) {
          thumbnail = extractImageFromHtml(it.description) || extractImageFromHtml(it.content);
        }
        // Use a default anime news image if still no thumbnail
        if (!thumbnail) {
          thumbnail = 'https://cdn.myanimelist.net/images/anime/4/19644.jpg'; // Default anime image
        }
        return {
          mal_id: 'ann-' + idx + '-' + Date.now(),
          title: it.title,
          link: it.link,
          pubDate: it.pubDate,
          thumbnail: thumbnail,
          description: it.description || it.content || '',
          source: 'Anime News Network',
        };
      });
    }
  } catch (error) {
    console.error('Failed to fetch ANN news:', error.message);
  }
  return [];
}

async function fetchCrunchyrollNews() {
  try {
    // Try a different Crunchyroll RSS feed
    const crUrl = 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent('https://www.crunchyroll.com/newsrss');
    const response = await axios.get(crUrl, { timeout: 12000 });
    if (response.data && response.data.items) {
      return response.data.items.slice(0, 15).map((it, idx) => {
        // Extract image from description/content if thumbnail is missing
        let thumbnail = it.thumbnail || (it.enclosure ? it.enclosure.link : '');
        if (!thumbnail) {
          thumbnail = extractImageFromHtml(it.description) || extractImageFromHtml(it.content);
        }
        // Use a default crunchyroll-style image if still no thumbnail
        if (!thumbnail) {
          thumbnail = 'https://cdn.myanimelist.net/images/anime/10/47347.jpg'; // Default anime image
        }
        return {
          mal_id: 'cr-' + idx + '-' + Date.now(),
          title: it.title,
          link: it.link,
          pubDate: it.pubDate,
          thumbnail: thumbnail,
          description: it.description || '',
          source: 'Crunchyroll',
        };
      });
    }
  } catch (error) {
    console.error('Failed to fetch Crunchyroll news:', error.message);
  }
  return [];
}

// Fallback: Fetch recent popular anime as "news" when real news fails
async function fetchJikanTopAsNews() {
  try {
    const response = await axios.get('https://api.jikan.moe/v4/top/anime?filter=airing&limit=15', { timeout: 12000 });
    if (response.data && response.data.data) {
      return response.data.data.map((anime, idx) => ({
        mal_id: 'jikan-' + anime.mal_id,
        title: `${anime.title} - Currently Airing`,
        link: anime.url,
        pubDate: new Date().toISOString(),
        thumbnail: anime.images?.jpg?.large_image_url || anime.images?.jpg?.image_url || '',
        description: anime.synopsis ? anime.synopsis.substring(0, 200) + '...' : 'Popular anime currently airing.',
        source: 'Currently Airing',
      }));
    }
  } catch (error) {
    console.error('Failed to fetch Jikan top anime:', error.message);
  }
  return [];
}

router.get('/', async (req, res) => {
  try {
    const now = Date.now();
    if (cache.data && (now - cache.timestamp) < CACHE_TTL) {
      return res.json(cache.data);
    }
    console.log('Fetching anime news from multiple sources...');
    const results = await Promise.all([
      fetchMALNews(),
      fetchANNNews(),
      fetchCrunchyrollNews(),
    ]);
    const malNews = results[0];
    const annNews = results[1];
    const crNews = results[2];
    let allNews = [...malNews, ...annNews, ...crNews];
    
    // If we have very few articles, fetch top anime as fallback news
    if (allNews.length < 5) {
      console.log('Few news articles found, fetching currently airing anime as fallback...');
      const fallbackNews = await fetchJikanTopAsNews();
      allNews = [...allNews, ...fallbackNews];
    }
    
    const sorted = allNews.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    const result = {
      articles: sorted,
      updated: new Date(),
      sources: {
        mal: malNews.length,
        ann: annNews.length,
        crunchyroll: crNews.length,
      },
      total: sorted.length,
    };
    cache.data = result;
    cache.timestamp = now;
    res.json(result);
  } catch (e) {
    console.error('News fetch error:', e.message);
    res.status(500).json({ error: 'Failed to fetch news', details: e.message });
  }
});

module.exports = router;
