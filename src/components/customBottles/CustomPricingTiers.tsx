import React, { useState } from 'react';
import { PRICING_TIERS, BottleSizeId } from '../../data/customBottles';
import { formatPKR, BUSINESS_INFO } from '../../data/products';
import { Check, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';

export const CustomPricingTiers: React.FC = () => {
  const [selectedSizeTab, setSelectedSizeTab] = useState<BottleSizeId>('500ml');
  const [mobileActiveIndex, setMobileActiveIndex] = useState(1); // 'Event Pack' most popular card default

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E6F3FF] text-[#0B5FD6] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#3FB4F5]" />
            <span>Transparent Wholesale Rates</span>
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0A2A6B] tracking-tight">
            Volume Pricing Tiers
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            All tiers include full-color waterproof label printing, graphic proofing, and sealed Decent RO & UV water bottling at our Ahdi facility.
          </p>

          {/* Size Switcher Pills */}
          <div className="inline-flex items-center gap-1.5 p-1 rounded-2xl bg-sky-50 border border-sky-200 mt-6">
            <button
              type="button"
              onClick={() => setSelectedSizeTab('330ml')}
              className={`min-h-[40px] px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedSizeTab === '330ml'
                  ? 'bg-[#0B5FD6] text-white shadow-sm'
                  : 'text-[#0A2A6B] hover:bg-sky-100'
              }`}
            >
              330 mL Mini
            </button>
            <button
              type="button"
              onClick={() => setSelectedSizeTab('500ml')}
              className={`min-h-[40px] px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedSizeTab === '500ml'
                  ? 'bg-[#0B5FD6] text-white shadow-sm'
                  : 'text-[#0A2A6B] hover:bg-sky-100'
              }`}
            >
              500 mL Standard
            </button>
            <button
              type="button"
              onClick={() => setSelectedSizeTab('1500ml')}
              className={`min-h-[40px] px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedSizeTab === '1500ml'
                  ? 'bg-[#0B5FD6] text-white shadow-sm'
                  : 'text-[#0A2A6B] hover:bg-sky-100'
              }`}
            >
              1.5 L Banquet
            </button>
          </div>
        </div>

        {/* MOBILE: Snap Carousel (Most Popular Centered First) */}
        {/* DESKTOP: 3 Glass Cards */}
        <div className="flex sm:hidden overflow-x-auto gap-4 pb-6 snap-x snap-mandatory scrollbar-none -mx-4 px-4">
          {PRICING_TIERS.map((tier, idx) => {
            const price = tier.prices[selectedSizeTab];
            const isHighlighted = tier.highlighted;

            return (
              <div
                key={tier.id}
                className={`snap-center shrink-0 w-[84vw] max-w-[310px] rounded-3xl p-6 transition-all flex flex-col justify-between ${
                  isHighlighted
                    ? 'bg-gradient-to-b from-[#0A2A6B] via-[#0B5FD6] to-[#0A2A6B] text-white shadow-xl ring-2 ring-sky-300'
                    : 'bg-white text-[#0A2A6B] border border-sky-200/80 shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-extrabold uppercase tracking-wider ${
                        isHighlighted ? 'text-sky-200' : 'text-[#0B5FD6]'
                      }`}
                    >
                      {tier.name}
                    </span>
                    {tier.badge && (
                      <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-[#0A2A6B] shadow-sm">
                        {tier.badge}
                      </span>
                    )}
                  </div>

                  <div className="font-display font-extrabold text-sm opacity-90 mb-4">
                    {tier.rangeLabel}
                  </div>

                  <div className="mb-6 pb-5 border-b border-white/20">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-display font-black tracking-tight">
                        {formatPKR(price)}
                      </span>
                      <span className="text-xs opacity-80">/ bottle</span>
                    </div>
                    <span className="text-[11px] opacity-75 mt-0.5 block">
                      Size: {selectedSizeTab.toUpperCase()}
                    </span>
                  </div>

                  <ul className="space-y-2.5 text-xs mb-6">
                    {tier.features.map(feat => (
                      <li key={feat} className="flex items-start gap-2">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isHighlighted ? 'text-emerald-300' : 'text-emerald-600'
                          }`}
                        />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
                    `Hello Decent Water, I am interested in the ${tier.name} (${tier.rangeLabel}) for custom ${selectedSizeTab} bottles.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`min-h-[48px] py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                    isHighlighted
                      ? 'bg-white text-[#0A2A6B] hover:bg-sky-50 shadow-md'
                      : 'bg-[#0B5FD6] text-white hover:bg-[#0A2A6B]'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Choose {tier.name}</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* DESKTOP 3-COLUMN GRID */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_TIERS.map(tier => {
            const price = tier.prices[selectedSizeTab];
            const isHighlighted = tier.highlighted;

            return (
              <div
                key={tier.id}
                className={`rounded-3xl p-7 lg:p-8 transition-all flex flex-col justify-between relative ${
                  isHighlighted
                    ? 'bg-gradient-to-b from-[#0A2A6B] via-[#0B5FD6] to-[#0A2A6B] text-white shadow-2xl scale-105 z-10 ring-2 ring-sky-300'
                    : 'bg-white text-[#0A2A6B] border border-sky-200/80 shadow-md hover:shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-extrabold uppercase tracking-wider ${
                        isHighlighted ? 'text-sky-200' : 'text-[#0B5FD6]'
                      }`}
                    >
                      {tier.name}
                    </span>
                    {tier.badge && (
                      <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-[#0A2A6B] shadow-sm">
                        {tier.badge}
                      </span>
                    )}
                  </div>

                  <div className="font-display font-extrabold text-sm opacity-90 mb-4">
                    {tier.rangeLabel}
                  </div>

                  <div className="mb-6 pb-6 border-b border-current/15">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl lg:text-4xl font-display font-black tracking-tight">
                        {formatPKR(price)}
                      </span>
                      <span className="text-xs opacity-80">/ bottle</span>
                    </div>
                    <span className="text-[11px] opacity-75 mt-1 block">
                      Applied for {selectedSizeTab.toUpperCase()} bottles
                    </span>
                  </div>

                  <ul className="space-y-3 text-xs mb-8">
                    {tier.features.map(feat => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isHighlighted ? 'text-emerald-300' : 'text-emerald-600'
                          }`}
                        />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
                    `Hello Decent Water, I would like to book a custom batch under the ${tier.name} tier (${tier.rangeLabel}) for ${selectedSizeTab} bottles.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`min-h-[48px] py-3.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                    isHighlighted
                      ? 'bg-white text-[#0A2A6B] hover:bg-sky-50 shadow-md'
                      : 'bg-[#0B5FD6] text-white hover:bg-[#0A2A6B]'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Get Quote on WhatsApp</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Small Note */}
        <p className="text-center text-xs text-slate-500 mt-8">
          * Final price depends on design and quantity. Get an exact quote on WhatsApp. Minimum order {PRICING_TIERS[0].minBottles} bottles.
        </p>
      </div>
    </section>
  );
};
