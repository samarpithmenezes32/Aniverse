/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Optimize JavaScript bundles
  optimizeFonts: true,
  
  // Export configuration - continue on error during build
  // This allows the build to complete even if some pages fail SSG
  experimental: {
    // Remove this if not needed
  },
  
  // Handle GSAP professional plugins
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // Add any GSAP plugin aliases here if needed
    };
    
    // Optimize build performance
    config.optimization = {
      ...config.optimization,
      minimize: true,
    };
    
    // Handle router issues during SSR
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    return config;
  },
  
  // API configuration with timeout
  async rewrites() {
    const base = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';
    return [
      {
        source: '/api/:path*',
        destination: `${base}/:path*`,
      },
    ];
  },
  
  // Remote image patterns for anime posters with optimization
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.myanimelist.net' },
      { protocol: 'https', hostname: 'www.animenewsnetwork.com' },
      { protocol: 'https', hostname: 'animenewsnetwork.com' },
      { protocol: 'http', hostname: 'www.animenewsnetwork.com' },
      { protocol: 'https', hostname: 'img1.ak.crunchyroll.com' },
      { protocol: 'https', hostname: 'static.crunchyroll.com' },
      { protocol: 'https', hostname: 'www.crunchyroll.com' },
      { protocol: 'https', hostname: 'interest.animenewsnetwork.com' },
      { protocol: 'https', hostname: '**.animenewsnetwork.com' },
      { protocol: 'https', hostname: 'example.com' },
      { protocol: 'https', hostname: 'your-cdn-domain.com' }
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
}

module.exports = nextConfig;