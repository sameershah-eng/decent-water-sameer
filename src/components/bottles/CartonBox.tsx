import React from 'react';
import { DropLogo } from './DropLogo';

interface BottleProps {
  className?: string;
  tiltAngle?: number;
}

export const CartonBox: React.FC<BottleProps> = ({
  className = 'w-auto h-full max-h-full max-w-full',
  tiltAngle = 0
}) => {
  return (
    <svg
      viewBox="24 16 200 194"
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
      <polygon points="40,65 120,20 215,50 145,95" fill="url(#cartonTopGrad)" stroke="#94A3B8" strokeWidth="1.2" />
      <polygon points="76,44 116,22 176,71 136,93" fill="url(#tapeGrad)" opacity="0.85" />
      <polygon points="30,70 145,95 145,205 30,175" fill="url(#cartonFrontGrad)" stroke="#CBD5E1" strokeWidth="1.2" />
      <polygon points="145,95 220,60 220,165 145,205" fill="url(#cartonSideGrad)" stroke="#64748B" strokeWidth="1.2" />

      {/* Decent Water Logo on front with DropLogo */}
      <g transform="translate(48, 100) scale(0.65)">
        <DropLogo x={0} y={0} scale={1} />
      </g>
      <text x="88" y="160" textAnchor="middle" fill="#0A2A6B" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="7.5">
        MASTER CARTON
      </text>
      <text x="88" y="170" textAnchor="middle" fill="#0284C7" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="600" fontSize="6.2">
        Pure Drinking Water
      </text>

      {/* Handling Glyphs on bottom front */}
      <g stroke="#64748B" strokeWidth="1.5" fill="none" transform="translate(40, 172) scale(0.65)">
        <line x1="10" y1="18" x2="10" y2="4" />
        <polyline points="7,8 10,4 13,8" />
        <line x1="20" y1="18" x2="20" y2="4" />
        <polyline points="17,8 20,4 23,8" />
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
  );
};
