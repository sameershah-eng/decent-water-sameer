import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface BrandedLoaderProps {
  onFinish?: () => void;
}

export const BrandedLoader: React.FC<BrandedLoaderProps> = ({ onFinish }) => {
  const [stage, setStage] = useState<'filling' | 'text' | 'lifting' | 'done'>('filling');

  useEffect(() => {
    // Water fill up
    const timer1 = setTimeout(() => {
      setStage('text');
    }, 850);

    // Fade out and lift away
    const timer2 = setTimeout(() => {
      setStage('lifting');
    }, 1450);

    // Fully done
    const timer3 = setTimeout(() => {
      setStage('done');
      if (onFinish) onFinish();
    }, 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onFinish]);

  if (stage === 'done') return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={stage === 'lifting' ? { opacity: 0, y: -40, scale: 1.02 } : { opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#0A2A6B] via-[#0B5FD6] to-[#0A2A6B] text-white overflow-hidden"
        style={{ willChange: 'transform, opacity' }}
      >
          {/* Subtle background glow */}
          <div className="absolute w-96 h-96 rounded-full bg-[#3FB4F5]/20 blur-3xl -z-10 animate-pulse" />

          {/* Water drop container */}
          <div className="relative w-28 h-36 flex items-center justify-center">
            <svg viewBox="0 0 100 130" className="w-full h-full drop-shadow-[0_10px_25px_rgba(63,180,245,0.45)]">
              <defs>
                <clipPath id="dropClip">
                  <path d="M50 4C50 4 10 50 10 82C10 104.1 27.9 122 50 122C72.1 122 90 104.1 90 82C90 50 50 4 50 4Z" />
                </clipPath>
                <linearGradient id="loaderWaterGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7FD8FF" />
                  <stop offset="60%" stopColor="#3FB4F5" />
                  <stop offset="100%" stopColor="#0B5FD6" />
                </linearGradient>
              </defs>

              {/* Empty Drop Outline */}
              <path
                d="M50 4C50 4 10 50 10 82C10 104.1 27.9 122 50 122C72.1 122 90 104.1 90 82C90 50 50 4 50 4Z"
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="2.5"
              />

              {/* Rising Animated Water filling the drop */}
              <g clipPath="url(#dropClip)">
                <motion.rect
                  x="0"
                  width="100"
                  height="130"
                  fill="url(#loaderWaterGrad)"
                  initial={{ y: 130 }}
                  animate={{ y: stage === 'filling' ? 25 : 0 }}
                  transition={{ duration: 0.9, ease: 'easeInOut' }}
                />

                {/* Animated wave crest */}
                <motion.path
                  d="M-50 25 Q-25 15 0 25 T50 25 T100 25 T150 25 V130 H-50 Z"
                  fill="#BAE6FD"
                  opacity="0.6"
                  animate={{ x: [-50, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                />
              </g>

              {/* Specular Droplet Highlight */}
              <path
                d="M36 28C36 28 22 45 22 62C22 68 25 73 30 77C27 72 26 66 26 60C26 48 36 34 36 28Z"
                fill="#FFFFFF"
                opacity="0.85"
              />
            </svg>
          </div>

          {/* Decent Water Wordmark Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={stage === 'text' || stage === 'lifting' ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.45 }}
            className="mt-6 flex flex-col items-center text-center"
          >
            <div className="font-display font-black text-2xl sm:text-3xl tracking-tight flex items-baseline gap-1.5">
              <span>Decent</span>
              <span className="text-[#7FD8FF] font-medium">Water</span>
            </div>
            <p className="font-script text-lg sm:text-xl text-sky-200 mt-1">
              Pure Hydration for Every Need
            </p>
          </motion.div>
        </motion.div>
    </AnimatePresence>
  );
};
