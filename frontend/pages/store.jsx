import React, { useState } from 'react';
import AnimeFigures from '../src/components/AnimeFigures';

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState('All Items');

  const categories = [
    { id: 'all', name: 'All Items', icon: '🛍️' },
    { id: 'figures', name: 'Figures & Models', icon: '🗿' },
    { id: 'clothing', name: 'Clothing', icon: '👕' },
    { id: 'accessories', name: 'Accessories', icon: '💫' },
    { id: 'collectibles', name: 'Collectibles', icon: '📖' },
    { id: 'decor', name: 'Home Decor', icon: '🏠' }
  ];

  return (
    <div className="store-page">
      {/* Hero Header */}
      <section className="store-hero">
        <div className="hero-content">
          <h1 className="hero-title">ANIME CULTURE STORE</h1>
          
          {/* Category Pills */}
          <div className="category-pills">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`pill ${activeCategory === category.name ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.name)}
              >
                <span className="pill-icon">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Anime Figures Section */}
      <AnimeFigures activeCategory={activeCategory} />

      <style jsx>{`
        .store-page {
          min-height: 100vh;
          background: var(--color-bg);
          padding-top: 80px;
        }

        .store-hero {
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
          margin-bottom: 2.5rem;
          font-family: 'Japan Ramen', 'Impact', 'Arial Black', sans-serif;
          letter-spacing: 0.1em;
          background: linear-gradient(135deg, #b968ff 0%, #ff6b9d 50%, #ffa94d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .category-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          align-items: center;
          padding: 1rem 0;
        }

        .pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: rgba(30, 35, 45, 0.8);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 25px;
          color: var(--color-text-dim);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .pill:hover {
          background: rgba(40, 45, 55, 0.9);
          border-color: rgba(255, 215, 0, 0.4);
          color: var(--color-text);
          transform: translateY(-2px);
        }

        .pill.active {
          background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 107, 53, 0.2));
          border-color: rgba(255, 215, 0, 0.6);
          color: #ffd700;
          box-shadow: 0 4px 15px rgba(255, 215, 0, 0.2);
        }

        .pill-icon {
          font-size: 1.25rem;
        }

        @media (max-width: 768px) {
          .store-hero {
            padding: 3rem 1.5rem 2rem;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1rem;
            letter-spacing: 0.1em;
          }

          .category-pills {
            gap: 0.75rem;
          }

          .pill {
            padding: 0.6rem 1.2rem;
            font-size: 0.85rem;
          }

          .pill-icon {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 0.9rem;
          }

          .category-pills {
            gap: 0.5rem;
          }

          .pill {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
}
