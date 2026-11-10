import React from 'react';

/**
 * Cup2EatLogo.jsx
 * Pristine, vector 3D-embossed official CUP2EAT emblem.
 * Recreates the exact brand medal without any external borders, ring artifacts or pixelation.
 */
export default function Cup2EatLogo({ size = 44, className = '', showText = false, textClass = '' }) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Pristine Circular Emblem */}
      <div
        style={{ width: size, height: size }}
        className="relative shrink-0 rounded-full transition-transform duration-300 hover:scale-105 filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]"
      >
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Deep Emerald Background Gradient */}
            <radialGradient id="c2eGreenGrad" cx="42%" cy="38%" r="65%">
              <stop offset="0%" stopColor="#0E543E" />
              <stop offset="55%" stopColor="#063526" />
              <stop offset="100%" stopColor="#021C13" />
            </radialGradient>

            {/* Heavy Gold Outer Bevel */}
            <linearGradient id="c2eGoldOuter" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF0B3" />
              <stop offset="25%" stopColor="#DCA842" />
              <stop offset="50%" stopColor="#8C5C14" />
              <stop offset="75%" stopColor="#FBD67A" />
              <stop offset="100%" stopColor="#70440B" />
            </linearGradient>

            {/* Inner Gold Lip */}
            <linearGradient id="c2eGoldInner" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#FDEAA8" />
              <stop offset="40%" stopColor="#D69F35" />
              <stop offset="70%" stopColor="#7E4D0F" />
              <stop offset="100%" stopColor="#F5CB69" />
            </linearGradient>

            {/* 3D Gold Letters */}
            <linearGradient id="c2eGoldLetter" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF5CC" />
              <stop offset="22%" stopColor="#F6D178" />
              <stop offset="55%" stopColor="#CE9835" />
              <stop offset="100%" stopColor="#875313" />
            </linearGradient>

            {/* Letter Cast Shadow */}
            <filter id="c2eLetterShadow" x="-15%" y="-15%" width="140%" height="140%">
              <feDropShadow dx="0" dy="6" stdDeviation="4.5" floodColor="#000000" floodOpacity="0.8" />
              <feDropShadow dx="0" dy="-1" stdDeviation="1" floodColor="#FFF3BF" floodOpacity="0.35" />
            </filter>
          </defs>

          {/* Outer Gold Beveled Rim */}
          <circle cx="250" cy="250" r="242" fill="url(#c2eGoldOuter)" />
          {/* Dark Recessed Groove */}
          <circle cx="250" cy="250" r="226" fill="#1A0D03" />
          {/* Inner Raised Gold Lip */}
          <circle cx="250" cy="250" r="222" fill="url(#c2eGoldInner)" />
          {/* Center Emerald Medallion Face */}
          <circle cx="250" cy="250" r="210" fill="url(#c2eGreenGrad)" />
          {/* Accent Gold Ring on Emerald */}
          <circle cx="250" cy="250" r="204" fill="none" stroke="#FCE79F" strokeWidth="1.2" opacity="0.3" />

          {/* Lettering Group with 3D Emboss & Depth */}
          <g filter="url(#c2eLetterShadow)">
            
            {/* CUP */}
            <text
              x="250"
              y="172"
              textAnchor="middle"
              fontFamily="'Playfair Display', Georgia, serif"
              fontSize="122"
              fontWeight="900"
              letterSpacing="12"
              fill="#2D1502"
              stroke="#210F01"
              strokeWidth="10"
              strokeLinejoin="round"
            >
              CUP
            </text>
            <text
              x="250"
              y="170"
              textAnchor="middle"
              fontFamily="'Playfair Display', Georgia, serif"
              fontSize="122"
              fontWeight="900"
              letterSpacing="12"
              fill="url(#c2eGoldLetter)"
              stroke="#FFF8DB"
              strokeWidth="1.5"
            >
              CUP
            </text>

            {/* Horizontal Dividers with End Caps */}
            <g stroke="url(#c2eGoldLetter)" strokeLinecap="square">
              <line x1="74" y1="250" x2="190" y2="250" strokeWidth="6" />
              <line x1="74" y1="240" x2="74" y2="260" strokeWidth="6" />
              <line x1="310" y1="250" x2="426" y2="250" strokeWidth="6" />
              <line x1="426" y1="240" x2="426" y2="260" strokeWidth="6" />
            </g>

            {/* 2 */}
            <text
              x="250"
              y="288"
              textAnchor="middle"
              fontFamily="'Playfair Display', Georgia, serif"
              fontSize="132"
              fontWeight="900"
              fill="#2D1502"
              stroke="#210F01"
              strokeWidth="12"
              strokeLinejoin="round"
            >
              2
            </text>
            <text
              x="250"
              y="285"
              textAnchor="middle"
              fontFamily="'Playfair Display', Georgia, serif"
              fontSize="132"
              fontWeight="900"
              fill="url(#c2eGoldLetter)"
              stroke="#FFF8DB"
              strokeWidth="1.8"
            >
              2
            </text>

            {/* EAT */}
            <text
              x="250"
              y="408"
              textAnchor="middle"
              fontFamily="'Playfair Display', Georgia, serif"
              fontSize="122"
              fontWeight="900"
              letterSpacing="12"
              fill="#2D1502"
              stroke="#210F01"
              strokeWidth="10"
              strokeLinejoin="round"
            >
              EAT
            </text>
            <text
              x="250"
              y="406"
              textAnchor="middle"
              fontFamily="'Playfair Display', Georgia, serif"
              fontSize="122"
              fontWeight="900"
              letterSpacing="12"
              fill="url(#c2eGoldLetter)"
              stroke="#FFF8DB"
              strokeWidth="1.5"
            >
              EAT
            </text>
          </g>

          {/* Curved Glass Highlight */}
          <path
            d="M 64 210 Q 250 80 436 210 A 210 210 0 0 0 64 210 Z"
            fill="#FFFFFF"
            opacity="0.04"
          />
        </svg>
      </div>

      {/* Optional Side Wordmark */}
      {showText && (
        <div className={`flex flex-col leading-none ${textClass}`}>
          <span className="font-serif text-[20px] sm:text-[22px] font-black text-[#FFF3D8] tracking-wider">
            CUP2EAT
          </span>
          <span className="text-[9px] text-[#F5C342] font-black tracking-[0.25em] uppercase mt-0.5">
            Eat Your Drink!
          </span>
        </div>
      )}
    </div>
  );
}
