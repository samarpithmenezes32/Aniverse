import React from 'react';

// Enhanced 2D runner sprite with improved animations and fun effects
export default function RunnerSprite({ src = '/images/island_char2.jpg', size = 120, className = '', running = false }) {
  return (
    <div className={`runner-sprite ${className} ${running ? 'is-running' : 'is-idle'}`} style={{ width: size, height: size }} aria-hidden>
      <div className="orient">
        <div className="character-container">
          <img src={src} alt="Island character" />
          <div className="sparkle-effect">
            <span className="sparkle spark-1">✨</span>
            <span className="sparkle spark-2">⭐</span>
            <span className="sparkle spark-3">✨</span>
          </div>
        </div>
        <div className="shadow" />
      </div>
      <style jsx>{
      `
        .runner-sprite { 
          position: relative; 
          display: inline-block; 
          pointer-events: none; 
          filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.6));
        }
        .runner-sprite .orient { 
          width: 100%; 
          height: 100%; 
          transform: translateZ(0) rotateZ(var(--lean, 0deg)) scaleX(var(--scaleX, 1)); 
          transform-origin: center; 
        }
        .character-container {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .runner-sprite img { 
          position: relative; 
          width: 100%; 
          height: 100%; 
          object-fit: contain; 
          animation: gentle-float 3s ease-in-out infinite; 
          image-rendering: -webkit-optimize-contrast; 
          animation-play-state: running;
          filter: brightness(1.05) contrast(1.05) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
          z-index: 10;
          border-radius: 0;
          background: transparent;
          mix-blend-mode: normal;
        }
        .sparkle-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: var(--sparkle-opacity, 0.5);
          z-index: 15;
        }
        .sparkle {
          position: absolute;
          font-size: 14px;
          animation: sparkle-float 2.5s ease-in-out infinite;
          animation-play-state: running;
        }
        .spark-1 {
          top: 10%;
          left: 80%;
          animation-delay: 0s;
        }
        .spark-2 {
          top: 30%;
          left: 15%;
          animation-delay: 0.8s;
        }
        .spark-3 {
          top: 60%;
          left: 75%;
          animation-delay: 1.6s;
        }
        .runner-sprite .shadow { 
          position: absolute; 
          left: 10%; 
          right: 10%; 
          bottom: 2%; 
          height: 12%; 
          background: radial-gradient(ellipse at center, rgba(0,0,0,0.4), rgba(0,0,0,0) 70%); 
          transform-origin: center; 
          animation: gentle-shadow-pulse 3s ease-in-out infinite; 
          filter: blur(2px); 
          animation-play-state: running;
        }
        .runner-sprite.is-running { 
          --run-state: running; 
          --sparkle-state: running;
          --sparkle-opacity: 1;
          filter: drop-shadow(0 6px 20px rgba(0, 0, 0, 0.7)) drop-shadow(0 0 15px rgba(255, 215, 0, 0.2));
        }
        .runner-sprite.is-idle { 
          --run-state: running; 
          --sparkle-state: running;
          --sparkle-opacity: 0.5;
          animation: idle-glow 3s ease-in-out infinite;
        }
        @keyframes gentle-float { 
          0% { transform: translateY(0px) translateX(0px) scale(1); } 
          25% { transform: translateY(-4px) translateX(2px) scale(1.01); }
          50% { transform: translateY(-7px) translateX(0px) scale(1.02); } 
          75% { transform: translateY(-4px) translateX(-2px) scale(1.01); }
          100% { transform: translateY(0px) translateX(0px) scale(1); } 
        }
        @keyframes gentle-shadow-pulse { 
          0% { transform: scale(1) scaleY(0.8); opacity: 0.3; } 
          25% { transform: scale(1.05) scaleY(0.85); opacity: 0.35; }
          50% { transform: scale(0.95) scaleY(0.75); opacity: 0.4; } 
          75% { transform: scale(1.05) scaleY(0.85); opacity: 0.35; }
          100% { transform: scale(1) scaleY(0.8); opacity: 0.3; } 
        }
        @keyframes sparkle-float {
          0% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0; 
          }
          20% { 
            opacity: 1; 
            transform: translateY(-5px) rotate(90deg);
          }
          80% { 
            opacity: 1; 
            transform: translateY(-15px) rotate(270deg);
          }
          100% { 
            transform: translateY(-20px) rotate(360deg); 
            opacity: 0; 
          }
        }
        @keyframes idle-glow {
          0% { 
            filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.6)); 
          }
          50% { 
            filter: drop-shadow(0 6px 20px rgba(0, 0, 0, 0.7)) drop-shadow(0 0 20px rgba(255, 215, 0, 0.15)); 
          }
          100% { 
            filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.6)); 
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .runner-sprite img, 
          .runner-sprite .shadow, 
          .sparkle,
          .runner-sprite.is-idle { 
            animation: none !important; 
          }
          .runner-sprite { 
            filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.6)) !important; 
          }
        }`
        }</style>
    </div>
  );
}
