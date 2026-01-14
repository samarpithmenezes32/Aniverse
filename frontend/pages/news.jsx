import React, { useEffect, useState } from 'react';
import PosterImage from '../src/components/PosterImage';
import axios from 'axios';

export default function NewsPage() {
  const [top, setTop] = useState(null);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [sources, setSources] = useState(null);
  const [updated, setUpdated] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true); setError('');
      try {
        // Use backend global news aggregator for anime/manga news
        const { data } = await axios.get('/api/news');
        const list = Array.isArray(data?.articles) ? data.articles : [];
        if (!mounted) return;
        setTop(list[0] || null);
        setArticles(list.slice(1));
        setSources(data.sources);
        setUpdated(data.updated);
      } catch (e) { if (mounted) setError('Failed to load anime/manga news from multiple sources.'); }
      finally { if (mounted) setLoading(false); }
    })();
    return () => { mounted = false; };
  }, []);

  const getSourceColor = (source) => {
    if (source?.includes('MyAnimeList')) return '#2e51a2';
    if (source?.includes('Anime News Network')) return '#e94f37';
    if (source?.includes('Crunchyroll')) return '#f47521';
    return '#8b5cf6';
  };

  return (
    <div className="page-wrap">
      {/* ANIME NEWS HERO SECTION */}
      <section className="news-hero">
        <div className="hero-content">
          <h1 className="hero-title">ANIME CULTURE NEWS</h1>
        </div>
      </section>

      {/* NEWS ARTICLES SECTION */}
      <section className="news-articles-section">
        <div className="header">
          <h2 className="section-title">Latest Anime & Manga News</h2>
          <p className="subtitle">Updates from across the anime world</p>
          {sources && (
            <div className="source-badges">
              <span className="badge" style={{ background: '#2e51a2' }}>MyAnimeList ({sources.mal})</span>
              <span className="badge" style={{ background: '#e94f37' }}>Anime News Network ({sources.ann})</span>
              <span className="badge" style={{ background: '#f47521' }}>Crunchyroll ({sources.crunchyroll})</span>
            </div>
          )}
          {updated && <div className="update-time">Last updated: {new Date(updated).toLocaleString()}</div>}
        </div>
        {error && <div className="error">{error}</div>}
        {loading && <div className="loading">Loading news from multiple sources…</div>}
        {top && (
          <article className="hero">
            <div className="hero-img">
              <PosterImage title={top.title} src={top.thumbnail} alt={top.title} />
            </div>
            <div className="hero-text">
              <span className="source-tag" style={{ background: getSourceColor(top.source) }}>{top.source}</span>
              <h3>{top.title}</h3>
              {top.description && <p dangerouslySetInnerHTML={{ __html: top.description }} />}
              {top.author && <div className="author">By {top.author}</div>}
              <a className="cta" href={top.link} target="_blank" rel="noreferrer noopener">Read Full Article →</a>
            </div>
          </article>
        )}
        <div className="grid">
          {articles.map((a) => (
            <article className="card" key={a.mal_id}>
              <div className="thumb"><PosterImage title={a.title} src={a.thumbnail} alt={a.title} /></div>
              <div className="meta">
                <span className="source-tag small" style={{ background: getSourceColor(a.source) }}>{a.source}</span>
                <h4>{a.title}</h4>
                {a.author && <div className="author-small">By {a.author}</div>}
                <a className="read" href={a.link} target="_blank" rel="noreferrer noopener">Read Article →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <style jsx>{`
        .page-wrap {
          max-width: 1600px;
          margin: 0 auto;
          padding: 0;
          color: var(--color-text);
          min-height: 100vh;
          background: var(--color-bg);
        }
        
        /* NEWS HERO SECTION - ANIME CULTURE STYLE */
        .news-hero {
          padding: 4rem 2rem 3rem;
          background: linear-gradient(
            180deg,
            rgba(20, 25, 35, 1) 0%,
            rgba(10, 15, 24, 0.95) 100%
          );
          border-bottom: 2px solid rgba(255, 215, 0, 0.2);
        }

        .hero-content {
          max-width: 1400px;
          margin: 0 auto;
          text-align: center;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 0;
          font-family: 'Japan Ramen', 'Impact', 'Arial Black', sans-serif;
          letter-spacing: 0.1em;
          background: linear-gradient(135deg, #b968ff 0%, #ff6b9d 50%, #ffa94d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* NEWS ARTICLES SECTION */
        .news-articles-section {
          padding: 3rem 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 2.5rem;
          margin: 0 0 0.5rem;
          font-weight: 900;
          font-family: 'Japan Ramen', 'Inter', sans-serif;
          background: linear-gradient(135deg, #5856d6 0%, #dd2a7b 50%, #ffd700 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .subtitle {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin: 0 0 1.5rem;
          font-weight: 500;
        }

        .source-badges {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }

        .badge {
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          color: white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .update-time {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 0.5rem;
        }

        .error {
          color: var(--luxury-rose);
          text-align: center;
          padding: 2rem;
          font-size: 1.1rem;
          background: rgba(221, 42, 123, 0.1);
          border-radius: 12px;
          margin-bottom: 1rem;
        }

        .loading {
          color: var(--color-text-dim);
          text-align: center;
          padding: 3rem;
          font-size: 1.1rem;
        }

        .hero {
          position: relative;
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 1.5rem;
          background: var(--color-surface);
          border: 2px solid var(--color-border);
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 2rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .hero-img {
          aspect-ratio: 16/9;
          background: linear-gradient(135deg, rgba(227, 199, 112, 0.1), rgba(221, 42, 123, 0.1));
          position: relative;
          overflow: hidden;
        }

        .hero-text {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .source-tag {
          display: inline-block;
          padding: 0.4rem 0.8rem;
          border-radius: 16px;
          font-size: 0.75rem;
          font-weight: 700;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.5rem;
        }

        .source-tag.small {
          padding: 0.3rem 0.6rem;
          font-size: 0.7rem;
        }

        .hero-text h3 {
          color: var(--color-text);
          margin: 0;
          font-size: 1.75rem;
          line-height: 1.3;
          font-weight: 700;
        }

        .hero-text p {
          color: var(--color-text-dim);
          margin: 0;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .author {
          font-size: 0.85rem;
          color: var(--luxury-gold);
          font-weight: 600;
        }

        .author-small {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .cta {
          align-self: flex-start;
          background: linear-gradient(135deg, var(--luxury-gold), var(--luxury-rose));
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: 10px;
          text-decoration: none;
          color: white;
          transition: all 0.3s;
          font-weight: 700;
          font-size: 0.9rem;
          box-shadow: 0 4px 12px rgba(227, 199, 112, 0.4);
        }

        .cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(227, 199, 112, 0.6);
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.25rem;
        }

        .card {
          background: var(--color-surface);
          border: 2px solid var(--color-border);
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.3s;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }

        .card:hover {
          border-color: var(--luxury-gold);
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(227, 199, 112, 0.3);
        }

        .thumb {
          aspect-ratio: 16/10;
          background: linear-gradient(135deg, rgba(227, 199, 112, 0.1), rgba(221, 42, 123, 0.1));
          overflow: hidden;
          position: relative;
        }

        .thumb img {
          transition: transform 0.3s;
        }

        .card:hover .thumb img {
          transform: scale(1.05);
        }

        .meta {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .meta h4 {
          color: var(--color-text);
          margin: 0;
          font-size: 1rem;
          line-height: 1.4;
          font-weight: 600;
        }

        .read {
          align-self: flex-start;
          background: rgba(227, 199, 112, 0.2);
          border: 1px solid var(--luxury-gold);
          padding: 0.4rem 0.8rem;
          border-radius: 8px;
          color: var(--color-text);
          text-decoration: none;
          transition: all 0.3s;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .read:hover {
          background: linear-gradient(135deg, var(--luxury-gold), var(--luxury-rose));
          color: white;
          border-color: var(--luxury-gold);
          transform: translateY(-2px);
        }
        
        @media (max-width: 960px) {
          .hero {
            grid-template-columns: 1fr;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .news-hero {
            padding: 3rem 1.5rem 2rem;
          }

          .hero-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 600px) {
          .source-badges {
            flex-direction: column;
            align-items: center;
          }

          .hero-title {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
}
