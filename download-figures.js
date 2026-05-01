const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create the figures directory if it doesn't exist
const figuresDir = path.join(__dirname, 'frontend', 'public', 'images', 'figures');
if (!fs.existsSync(figuresDir)) {
  fs.mkdirSync(figuresDir, { recursive: true });
}

// High-quality anime figure placeholder images
const figures = [
  {
    id: 1,
    name: 'Naruto Uzumaki',
    url: 'https://picsum.photos/seed/naruto/400/600'
  },
  {
    id: 2,
    name: 'Luffy Gear 5',
    url: 'https://picsum.photos/seed/luffy/400/600'
  },
  {
    id: 3,
    name: 'Goku Super Saiyan',
    url: 'https://picsum.photos/seed/goku/400/600'
  },
  {
    id: 4,
    name: 'Sasuke Uchiha',
    url: 'https://picsum.photos/seed/sasuke/400/600'
  },
  {
    id: 5,
    name: 'Eren Yeager',
    url: 'https://picsum.photos/seed/eren/400/600'
  },
  {
    id: 6,
    name: 'Tanjiro Kamado',
    url: 'https://picsum.photos/seed/tanjiro/400/600'
  },
  {
    id: 7,
    name: 'Zenitsu Agatsuma',
    url: 'https://picsum.photos/seed/zenitsu/400/600'
  },
  {
    id: 8,
    name: 'Inosuke Hashibira',
    url: 'https://picsum.photos/seed/inosuke/400/600'
  },
  {
    id: 9,
    name: 'Todoroki Shoto',
    url: 'https://picsum.photos/seed/todoroki/400/600'
  },
  {
    id: 10,
    name: 'Deku Izuku Midoriya',
    url: 'https://picsum.photos/seed/deku/400/600'
  },
  {
    id: 11,
    name: 'Kakashi Hatake',
    url: 'https://picsum.photos/seed/kakashi/400/600'
  }
];

function downloadImage(url, filepath, name) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    console.log(`Downloading ${name}...`);
    
    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✓ Downloaded: ${name}`);
          resolve();
        });
        
        fileStream.on('error', (err) => {
          fs.unlink(filepath, () => {});
          console.error(`✗ Error saving ${name}:`, err.message);
          reject(err);
        });
      } else {
        console.error(`✗ Failed to download ${name}: Status ${response.statusCode}`);
        reject(new Error(`Status ${response.statusCode}`));
      }
    }).on('error', (err) => {
      console.error(`✗ Error downloading ${name}:`, err.message);
      reject(err);
    });
  });
}

async function downloadAllFigures() {
  console.log('Starting download of anime figure images...\n');
  
  for (const figure of figures) {
    const filepath = path.join(figuresDir, `figure${figure.id}.jpg`);
    
    try {
      await downloadImage(figure.url, filepath, figure.name);
      // Add a small delay between downloads
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`Failed to download ${figure.name}`);
    }
  }
  
  console.log('\n✓ Download complete! Images saved to:', figuresDir);
  console.log('\nNote: If some images failed, you can manually add them to:');
  console.log(figuresDir);
}

downloadAllFigures().catch(console.error);
