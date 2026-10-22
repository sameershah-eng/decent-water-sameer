import React from 'react';

interface BottleLogoProps {
  volumeText?: string;
  className?: string;
  variant?: 'vertical' | 'horizontal';
  isDarkBg?: boolean;
}

export const BottleLogo: React.FC<BottleLogoProps> = ({
  volumeText = '1.5 Liter',
  className = '',
  variant = 'vertical'
}) => {
  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-2 select-none ${className}`}>
        <svg viewBox="0 0 50 60" className="w-8 h-10 shrink-0 drop-shadow-sm" fill="none">
          <defs>
            <linearGradient id="navLogoGrad" x1="5" y1="5" x2="45" y2="55" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#3FB4F5" />
              <stop offset="60%" stop-color="#0B5FD6" />
              <stop offset="100%" stop-color="#0A2A6B" />
            </linearGradient>
          </defs>
          <path d="M25 4C25 4 8 26 8 38C8 48 15.6 56 25 56C34.4 56 42 48 42 38C42 26 25 4 25 4Z" fill="url(#navLogoGrad)" />
          {/* Wave swooshes under drop */}
          <path d="M12 40C18 36 32 36 38 40" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
          <path d="M15 45C20 42 30 42 35 45" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
          {/* Inner droplet highlight */}
          <path d="M20 18C20 18 14 26 14 33C14 36 15.5 39 18 41C16.5 38 16 35 16 33C16 27 20 20 20 18Z" fill="#FFFFFF" fillOpacity="0.8" />
        </svg>
        <div className="flex flex-col">
          <span className="font-extrabold text-xl tracking-tight leading-none text-[#0A2A6B]">
            Decent<span className="text-[#0B5FD6] font-normal ml-1">Water</span>
          </span>
          <span className="text-[9px] uppercase tracking-wider font-semibold text-[#3FB4F5]">
            Pure Bottled Water
          </span>
        </div>
      </div>
    );
  }

  // Vertical bottle label badge as seen on client flyers
  return (
    <div className={`flex flex-col items-center justify-center text-center p-2 rounded-xl bg-white/95 shadow-md border border-sky-100 backdrop-blur-sm ${className}`}>
      {/* Blue droplet container */}
      <div className="relative w-14 h-18 flex items-center justify-center">
        <svg viewBox="0 0 60 76" className="w-full h-full drop-shadow-sm" fill="none">
          <defs>
            <linearGradient id="labelGrad" x1="10" y1="6" x2="50" y2="70" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3FB4F5" />
              <stop offset="50%" stopColor="#0B5FD6" />
              <stop offset="100%" stopColor="#0A2A6B" />
            </linearGradient>
          </defs>
          <path d="M30 4C30 4 6 32 6 50C6 63.2 16.8 74 30 74C43.2 74 54 63.2 54 50C54 32 30 4 30 4Z" fill="url(#labelGrad)" />
          {/* Swoosh arcs */}
          <path d="M12 52C20 47 40 47 48 52" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          <path d="M16 58C22 54 38 54 44 58" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
        </svg>
        {/* Text inside drop */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white pt-2">
          <span className="font-extrabold text-xs tracking-tight leading-none font-display">Decent</span>
          <span className="text-[8px] font-medium tracking-wide opacity-95">Water</span>
        </div>
      </div>
      <div className="mt-1 text-[8px] font-bold text-[#0A2A6B] tracking-tight leading-tight">
        Bottled Drinking Water
      </div>
      {volumeText && (
        <div className="text-[7.5px] font-medium text-sky-600">
          Net Volume {volumeText}
        </div>
      )}
    </div>
  );
};
