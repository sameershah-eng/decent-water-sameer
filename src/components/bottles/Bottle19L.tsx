import React from 'react';
import { DropLogo } from './DropLogo';

interface BottleProps {
  className?: string;
  tiltAngle?: number;
}

export const Bottle19L: React.FC<BottleProps> = ({
  className = 'w-auto h-full max-h-full max-w-full',
  tiltAngle = 0
}) => {
  return (
    <svg
      viewBox="26 6 168 328"
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
        <linearGradient id="capGrad19" x1="90" y1="10" x2="130" y2="35" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0B5FD6" />
          <stop offset="50%" stopColor="#1E75E8" />
          <stop offset="100%" stopColor="#083B8A" />
        </linearGradient>

        <linearGradient id="waterGrad19" x1="30" y1="40" x2="190" y2="320" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.45" />
          <stop offset="45%" stopColor="#7DD3FC" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.85" />
        </linearGradient>

        <linearGradient id="sheen19" x1="30" y1="40" x2="190" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0B5FD6" stopOpacity="0.3" />
          <stop offset="25%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#E0F2FE" stopOpacity="0.2" />
          <stop offset="85%" stopColor="#0B5FD6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#083B8A" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Dispenser Hygienic Neck & Cap with Seal */}
      <rect x="94" y="8" width="32" height="24" rx="4" fill="url(#capGrad19)" stroke="#083B8A" strokeWidth="1" />
      <line x1="100" y1="10" x2="100" y2="30" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" />
      <line x1="110" y1="10" x2="110" y2="30" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" />
      <line x1="120" y1="10" x2="120" y2="30" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" />

      {/* Dispenser Snap Rim */}
      <rect x="90" y="32" width="40" height="8" rx="2" fill="#0B5FD6" stroke="#083B8A" strokeWidth="1" />
      <rect x="92" y="40" width="36" height="12" fill="#BAE6FD" fillOpacity="0.4" stroke="#38BDF8" strokeWidth="1" />
      <ellipse cx="110" cy="52" rx="22" ry="4" stroke="#0284C7" strokeWidth="1.5" fill="#E0F2FE" />

      {/* Sturdy 19L Carboy Body */}
      <path
        d="M94 52 L94 65 C94 80 70 96 36 115 L32 135 C30 145 30 160 30 175 L30 300 C30 318 45 328 65 330 L155 330 C175 328 190 318 190 300 L190 175 C190 160 190 145 188 135 L184 115 C150 96 126 80 126 65 L126 52 Z"
        fill="url(#waterGrad19)"
      />
      <path
        d="M94 52 L94 65 C94 80 70 96 36 115 L32 135 C30 145 30 160 30 175 L30 300 C30 318 45 328 65 330 L155 330 C175 328 190 318 190 300 L190 175 C190 160 190 145 188 135 L184 115 C150 96 126 80 126 65 L126 52 Z"
        stroke="#38BDF8"
        strokeWidth="2.2"
        fill="url(#sheen19)"
      />

      {/* Structural Molded Rings */}
      <ellipse cx="110" cy="120" rx="72" ry="6" stroke="#38BDF8" strokeWidth="1.6" strokeOpacity="0.75" />
      <ellipse cx="110" cy="132" rx="74" ry="6" stroke="#0284C7" strokeWidth="1.6" strokeOpacity="0.5" />
      <ellipse cx="110" cy="144" rx="76" ry="6" stroke="#38BDF8" strokeWidth="1.6" strokeOpacity="0.75" />
      <ellipse cx="110" cy="265" rx="76" ry="6" stroke="#38BDF8" strokeWidth="1.6" strokeOpacity="0.75" />
      <ellipse cx="110" cy="278" rx="76" ry="6" stroke="#0284C7" strokeWidth="1.6" strokeOpacity="0.5" />
      <ellipse cx="110" cy="290" rx="74" ry="6" stroke="#38BDF8" strokeWidth="1.6" strokeOpacity="0.75" />

      {/* Center Label Area */}
      <rect
        x="38"
        y="152"
        width="144"
        height="106"
        rx="10"
        fill="#FFFFFF"
        fillOpacity="0.96"
        stroke="#BAE6FD"
        strokeWidth="1.2"
      />

      {/* Shared DropLogo component */}
      <DropLogo x={73} y={156} scale={1.05} />

      {/* Label Text below logo */}
      <text
        x="110"
        y="246"
        textAnchor="middle"
        fill="#0A2A6B"
        fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
        fontWeight="800"
        fontSize="8.5"
        letterSpacing="0.2"
      >
        Bottled Drinking Water
      </text>
      <text
        x="110"
        y="256"
        textAnchor="middle"
        fill="#0284C7"
        fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
        fontWeight="700"
        fontSize="7.8"
      >
        Net Volume 19 Liter
      </text>

      {/* Gloss Reflections */}
      <path d="M50 110 L45 150 L45 295 C45 310 52 320 62 324 C52 314 49 300 49 290 L49 150 L54 110 Z" fill="#FFFFFF" fillOpacity="0.85" />
      <circle cx="52" cy="130" r="2.5" fill="#FFFFFF" fillOpacity="0.95" />
      <circle cx="170" cy="135" r="2" fill="#FFFFFF" fillOpacity="0.8" />
      <circle cx="50" cy="270" r="2.5" fill="#FFFFFF" fillOpacity="0.95" />
      <circle cx="168" cy="275" r="2" fill="#FFFFFF" fillOpacity="0.8" />
    </svg>
  );
};
