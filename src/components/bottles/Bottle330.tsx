import React from 'react';
import { DropLogo } from './DropLogo';
import { CustomBottleLabel } from './CustomBottleLabel';
import { CustomLabelData } from '../../data/customBottles';

interface BottleProps {
  className?: string;
  tiltAngle?: number;
  customLabel?: CustomLabelData;
  id?: string;
}

export const Bottle330: React.FC<BottleProps> = ({
  className = 'w-auto h-full max-h-full max-w-full',
  tiltAngle = 0,
  customLabel,
  id
}) => {
  return (
    <svg
      id={id}
      viewBox="24 8 92 254"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className={`select-none drop-shadow-md ${className}`}
      style={{
        transform: tiltAngle ? `rotate(${tiltAngle}deg)` : undefined,
        transition: 'transform 0.2s ease-out'
      }}
    >
      <defs>
        <linearGradient id="capGrad330" x1="55" y1="10" x2="85" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0B5FD6" />
          <stop offset="50%" stopColor="#1E75E8" />
          <stop offset="100%" stopColor="#083B8A" />
        </linearGradient>

        <linearGradient id="waterGrad330" x1="25" y1="50" x2="115" y2="250" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.45" />
          <stop offset="40%" stopColor="#BAE6FD" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0.8" />
        </linearGradient>

        <linearGradient id="bodySheen330" x1="20" y1="50" x2="120" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0B5FD6" stopOpacity="0.25" />
          <stop offset="25%" stopColor="#FFFFFF" stopOpacity="0.75" />
          <stop offset="50%" stopColor="#E0F2FE" stopOpacity="0.2" />
          <stop offset="85%" stopColor="#0B5FD6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#083B8A" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* Royal Blue Cap */}
      <rect x="56" y="10" width="28" height="18" rx="3.5" fill="url(#capGrad330)" stroke="#083B8A" strokeWidth="1" />
      <line x1="62" y1="12" x2="62" y2="26" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" />
      <line x1="70" y1="12" x2="70" y2="26" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" />
      <line x1="78" y1="12" x2="78" y2="26" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" />
      <rect x="55" y="28" width="30" height="3" rx="1" fill="#0B5FD6" />

      {/* Petite Bottle Body */}
      <path
        d="M58 31 L58 45 C58 52 45 62 34 72 L30 88 C30 94 28 100 28 108 L28 234 C28 245 38 252 48 254 L92 254 C102 252 112 245 112 234 L112 108 C112 100 110 94 110 88 L106 72 C95 62 82 52 82 45 L82 31 Z"
        fill="url(#waterGrad330)"
      />
      <path
        d="M58 31 L58 45 C58 52 45 62 34 72 L30 88 C30 94 28 100 28 108 L28 234 C28 245 38 252 48 254 L92 254 C102 252 112 245 112 234 L112 108 C112 100 110 94 110 88 L106 72 C95 62 82 52 82 45 L82 31 Z"
        stroke="#38BDF8"
        strokeWidth="1.6"
        fill="url(#bodySheen330)"
      />

      {/* Collar */}
      <ellipse cx="70" cy="44" rx="12" ry="2.5" stroke="#BAE6FD" strokeWidth="1.2" fill="#E0F2FE" />

      {/* Shoulder Ribs */}
      <path d="M33 80 C45 76 95 76 107 80" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.7" />
      <ellipse cx="70" cy="106" rx="41" ry="3.8" stroke="#0284C7" strokeWidth="1.2" strokeOpacity="0.5" />

      {/* Label (Custom or Standard) */}
      {customLabel ? (
        <CustomBottleLabel x={29} y={114} width={82} height={88} rx={6} labelData={customLabel} />
      ) : (
        <>
          <rect
            x="29"
            y="114"
            width="82"
            height="88"
            rx="6"
            fill="#FFFFFF"
            fillOpacity="0.96"
            stroke="#BAE6FD"
            strokeWidth="1"
          />
          <DropLogo x={38} y={118} scale={0.9} />
          <text
            x="70"
            y="186"
            textAnchor="middle"
            fill="#0A2A6B"
            fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
            fontWeight="800"
            fontSize="5.8"
            letterSpacing="0.2"
          >
            Bottled Drinking Water
          </text>
          <text
            x="70"
            y="194"
            textAnchor="middle"
            fill="#0284C7"
            fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
            fontWeight="700"
            fontSize="5.2"
          >
            Mini Event Size 330 mL
          </text>
        </>
      )}

      {/* Lower ribs & base */}
      <ellipse cx="70" cy="212" rx="41" ry="3.8" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.7" />
      <path d="M38 238 C45 246 55 250 70 250 C85 250 95 246 102 238" stroke="#0284C7" strokeWidth="1.4" strokeOpacity="0.6" />

      {/* Highlights */}
      <path d="M38 72 L36 110 L36 230 C36 234 39 238 42 242 C39 236 38 230 38 226 L38 110 L41 72 Z" fill="#FFFFFF" fillOpacity="0.75" />
      <circle cx="38" cy="100" r="1.5" fill="#FFFFFF" fillOpacity="0.8" />
      <circle cx="102" cy="105" r="1.3" fill="#FFFFFF" fillOpacity="0.8" />
    </svg>
  );
};
