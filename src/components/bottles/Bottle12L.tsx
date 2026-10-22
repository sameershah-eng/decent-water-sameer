import React from 'react';

interface BottleProps {
  className?: string;
  tiltAngle?: number;
}

export const Bottle12L: React.FC<BottleProps> = ({
  className = 'w-48 h-72',
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
        viewBox="0 0 200 320"
        className="w-full h-full drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="capGrad12" x1="85" y1="12" x2="115" y2="35" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0B5FD6" />
            <stop offset="50%" stopColor="#1E75E8" />
            <stop offset="100%" stopColor="#083B8A" />
          </linearGradient>

          <linearGradient id="handleGrad12" x1="120" y1="35" x2="160" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#0B5FD6" />
            <stop offset="100%" stopColor="#0A2A6B" />
          </linearGradient>

          <linearGradient id="waterGrad12" x1="30" y1="50" x2="170" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.5" />
            <stop offset="40%" stopColor="#BAE6FD" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0.85" />
          </linearGradient>

          <linearGradient id="sheen12" x1="35" y1="50" x2="165" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0B5FD6" stopOpacity="0.25" />
            <stop offset="25%" stopColor="#FFFFFF" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#E0F2FE" stopOpacity="0.2" />
            <stop offset="85%" stopColor="#0B5FD6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#083B8A" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Integrated Handle on Right (from neck to shoulder) as seen in Flyer 3 */}
        <path
          d="M115 48 C140 48 160 58 156 82 C152 102 142 108 128 108"
          stroke="url(#handleGrad12)"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M115 48 C140 48 160 58 156 82 C152 102 142 108 128 108"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeOpacity="0.6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Cap */}
        <rect x="85" y="10" width="30" height="22" rx="4" fill="url(#capGrad12)" stroke="#083B8A" strokeWidth="1" />
        <line x1="90" y1="12" x2="90" y2="30" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" />
        <line x1="95" y1="12" x2="95" y2="30" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" />
        <line x1="100" y1="12" x2="100" y2="30" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" />
        <line x1="105" y1="12" x2="105" y2="30" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" />
        <line x1="110" y1="12" x2="110" y2="30" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" />

        {/* Main Body */}
        <path
          d="M86 32 L86 52 C86 64 68 80 44 98 L40 114 C36 122 36 135 36 150 L36 280 C36 295 48 306 65 308 L135 308 C152 306 164 295 164 280 L164 150 C164 135 164 122 160 114 L156 98 C132 80 114 64 114 52 L114 32 Z"
          fill="url(#waterGrad12)"
        />
        <path
          d="M86 32 L86 52 C86 64 68 80 44 98 L40 114 C36 122 36 135 36 150 L36 280 C36 295 48 306 65 308 L135 308 C152 306 164 295 164 280 L164 150 C164 135 164 122 160 114 L156 98 C132 80 114 64 114 52 L114 32 Z"
          stroke="#38BDF8"
          strokeWidth="2"
          fill="url(#sheen12)"
        />

        {/* Horizontal Grooves */}
        <ellipse cx="100" cy="118" rx="60" ry="6" stroke="#38BDF8" strokeWidth="1.6" strokeOpacity="0.7" />
        <ellipse cx="100" cy="132" rx="62" ry="6" stroke="#38BDF8" strokeWidth="1.6" strokeOpacity="0.7" />
        <ellipse cx="100" cy="250" rx="62" ry="6" stroke="#38BDF8" strokeWidth="1.6" strokeOpacity="0.7" />
        <ellipse cx="100" cy="264" rx="62" ry="6" stroke="#38BDF8" strokeWidth="1.6" strokeOpacity="0.7" />

        {/* Central Label */}
        <rect x="42" y="146" width="116" height="92" rx="8" fill="#FFFFFF" fillOpacity="0.96" stroke="#BAE6FD" strokeWidth="1.2" filter="drop-shadow(0px 3px 6px rgba(11,95,214,0.14))" />

        {/* Drop Logo */}
        <path d="M100 155 C100 155 84 174 84 186 C84 195 91 202 100 202 C109 202 116 195 116 186 C116 174 100 155 100 155 Z" fill="url(#handleGrad12)" />
        <path d="M88 190 C92 186 108 186 112 190" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />

        <text x="-194" y="104" transform="rotate(-90)" fill="#FFFFFF" fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="10.5">
          Decent
        </text>
        <text x="-178" y="104" transform="rotate(-90)" fill="#BAE6FD" fontFamily="Montserrat, sans-serif" fontWeight="500" fontSize="6.5">
          Water
        </text>

        <text x="100" y="215" textAnchor="middle" fill="#0A2A6B" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700" fontSize="7">
          Bottled Drinking Water
        </text>
        <text x="100" y="226" textAnchor="middle" fill="#0284C7" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700" fontSize="6.5">
          Net Volume 12 Liter
        </text>

        {/* Gloss Highlights */}
        <path d="M52 100 L48 145 L48 275 C48 285 54 295 62 298 C54 290 52 280 52 270 L52 145 L56 100 Z" fill="#FFFFFF" fillOpacity="0.8" />
        <circle cx="52" cy="125" r="2" fill="#FFFFFF" fillOpacity="0.9" />
        <circle cx="148" cy="130" r="1.8" fill="#FFFFFF" fillOpacity="0.8" />
        <circle cx="54" cy="255" r="2.2" fill="#FFFFFF" fillOpacity="0.9" />
      </svg>
    </div>
  );
};
