import React from 'react';
import { Link } from 'react-router-dom';
import { Bottle330 } from '../bottles/Bottle330';
import { Bottle500 } from '../bottles/Bottle500';
import { CustomLabelData } from '../../data/customBottles';
import { Sparkles, ArrowRight } from 'lucide-react';

const TEASER_WEDDING: CustomLabelData = {
  occasion: 'Wedding',
  mainText: 'Ayesha weds Hamza',
  secondLine: '14 December 2026',
  theme: 'maroon',
  template: 'elegant'
};

const TEASER_CAFE: CustomLabelData = {
  occasion: 'Cafe',
  mainText: 'Karachi Biryani',
  secondLine: 'Since 1998',
  theme: 'royalBlue',
  template: 'modern'
};

const TEASER_CORPORATE: CustomLabelData = {
  occasion: 'Summit',
  mainText: 'TechVision 2026',
  secondLine: 'Gujar Khan Summit',
  theme: 'navyGold',
  template: 'modern'
};

export const CustomBottlesTeaser: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-[#E6F3FF] to-[#F4FAFF] border-y border-sky-200/60 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-sky-200/80 shadow-md flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Fanned Bottles: on top on mobile, on right/side on desktop */}
          <div className="order-1 lg:order-2 relative w-full sm:w-80 h-44 sm:h-56 flex items-center justify-center shrink-0">
            {/* Left Bottle */}
            <div className="absolute left-1/2 -translate-x-24 sm:-translate-x-28 -translate-y-2 transform -rotate-12 w-16 sm:w-20 h-36 sm:h-44 drop-shadow-lg z-10">
              <Bottle330 className="w-auto h-full" customLabel={TEASER_WEDDING} />
            </div>
            {/* Center Bottle */}
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-4 w-20 sm:w-24 h-40 sm:h-52 drop-shadow-xl z-20">
              <Bottle500 className="w-auto h-full" customLabel={TEASER_CAFE} />
            </div>
            {/* Right Bottle */}
            <div className="absolute left-1/2 translate-x-8 sm:translate-x-10 -translate-y-1 transform rotate-12 w-18 sm:w-22 h-36 sm:h-44 drop-shadow-lg z-10">
              <Bottle330 className="w-auto h-full" customLabel={TEASER_CORPORATE} />
            </div>
          </div>

          {/* Copy & Button: below on mobile, left on desktop */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-3 max-w-xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E6F3FF] text-[#0B5FD6] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#3FB4F5]" />
              <span>Personalized Labeling Service</span>
            </span>

            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0A2A6B] tracking-tight">
              Custom Bottles for Your Special Day
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Print your wedding monogram, restaurant logo, or corporate summit branding on fresh, certified Decent Water bottles with low 100-bottle minimums.
            </p>

            <div className="pt-2">
              <Link
                to="/custom-bottles"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-2xl bg-gradient-to-r from-[#0B5FD6] to-[#3FB4F5] text-white font-display font-bold text-xs sm:text-sm shadow-md hover:opacity-95 active:scale-95 transition-all"
              >
                <span>Explore Custom Bottles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
