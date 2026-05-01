import React from 'react';

// Simple 2D sprite with clean black aesthetic
export default function RunnerSprite({ src = '/images/luffy_gif.gif', size = 120, className = '', running = false }) {
  return (
    <div className={`runner-sprite ${className} ${running ? 'is-running' : 'is-idle'}`} style={{ width: size, height: size }} aria-hidden>
      <div className="orient">
        <div className="character-container">
          <img src={src} alt="Island character" />
        </div>
      </div>
      <style jsx>{
      `
        .runner-sprite { 
          position: relative; 
          display: inline-block; 
          pointer-events: none; 
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
          z-index: 10;
          background: transparent;
        }
        @keyframes gentle-float { 
          0% { transform: translateY(0px); } 
          50% { transform: translateY(-7px); } 
          100% { transform: translateY(0px); } 
        }
        @media (prefers-reduced-motion: reduce) {
          .runner-sprite img { 
            animation: none !important; 
          }
        }`
        }</style>
    </div>
  );
}
