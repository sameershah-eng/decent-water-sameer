import React, { useEffect } from 'react';
import { CustomLabelData, LABEL_THEMES } from '../../data/customBottles';

export function isUrduText(text: string): boolean {
  if (!text) return false;
  return /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/.test(text);
}

export function loadUrduFontIfNeeded() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById('noto-nastaliq-urdu-font')) {
    const link = document.createElement('link');
    link.id = 'noto-nastaliq-urdu-font';
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap';
    document.head.appendChild(link);
  }
}

interface CustomBottleLabelProps {
  x: number;
  y: number;
  width: number;
  height: number;
  rx?: number;
  labelData: CustomLabelData;
  scale?: number;
}

export const CustomBottleLabel: React.FC<CustomBottleLabelProps> = ({
  x,
  y,
  width,
  height,
  rx = 6,
  labelData,
  scale = 1
}) => {
  const theme = LABEL_THEMES[labelData.theme] || LABEL_THEMES.royalBlue;
  const isUrdu =
    labelData.isUrdu ||
    isUrduText(labelData.mainText) ||
    isUrduText(labelData.secondLine);

  useEffect(() => {
    if (isUrdu) {
      loadUrduFontIfNeeded();
    }
  }, [isUrdu]);

  const centerX = x + width / 2;
  const gradId = `customGrad-${labelData.theme}-${Math.round(x)}-${Math.round(y)}`;

  // Dynamic font size calculation so long names never clip or overflow
  const mainLength = labelData.mainText.trim().length || 1;
  const baseMainSize = isUrdu ? 8.5 : 7.6;
  const dynamicMainSize = Math.max(
    4.2,
    Math.min(baseMainSize, ((width - 12) / (mainLength * (isUrdu ? 0.42 : 0.46))))
  );

  const secondLength = labelData.secondLine ? labelData.secondLine.trim().length : 0;
  const dynamicSecondSize = Math.max(
    3.4,
    Math.min(5.2, ((width - 16) / Math.max(1, secondLength * 0.48)))
  );

  return (
    <g className="custom-bottle-label-group select-none">
      <defs>
        <linearGradient id={gradId} x1={x} y1={y} x2={x + width} y2={y + height} gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={theme.bgGradient[0]} />
          <stop offset="100%" stopColor={theme.bgGradient[1]} />
        </linearGradient>
      </defs>

      {/* Outer Label Backdrop */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={rx}
        fill={`url(#${gradId})`}
        stroke={theme.borderColor}
        strokeWidth={1.2}
      />

      {/* Decorative Label Borders based on template */}
      {labelData.template === 'classic' && (
        <>
          {/* Double hairline inner border */}
          <rect
            x={x + 3}
            y={y + 3}
            width={width - 6}
            height={height - 6}
            rx={rx - 2}
            fill="none"
            stroke={theme.borderColor}
            strokeWidth={0.6}
            strokeDasharray="2,1"
            opacity="0.8"
          />
          {/* Corner flourish dots */}
          <circle cx={x + 6} cy={y + 6} r={1} fill={theme.accentColor} />
          <circle cx={x + width - 6} cy={y + 6} r={1} fill={theme.accentColor} />
          <circle cx={x + 6} cy={y + height - 6} r={1} fill={theme.accentColor} />
          <circle cx={x + width - 6} cy={y + height - 6} r={1} fill={theme.accentColor} />
        </>
      )}

      {labelData.template === 'modern' && (
        <>
          {/* Modern accent top bar */}
          <rect
            x={x + 4}
            y={y + 3}
            width={width - 8}
            height={2.2}
            rx={1}
            fill={theme.accentColor}
            opacity="0.9"
          />
        </>
      )}

      {labelData.template === 'elegant' && (
        <>
          {/* Elegant curved arc line */}
          <path
            d={`M${x + 8} ${y + height * 0.32} Q${centerX} ${y + height * 0.28} ${x + width - 8} ${y + height * 0.32}`}
            stroke={theme.accentColor}
            strokeWidth={0.6}
            fill="none"
            opacity="0.75"
          />
        </>
      )}

      {/* Top Mini Emblem / Decent Water Monogram */}
      <g transform={`translate(${centerX - 8}, ${y + 6}) scale(0.35)`}>
        <path
          d="M23 4C23 4 10 24 10 34C10 42 16 48 23 48C30 48 36 42 36 34C36 24 23 4 23 4Z"
          fill={theme.accentColor}
        />
        <path
          d="M14 35C18 32 28 32 32 35"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      {/* Occasion / Sub-tag Badge */}
      <text
        x={centerX}
        y={y + 24}
        textAnchor="middle"
        fill={theme.accentColor}
        fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
        fontWeight="800"
        fontSize="4.2"
        letterSpacing="0.8"
        opacity="0.95"
      >
        {(labelData.occasion || 'Pure Hydration').toUpperCase()}
      </text>

      {/* Main Customized Text (Name / Brand / Event) */}
      <text
        x={centerX}
        y={y + height * 0.52}
        textAnchor="middle"
        fill={theme.textColor}
        fontFamily={
          isUrdu
            ? "'Noto Nastaliq Urdu', serif"
            : labelData.template === 'elegant'
            ? 'Playfair Display, Georgia, serif'
            : labelData.template === 'classic'
            ? 'Georgia, serif'
            : 'Plus Jakarta Sans, Montserrat, sans-serif'
        }
        fontWeight={labelData.template === 'modern' ? '900' : '700'}
        fontStyle={labelData.template === 'elegant' && !isUrdu ? 'italic' : 'normal'}
        fontSize={dynamicMainSize}
        direction={isUrdu ? 'rtl' : 'ltr'}
        dominantBaseline="middle"
        style={{
          letterSpacing: isUrdu ? '0' : labelData.template === 'modern' ? '0.2px' : '0.4px',
          filter: 'drop-shadow(0px 1px 1.5px rgba(0,0,0,0.35))'
        }}
      >
        {labelData.mainText || 'Your Name Here'}
      </text>

      {/* Dividing Accent Line */}
      <line
        x1={centerX - Math.min(24, width * 0.35)}
        y1={y + height * 0.63}
        x2={centerX + Math.min(24, width * 0.35)}
        y2={y + height * 0.63}
        stroke={theme.accentColor}
        strokeWidth={0.8}
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* Second Line (Date / Monogram / Subtitle) */}
      {labelData.secondLine && (
        <text
          x={centerX}
          y={y + height * 0.74}
          textAnchor="middle"
          fill={theme.accentColor}
          fontFamily={
            isUrdu
              ? "'Noto Nastaliq Urdu', serif"
              : 'Plus Jakarta Sans, system-ui, sans-serif'
          }
          fontWeight="600"
          fontSize={dynamicSecondSize}
          direction={isUrdu ? 'rtl' : 'ltr'}
          dominantBaseline="middle"
          style={{ letterSpacing: isUrdu ? '0' : '0.2px' }}
        >
          {labelData.secondLine}
        </text>
      )}

      {/* Bottom Brand Seal: Decent Water Genuine Mark */}
      <g transform={`translate(${centerX}, ${y + height - 8})`}>
        <text
          x={0}
          y={0}
          textAnchor="middle"
          fill={theme.textColor}
          fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
          fontWeight="800"
          fontSize="3.6"
          letterSpacing="0.4"
          opacity="0.75"
        >
          DECENT WATER • AHDI PLANT
        </text>
      </g>
    </g>
  );
};
