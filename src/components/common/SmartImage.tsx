import React, { useState } from 'react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-[#E0F2FE] via-[#BAE6FD]/40 to-[#F0F9FF] ${className}`}>
      {/* Loading shimmer placeholder */}
      {!loaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sky-100/80 via-blue-50 to-sky-200/50 animate-pulse">
          <svg className="w-8 h-8 text-sky-400/60 animate-bounce" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
          </svg>
        </div>
      )}

      {/* Actual image */}
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          onLoad={() => setLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ease-out ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          {...props}
        />
      ) : (
        /* Safe Branded Fallback Container */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#0A2A6B] via-[#0B5FD6] to-[#3FB4F5] text-white">
          <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-3 shadow-inner border border-white/20">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-sky-200" fill="currentColor">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
          </div>
          <span className="font-extrabold text-sm tracking-tight text-white font-display">
            Decent Water
          </span>
          <span className="text-xs text-sky-100/90 mt-1 max-w-[200px] line-clamp-2">
            {fallbackTitle || alt || 'Pure Hydration for Every Need'}
          </span>
        </div>
      )}
    </div>
  );
};
