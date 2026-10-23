import React from 'react';
import { DropLogo } from './DropLogo';
import { CustomBottleLabel } from './CustomBottleLabel';
import { CustomLabelData } from '../../data/customBottles';

interface BottleProps {
  className?: string;
  animatedWater?: boolean;
  tiltAngle?: number;
  customLabel?: CustomLabelData;
  id?: string;
}

export const Bottle1500: React.FC<BottleProps> = ({
  className = 'w-auto h-full max-h-full max-w-full',
  animatedWater = false,
  tiltAngle = 0,
  customLabel,
  id
}) => {
  return (
    <svg
      id={id}
      viewBox="28 8 104 384"
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
        {/* Cap Gradient */}
        <linearGradient id="capGrad1500" x1="60" y1="10" x2="100" y2="35" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0B5FD6" />
          <stop offset="50%" stopColor="#1E75E8" />
          <stop offset="100%" stopColor="#083B8A" />
        </linearGradient>

        {/* Water Fill Gradient */}
        <linearGradient id="waterGrad1500" x1="30" y1="80" x2="130" y2="380" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.45" />
          <stop offset="40%" stopColor="#BAE6FD" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0.8" />
        </linearGradient>

        {/* Plastic Body Sheen */}
        <linearGradient id="bodySheen1500" x1="20" y1="50" x2="140" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0B5FD6" stopOpacity="0.25" />
          <stop offset="25%" stopColor="#FFFFFF" stopOpacity="0.75" />
          <stop offset="50%" stopColor="#E0F2FE" stopOpacity="0.2" />
          <stop offset="85%" stopColor="#0B5FD6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#083B8A" stopOpacity="0.5" />
        </linearGradient>

        {/* Specular White Highlight */}
        <linearGradient id="specularHighlight1500" x1="45" y1="60" x2="52" y2="380" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
        </linearGradient>

        {/* Label Gradient */}
        <linearGradient id="labelBackdrop1500" x1="28" y1="170" x2="132" y2="280" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.96" />
          <stop offset="100%" stopColor="#F0F9FF" stopOpacity="0.98" />
        </linearGradient>
      </defs>

      {/* --- ROYAL BLUE CAP --- */}
      <rect x="65" y="10" width="30" height="22" rx="4" fill="url(#capGrad1500)" stroke="#083B8A" strokeWidth="1" />
      <line x1="70" y1="12" x2="70" y2="30" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" />
      <line x1="75" y1="12" x2="75" y2="30" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" />
      <line x1="80" y1="12" x2="80" y2="30" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" />
      <line x1="85" y1="12" x2="85" y2="30" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" />
      <line x1="90" y1="12" x2="90" y2="30" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" />
      <rect x="64" y="32" width="32" height="4" rx="1" fill="#0B5FD6" />

      {/* --- BOTTLE NECK & BODY --- */}
      <path
        d="M68 36 L68 55 C68 62 55 72 40 85 L35 110 C35 118 32 125 32 135 L32 360 C32 375 42 385 55 388 L105 388 C118 385 128 375 128 360 L128 135 C128 125 125 118 125 110 L120 85 C105 72 92 62 92 55 L92 36 Z"
        fill="url(#waterGrad1500)"
      />
      <path
        d="M68 36 L68 55 C68 62 55 72 40 85 L35 110 C35 118 32 125 32 135 L32 360 C32 375 42 385 55 388 L105 388 C118 385 128 375 128 360 L128 135 C128 125 125 118 125 110 L120 85 C105 72 92 62 92 55 L92 36 Z"
        stroke="#38BDF8"
        strokeWidth="1.8"
        fill="url(#bodySheen1500)"
      />

      {/* Collar */}
      <ellipse cx="80" cy="52" rx="14" ry="3" stroke="#BAE6FD" strokeWidth="1.5" fill="#E0F2FE" fillOpacity="0.5" />

      {/* Shoulder ribs */}
      <path d="M38 98 C50 94 110 94 122 98" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.7" />
      <path d="M36 108 C50 104 110 104 124 108" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.7" />
      <path d="M34 118 C50 114 110 114 126 118" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.7" />

      {/* Waist grooves */}
      <ellipse cx="80" cy="155" rx="47" ry="5" stroke="#0284C7" strokeWidth="1.5" strokeOpacity="0.5" />
      <ellipse cx="80" cy="160" rx="47" ry="5" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.7" />

      {/* --- BRAND LABEL (Custom or Standard) --- */}
      {customLabel ? (
        <CustomBottleLabel x={33} y={172} width={94} height={112} rx={8} labelData={customLabel} />
      ) : (
        <>
          <rect
            x="33"
            y="172"
            width="94"
            height="112"
            rx="8"
            fill="url(#labelBackdrop1500)"
            stroke="#BAE6FD"
            strokeWidth="1"
          />

          {/* Shared DropLogo component */}
          <DropLogo x={45} y={178} scale={1} />

          {/* Label Text below logo */}
          <text
            x="80"
            y="262"
            textAnchor="middle"
            fill="#0A2A6B"
            fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
            fontWeight="800"
            fontSize="6.8"
            letterSpacing="0.2"
          >
            Bottled Drinking Water
          </text>
          <text
            x="80"
            y="273"
            textAnchor="middle"
            fill="#0284C7"
            fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
            fontWeight="700"
            fontSize="6.2"
          >
            Net Volume 1.5 Liter
          </text>
        </>
      )}

      {/* Lower ribs */}
      <ellipse cx="80" cy="304" rx="47" ry="5" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.7" />
      <ellipse cx="80" cy="316" rx="47" ry="5" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.7" />
      <ellipse cx="80" cy="328" rx="47" ry="5" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.7" />

      {/* Base */}
      <path d="M42 365 C48 375 60 384 80 384 C100 384 112 375 118 365" stroke="#0284C7" strokeWidth="1.5" strokeOpacity="0.6" />
      <line x1="56" y1="375" x2="56" y2="386" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.8" />
      <line x1="80" y1="378" x2="80" y2="388" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.8" />
      <line x1="104" y1="375" x2="104" y2="386" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.8" />

      {/* Specular White Gloss */}
      <path d="M46 88 L43 160 L43 360 C43 365 47 372 50 376 C46 368 45 355 45 350 L45 160 L49 88 Z" fill="url(#specularHighlight1500)" />
      <ellipse cx="50" cy="115" rx="3" ry="12" fill="#FFFFFF" fillOpacity="0.75" />

      {/* Condensation droplets */}
      <circle cx="44" cy="130" r="1.8" fill="#FFFFFF" fillOpacity="0.8" />
      <circle cx="42" cy="138" r="1.2" fill="#BAE6FD" />
      <circle cx="116" cy="142" r="1.5" fill="#FFFFFF" fillOpacity="0.75" />
      <circle cx="118" cy="150" r="1" fill="#BAE6FD" />
      <circle cx="48" cy="292" r="2" fill="#FFFFFF" fillOpacity="0.85" />
      <circle cx="114" cy="296" r="1.8" fill="#FFFFFF" fillOpacity="0.8" />
      <circle cx="112" cy="340" r="2.2" fill="#FFFFFF" fillOpacity="0.9" />

      {/* Optional wave */}
      {animatedWater && (
        <g className="opacity-70 pointer-events-none">
          <path
            d="M34 140 Q57 132 80 140 T126 140 L126 360 L34 360 Z"
            fill="#38BDF8"
            fillOpacity="0.15"
          >
            <animate
              attributeName="d"
              dur="4s"
              repeatCount="indefinite"
              values="
                M34 140 Q57 132 80 140 T126 140 L126 360 L34 360 Z;
                M34 140 Q57 148 80 140 T126 140 L126 360 L34 360 Z;
                M34 140 Q57 132 80 140 T126 140 L126 360 L34 360 Z
              "
            />
          </path>
        </g>
      )}
    </svg>
  );
};
