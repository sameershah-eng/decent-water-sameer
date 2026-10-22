import React from 'react';
import { DropLogo } from './DropLogo';

interface BottleProps {
  className?: string;
  tiltAngle?: number;
}

export const FamilyPack: React.FC<BottleProps> = ({
  className = 'w-auto h-full max-h-full max-w-full',
  tiltAngle = 0
}) => {
  return (
    <svg
      viewBox="16 10 208 268"
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
        <linearGradient id="shrinkWrapSheen" x1="20" y1="20" x2="220" y2="260" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
          <stop offset="30%" stopColor="#BAE6FD" stopOpacity="0.25" />
          <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0B5FD6" stopOpacity="0.15" />
        </linearGradient>

        <linearGradient id="capMiniGrad" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0B5FD6" />
          <stop offset="100%" stopColor="#083B8A" />
        </linearGradient>

        <linearGradient id="miniBottleWater" x1="10" y1="20" x2="50" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0.75" />
        </linearGradient>
      </defs>

      {/* --- BACK ROW BOTTLES --- */}
      <g opacity="0.82" transform="translate(18, 0) scale(0.92)">
        <rect x="35" y="12" width="18" height="14" rx="2" fill="url(#capMiniGrad)" />
        <path d="M37 26 L37 38 C37 44 26 54 20 62 L20 220 C20 226 24 230 30 230 L58 230 C64 230 68 226 68 220 L68 62 C62 54 51 44 51 38 L51 26 Z" fill="url(#miniBottleWater)" stroke="#38BDF8" strokeWidth="1" />
      </g>
      <g opacity="0.85" transform="translate(76, 0) scale(0.92)">
        <rect x="35" y="12" width="18" height="14" rx="2" fill="url(#capMiniGrad)" />
        <path d="M37 26 L37 38 C37 44 26 54 20 62 L20 220 C20 226 24 230 30 230 L58 230 C64 230 68 226 68 220 L68 62 C62 54 51 44 51 38 L51 26 Z" fill="url(#miniBottleWater)" stroke="#38BDF8" strokeWidth="1" />
      </g>
      <g opacity="0.82" transform="translate(134, 0) scale(0.92)">
        <rect x="35" y="12" width="18" height="14" rx="2" fill="url(#capMiniGrad)" />
        <path d="M37 26 L37 38 C37 44 26 54 20 62 L20 220 C20 226 24 230 30 230 L58 230 C64 230 68 226 68 220 L68 62 C62 54 51 44 51 38 L51 26 Z" fill="url(#miniBottleWater)" stroke="#38BDF8" strokeWidth="1" />
      </g>

      {/* --- FRONT ROW BOTTLES --- */}
      {/* Front Bottle 1 (Left) */}
      <g transform="translate(16, 22)">
        <rect x="25" y="14" width="18" height="15" rx="2.5" fill="url(#capMiniGrad)" stroke="#083B8A" strokeWidth="0.8" />
        <path d="M26 29 L26 42 C26 48 16 58 10 68 L10 232 C10 240 16 245 22 245 L48 245 C54 245 60 240 60 232 L60 68 C54 58 44 48 44 42 L44 29 Z" fill="url(#miniBottleWater)" stroke="#38BDF8" strokeWidth="1.2" />
        <rect x="12" y="112" width="46" height="58" rx="4" fill="#FFFFFF" fillOpacity="0.94" stroke="#BAE6FD" strokeWidth="0.8" />
        <DropLogo x={15} y={116} scale={0.55} />
      </g>

      {/* Front Bottle 2 (Center) */}
      <g transform="translate(85, 22)">
        <rect x="25" y="14" width="18" height="15" rx="2.5" fill="url(#capMiniGrad)" stroke="#083B8A" strokeWidth="0.8" />
        <path d="M26 29 L26 42 C26 48 16 58 10 68 L10 232 C10 240 16 245 22 245 L48 245 C54 245 60 240 60 232 L60 68 C54 58 44 48 44 42 L44 29 Z" fill="url(#miniBottleWater)" stroke="#38BDF8" strokeWidth="1.2" />
        <rect x="12" y="112" width="46" height="58" rx="4" fill="#FFFFFF" fillOpacity="0.94" stroke="#BAE6FD" strokeWidth="0.8" />
        <DropLogo x={15} y={116} scale={0.55} />
      </g>

      {/* Front Bottle 3 (Right) */}
      <g transform="translate(154, 22)">
        <rect x="25" y="14" width="18" height="15" rx="2.5" fill="url(#capMiniGrad)" stroke="#083B8A" strokeWidth="0.8" />
        <path d="M26 29 L26 42 C26 48 16 58 10 68 L10 232 C10 240 16 245 22 245 L48 245 C54 245 60 240 60 232 L60 68 C54 58 44 48 44 42 L44 29 Z" fill="url(#miniBottleWater)" stroke="#38BDF8" strokeWidth="1.2" />
        <rect x="12" y="112" width="46" height="58" rx="4" fill="#FFFFFF" fillOpacity="0.94" stroke="#BAE6FD" strokeWidth="0.8" />
        <DropLogo x={15} y={116} scale={0.55} />
      </g>

      {/* --- CLEAR THERMO-SHRINK FILM WRAP OVER PACK --- */}
      <path
        d="M20 75 C20 60 40 55 70 58 C100 55 140 55 170 58 C200 55 220 60 220 75 L222 258 C222 272 205 276 170 274 C140 276 100 276 70 274 C35 276 18 272 18 258 Z"
        fill="url(#shrinkWrapSheen)"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeOpacity="0.7"
      />

      <path d="M22 100 Q120 85 218 100" stroke="#FFFFFF" strokeWidth="2.2" strokeOpacity="0.75" fill="none" />
      <path d="M20 250 Q120 240 220 250" stroke="#FFFFFF" strokeWidth="2.5" strokeOpacity="0.8" fill="none" />

      {/* "FAMILY PACK" Banner strip */}
      <rect x="42" y="215" width="156" height="26" rx="6" fill="#0B5FD6" fillOpacity="0.96" stroke="#3FB4F5" strokeWidth="1" />
      <text x="120" y="232" textAnchor="middle" fill="#FFFFFF" fontFamily="Montserrat, system-ui, sans-serif" fontWeight="800" fontSize="10" letterSpacing="0.6">
        FAMILY PACK • 12 BOTTLES
      </text>
    </svg>
  );
};
