import React from 'react';

interface BottleProps {
  className?: string;
  tiltAngle?: number;
}

export const Bottle500: React.FC<BottleProps> = ({
  className = 'w-36 h-64',
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
        viewBox="0 0 140 320"
        className="w-full h-full drop-shadow-xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="capGrad500" x1="55" y1="10" x2="85" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0B5FD6" />
            <stop offset="50%" stopColor="#1E75E8" />
            <stop offset="100%" stopColor="#083B8A" />
          </linearGradient>

          <linearGradient id="waterGrad500" x1="25" y1="60" x2="115" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.45" />
            <stop offset="40%" stopColor="#BAE6FD" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="bodySheen500" x1="20" y1="50" x2="120" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0B5FD6" stopOpacity="0.25" />
            <stop offset="25%" stopColor="#FFFFFF" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#E0F2FE" stopOpacity="0.2" />
            <stop offset="85%" stopColor="#0B5FD6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#083B8A" stopOpacity="0.5" />
          </linearGradient>

          <linearGradient id="logoDropGrad500" x1="50" y1="140" x2="90" y2="185" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3FB4F5" />
            <stop offset="50%" stopColor="#0B5FD6" />
            <stop offset="100%" stopColor="#0A2A6B" />
          </linearGradient>
        </defs>

        {/* Royal Blue Cap */}
        <rect x="56" y="8" width="28" height="20" rx="3.5" fill="url(#capGrad500)" stroke="#083B8A" strokeWidth="1" />
        <line x1="62" y1="10" x2="62" y2="26" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" />
        <line x1="70" y1="10" x2="70" y2="26" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" />
        <line x1="78" y1="10" x2="78" y2="26" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" />
        <rect x="55" y="28" width="30" height="3" rx="1" fill="#0B5FD6" />

        {/* Bottle Body */}
        <path d="M58 31 L58 48 C58 55 45 65 34 76 L30 96 C30 102 28 108 28 116 L28 285 C28 298 38 306 48 309 L92 309 C102 306 112 298 112 285 L112 116 C112 108 110 102 110 96 L106 76 C95 65 82 55 82 48 L82 31 Z" fill="url(#waterGrad500)" />
        <path d="M58 31 L58 48 C58 55 45 65 34 76 L30 96 C30 102 28 108 28 116 L28 285 C28 298 38 306 48 309 L92 309 C102 306 112 298 112 285 L112 116 C112 108 110 102 110 96 L106 76 C95 65 82 55 82 48 L82 31 Z" stroke="#38BDF8" strokeWidth="1.6" fill="url(#bodySheen500)" />

        {/* Neck ring collar */}
        <ellipse cx="70" cy="46" rx="12" ry="2.5" stroke="#BAE6FD" strokeWidth="1.2" fill="#E0F2FE" />

        {/* Ribbed grooves */}
        <path d="M33 88 C45 84 95 84 107 88" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.7" />
        <path d="M30 100 C45 96 95 96 110 100" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.7" />
        <ellipse cx="70" cy="132" rx="41" ry="4" stroke="#0284C7" strokeWidth="1.2" strokeOpacity="0.5" />

        {/* Label */}
        <rect x="29" y="142" width="82" height="92" rx="6" fill="#FFFFFF" fillOpacity="0.96" stroke="#BAE6FD" strokeWidth="1" filter="drop-shadow(0px 2px 4px rgba(11,95,214,0.12))" />
        <path d="M70 152 C70 152 56 170 56 182 C56 190 62 196 70 196 C78 196 84 190 84 182 C84 170 70 152 70 152 Z" fill="url(#logoDropGrad500)" />
        <path d="M60 184 C63 180 77 180 80 184" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Rotated "Decent" */}
        <text
          x="-187"
          y="74"
          transform="rotate(-90)"
          fill="#FFFFFF"
          fontFamily="Montserrat, sans-serif"
          fontWeight="800"
          fontSize="9.5"
        >
          Decent
        </text>
        <text
          x="-171"
          y="74"
          transform="rotate(-90)"
          fill="#BAE6FD"
          fontFamily="Montserrat, sans-serif"
          fontWeight="500"
          fontSize="6"
        >
          Water
        </text>

        <text x="70" y="210" textAnchor="middle" fill="#0A2A6B" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700" fontSize="5.5">
          Bottled Drinking Water
        </text>
        <text x="70" y="220" textAnchor="middle" fill="#0284C7" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="600" fontSize="5">
          Net Volume 500 mL
        </text>

        {/* Lower ribs & base */}
        <ellipse cx="70" cy="248" rx="41" ry="4" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.7" />
        <ellipse cx="70" cy="258" rx="41" ry="4" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.7" />
        <path d="M38 290 C45 298 55 304 70 304 C85 304 95 298 102 290" stroke="#0284C7" strokeWidth="1.4" strokeOpacity="0.6" />

        {/* Highlights */}
        <path d="M38 80 L36 135 L36 280 C36 285 39 290 42 294 C39 288 38 280 38 274 L38 135 L41 80 Z" fill="#FFFFFF" fillOpacity="0.75" />
        <circle cx="38" cy="118" r="1.5" fill="#FFFFFF" fillOpacity="0.8" />
        <circle cx="102" cy="125" r="1.3" fill="#FFFFFF" fillOpacity="0.8" />
        <circle cx="40" cy="245" r="1.6" fill="#FFFFFF" fillOpacity="0.85" />
      </svg>
    </div>
  );
};
