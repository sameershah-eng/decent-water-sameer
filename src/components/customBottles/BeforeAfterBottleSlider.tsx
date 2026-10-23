import React, { useState, useRef, useCallback } from 'react';
import { Bottle500 } from '../bottles/Bottle500';
import { ArrowRight, MoveHorizontal, Sparkles, ShieldCheck } from 'lucide-react';
import { CustomLabelData } from '../../data/customBottles';

const WEDDING_SAMPLE_LABEL: CustomLabelData = {
  occasion: 'Wedding',
  mainText: 'Ayesha weds Hamza',
  secondLine: 'Barat • 14 Dec 2026',
  theme: 'navyGold',
  template: 'elegant'
};

export const BeforeAfterBottleSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length > 0) {
        updatePosition(e.touches[0].clientX);
      }
    },
    [updatePosition]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging) {
        updatePosition(e.clientX);
      }
    },
    [isDragging, updatePosition]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition(prev => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition(prev => Math.min(100, prev + 5));
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-y border-sky-100/70 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E6F3FF] text-[#0B5FD6] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#3FB4F5]" />
            <span>Before & After Transformation</span>
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0A2A6B] tracking-tight">
            How It Looks On Your Tables
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            We preserve our certified multi-stage RO & UV purified water and sealed food-grade bottle, but replace the standard wrapper with your customized event or brand label.
          </p>
        </div>

        {/* DESKTOP / TABLET VIEW (Side-by-side with animated arrow) */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 items-center max-w-4xl mx-auto">
          {/* Plain Bottle Card */}
          <div className="md:col-span-5 bg-gradient-to-b from-[#F4FAFF] to-[#E6F3FF] rounded-3xl p-6 sm:p-8 border border-sky-200/60 shadow-sm flex flex-col items-center text-center relative group">
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 text-[#0A2A6B] shadow-sm border border-sky-100 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>1. Standard Decent Bottle</span>
            </div>
            <div className="h-72 w-full flex items-center justify-center pt-8 pb-2">
              <Bottle500 className="w-auto h-full max-h-full transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="mt-3">
              <h3 className="font-display font-bold text-base text-[#0A2A6B]">
                Original Decent Water
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Multi-stage RO & UV purified, Ahdi plant
              </p>
            </div>
          </div>

          {/* Middle Transform Indicator */}
          <div className="md:col-span-2 flex flex-col items-center justify-center text-center py-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#0A2A6B] via-[#0B5FD6] to-[#3FB4F5] text-white flex items-center justify-center shadow-lg shadow-sky-500/25 mb-2">
              <ArrowRight className="w-6 h-6 animate-pulse" />
            </div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0B5FD6]">
              Your Label
            </span>
            <span className="text-[10px] text-slate-400">Printed & Sealed</span>
          </div>

          {/* Custom Bottle Card */}
          <div className="md:col-span-5 bg-gradient-to-b from-[#0A2A6B]/5 via-[#E6F3FF] to-[#F4FAFF] rounded-3xl p-6 sm:p-8 border-2 border-[#0B5FD6]/30 shadow-md flex flex-col items-center text-center relative group">
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-bold bg-gradient-to-r from-[#0B5FD6] to-[#3FB4F5] text-white shadow-sm flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>2. Personalized Bottle</span>
            </div>
            <div className="h-72 w-full flex items-center justify-center pt-8 pb-2">
              <Bottle500
                className="w-auto h-full max-h-full transition-transform duration-300 group-hover:scale-105 drop-shadow-xl"
                customLabel={WEDDING_SAMPLE_LABEL}
              />
            </div>
            <div className="mt-3">
              <h3 className="font-display font-bold text-base text-[#0A2A6B]">
                Your Custom Name & Logo
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Waterproof label matching your event theme
              </p>
            </div>
          </div>
        </div>

        {/* MOBILE VIEW (Interactive Touch Draggable Slider) */}
        <div className="md:hidden max-w-sm mx-auto">
          <div className="text-center mb-3">
            <span className="text-[11px] font-bold text-[#0B5FD6] uppercase tracking-wide bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              Drag slider left & right to reveal
            </span>
          </div>

          <div
            ref={containerRef}
            className="relative h-[360px] bg-gradient-to-b from-[#F4FAFF] to-[#E6F3FF] rounded-3xl border border-sky-200 overflow-hidden shadow-inner select-none touch-none cursor-ew-resize"
            onTouchMove={handleTouchMove}
            onMouseMove={handleMouseMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            tabIndex={0}
            role="slider"
            aria-valuenow={Math.round(sliderPosition)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Comparison slider between standard Decent Water bottle and custom event bottle"
            onKeyDown={handleKeyDown}
          >
            {/* Base Layer: Standard Plain Bottle */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
              <div className="h-64 w-full flex items-center justify-center">
                <Bottle500 className="w-auto h-full max-h-full" />
              </div>
              <div className="absolute top-4 left-4 px-2.5 py-1 rounded-lg bg-white/90 text-[#0A2A6B] text-[10px] font-bold shadow-sm border border-sky-100">
                Standard Decent Bottle
              </div>
            </div>

            {/* Top Layer: Custom Label Bottle (Clipped horizontally) */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#E6F3FF] to-[#F4FAFF] pointer-events-none"
              style={{
                clipPath: `inset(0 0 0 ${sliderPosition}%)`
              }}
            >
              <div className="h-64 w-full flex items-center justify-center">
                <Bottle500
                  className="w-auto h-full max-h-full drop-shadow-md"
                  customLabel={WEDDING_SAMPLE_LABEL}
                />
              </div>
              <div className="absolute top-4 right-4 px-2.5 py-1 rounded-lg bg-[#0B5FD6] text-white text-[10px] font-bold shadow-sm">
                Your Custom Label
              </div>
            </div>

            {/* Draggable Divider Line & 48px Touch Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-xl pointer-events-none"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-tr from-[#0A2A6B] to-[#3FB4F5] text-white shadow-xl border-2 border-white flex items-center justify-center active:scale-110 transition-transform">
                <MoveHorizontal className="w-5 h-5 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Central Caption */}
        <p className="text-center font-display font-bold text-sm sm:text-base text-[#0A2A6B] mt-6">
          Same pure water. Your personal label.
        </p>
      </div>
    </section>
  );
};
