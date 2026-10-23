import React from 'react';
import { USE_CASE_CARDS, UseCaseCard } from '../../data/customBottles';
import { SmartImage } from '../common/SmartImage';
import { Bottle330 } from '../bottles/Bottle330';
import { Bottle500 } from '../bottles/Bottle500';
import {
  HeartHandshake,
  Utensils,
  Building2,
  Cake,
  Trophy,
  Sparkles
} from 'lucide-react';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  HeartHandshake,
  Utensils,
  Building2,
  Cake,
  Trophy,
  Sparkles
};

interface CustomWhoItsForProps {
  onSelectUseCase?: (card: UseCaseCard) => void;
}

export const CustomWhoItsFor: React.FC<CustomWhoItsForProps> = ({ onSelectUseCase }) => {
  return (
    <section className="py-14 sm:py-20 bg-[#F4FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E6F3FF] text-[#0B5FD6] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#3FB4F5]" />
            <span>Versatile Packaging</span>
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0A2A6B] tracking-tight">
            Tailored For Every Memorable Gathering
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            From intimate Nikah ceremonies to bustling city cafes and regional sports meets, Decent Water transforms basic hydration into a memorable branded hospitality experience.
          </p>
        </div>

        {/* 6 Use Case Cards: 1 col under 400px, 2 cols 400-767px, 3 cols desktop */}
        <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {USE_CASE_CARDS.map(card => {
            const IconComp = ICON_MAP[card.iconName] || Sparkles;
            const customLabel = {
              occasion: card.title.split('&')[0].trim(),
              mainText: card.sampleMain,
              secondLine: card.sampleSecond,
              theme: card.labelTheme,
              template: card.labelTemplate
            };

            return (
              <div
                key={card.id}
                className="bg-white rounded-3xl overflow-hidden border border-sky-100 shadow-sm hover:shadow-md transition-all flex flex-col group"
              >
                {/* Photo Header with corner SVG Bottle preview */}
                <div className="relative h-40 sm:h-48 w-full overflow-hidden bg-slate-900">
                  <SmartImage
                    src={card.imageUrl}
                    alt={card.title}
                    fallbackTitle={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A6B]/85 via-[#0A2A6B]/30 to-transparent" />

                  {/* Corner SVG Bottle Preview (scaled down so it never covers title) */}
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 h-28 sm:h-36 w-16 sm:w-20 pointer-events-none drop-shadow-xl z-10 flex items-center justify-center">
                    {card.bottleSize === '330ml' ? (
                      <Bottle330
                        className="w-auto h-full max-h-full drop-shadow-md"
                        customLabel={customLabel}
                      />
                    ) : (
                      <Bottle500
                        className="w-auto h-full max-h-full drop-shadow-md"
                        customLabel={customLabel}
                      />
                    )}
                  </div>

                  {/* Icon & Category Pill */}
                  <div className="absolute bottom-3 left-4 right-20 text-white">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] sm:text-[11px] font-bold text-sky-200 border border-white/20 mb-1">
                      <IconComp className="w-3 h-3 text-[#7FD8FF]" />
                      <span>{card.subtitle}</span>
                    </div>
                    <h3 className="font-display font-black text-base sm:text-lg text-white leading-tight">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content Block */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {card.useCase}
                  </p>

                  <div className="mt-4 pt-3 border-t border-sky-50 flex items-center justify-between text-[11px]">
                    <span className="font-semibold text-slate-500">
                      Sample: <strong className="text-[#0A2A6B]">{card.sampleMain}</strong>
                    </span>
                    <span className="text-[#0B5FD6] font-bold bg-sky-50 px-2 py-0.5 rounded-full">
                      {card.bottleSize.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
