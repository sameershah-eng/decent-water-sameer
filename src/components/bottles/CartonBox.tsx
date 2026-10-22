import React from 'react';

interface BottleProps {
  className?: string;
  tiltAngle?: number;
}

export const CartonBox: React.FC<BottleProps> = ({
  className = 'w-52 h-64',
  tiltAngle = 0
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{
        transform: tiltAngle ? `rotate(${tiltAngle}deg)` : undefined,
        transition: 'transform 0.2s ease-out'
      }}
    >
      <svg
        viewBox="0 0 240 220"
        className="w-full h-full drop-shadow-xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Cardboard gradients */}
          <linearGradient id="cartonTopGrad" x1="40" y1="20" x2="200" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>

          <linearGradient id="cartonFrontGrad" x1="20" y1="70" x2="160" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F8FAFC" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>

          <linearGradient id="cartonSideGrad" x1="160" y1="70" x2="230" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>

          <linearGradient id="tapeGrad" x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0B5FD6" />
            <stop offset="100%" stopColor="#3FB4F5" />
          </linearGradient>
        </defs>

        {/* 3D Isometric Cardboard Box */}
        {/* Top Flap */}
        <polygon points="40,65 120,20 215,50 145,95" fill="url(#cartonTopGrad)" stroke="#94A3B8" strokeWidth="1.2" />

        {/* Blue sealing tape on top */}
        <polygon points="76,44 116,22 176,71 136,93" fill="url(#tapeGrad)" opacity="0.85" />

        {/* Front Face */}
        <polygon points="30,70 145,95 145,205 30,175" fill="url(#cartonFrontGrad)" stroke="#CBD5E1" strokeWidth="1.2" />

        {/* Side Face */}
        <polygon points="145,95 220,60 220,165 145,205" fill="url(#cartonSideGrad)" stroke="#64748B" strokeWidth="1.2" />

        {/* Decent Water Logo on front */}
        <g transform="translate(42, 105) scale(0.85)">
          <path d="M45 4 C45 4 25 24 25 36 C25 45 32 52 45 52 C58 52 65 45 65 36 C65 24 45 4 45 4 Z" fill="#0B5FD6" />
          <path d="M32 38 C36 34 54 34 58 38" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <text x="45" y="32" textAnchor="middle" fill="#FFFFFF" fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="7.5">
            Decent
          </text>
          <text x="45" y="42" textAnchor="middle" fill="#BAE6FD" fontFamily="Montserrat, sans-serif" fontWeight="600" fontSize="5.5">
            Water
          </text>
          <text x="45" y="66" textAnchor="middle" fill="#0A2A6B" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="7.5">
            MASTER CARTON
          </text>
          <text x="45" y="75" textAnchor="middle" fill="#0284C7" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="600" fontSize="6">
            Pure Drinking Water
          </text>
        </g>

        {/* Handling Glyphs on bottom front (This way up, Fragile umbrella, Recyclable) */}
        <g stroke="#64748B" strokeWidth="1.5" fill="none" transform="translate(42, 168) scale(0.7)">
          {/* Two arrows up */}
          <line x1="10" y1="18" x2="10" y2="4" />
          <polyline points="7,8 10,4 13,8" />
          <line x1="20" y1="18" x2="20" y2="4" />
          <polyline points="17,8 20,4 23,8" />
          {/* Umbrella */}
          <path d="M38 12 C38 6 48 6 48 12 Z" fill="#94A3B8" />
          <line x1="43" y1="12" x2="43" y2="18" />
          <path d="M43 18 C43 20 40 20 40 18" />
        </g>

        {/* Side Face Markings */}
        <text x="180" y="115" transform="rotate(-15 180 115)" fill="#F8FAFC" opacity="0.9" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="8">
          SEALED PACK
        </text>
        <text x="180" y="130" transform="rotate(-15 180 130)" fill="#CBD5E1" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="600" fontSize="7">
          AHDI PLANT
        </text>
      </svg>
    </div>
  );
};
