import React from 'react';

interface DropLogoProps {
  x?: number;
  y?: number;
  scale?: number;
  className?: string;
  standalone?: boolean;
}

export const DropLogo: React.FC<DropLogoProps> = ({
  x = 0,
  y = 0,
  scale = 1,
  className = '',
  standalone = false
}) => {
  const content = (
    <g transform={`translate(${x}, ${y}) scale(${scale})`} className={className}>
      <defs>
        <linearGradient id="sharedDropGrad" x1="15" y1="5" x2="55" y2="75" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3FB4F5" />
          <stop offset="45%" stopColor="#0B5FD6" />
          <stop offset="100%" stopColor="#0A2A6B" />
        </linearGradient>
      </defs>

      {/* Blue gradient drop shape */}
      <path
        d="M35 4 C35 4 8 36 8 52 C8 67 20 78 35 78 C50 78 62 67 62 52 C62 36 35 4 35 4 Z"
        fill="url(#sharedDropGrad)"
      />

      {/* Specular highlight on drop curve */}
      <path
        d="M26 18 C26 18 16 34 16 48 C16 53 18 58 22 62 C20 57 19 52 19 48 C19 36 26 22 26 18 Z"
        fill="#FFFFFF"
        fillOpacity="0.45"
      />

      {/* "Decent" text: white, bold, horizontal (not rotated), centered inside drop */}
      <text
        x="35"
        y="41"
        textAnchor="middle"
        fill="#FFFFFF"
        fontFamily="Montserrat, system-ui, sans-serif"
        fontWeight="900"
        fontSize="12.5"
        letterSpacing="-0.2"
        textLength="38"
        lengthAdjust="spacingAndGlyphs"
      >
        Decent
      </text>

      {/* "Water" smaller underneath */}
      <text
        x="35"
        y="51"
        textAnchor="middle"
        fill="#BAE6FD"
        fontFamily="Montserrat, system-ui, sans-serif"
        fontWeight="600"
        fontSize="7.5"
        letterSpacing="0.4"
        textLength="23"
        lengthAdjust="spacingAndGlyphs"
      >
        Water
      </text>

      {/* White curved swoosh under the text like the client logo */}
      <path
        d="M18 57 C24 53 46 53 52 57"
        stroke="#FFFFFF"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M23 62 C27 59 43 59 47 62"
        stroke="#FFFFFF"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeOpacity="0.8"
        fill="none"
      />
    </g>
  );

  if (standalone) {
    return (
      <svg
        viewBox="0 0 70 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        preserveAspectRatio="xMidYMid meet"
      >
        {content}
      </svg>
    );
  }

  return content;
};
