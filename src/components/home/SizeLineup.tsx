import React from 'react';
import { Bottle500 } from '../bottles/Bottle500';
import { Bottle1500 } from '../bottles/Bottle1500';
import { FamilyPack } from '../bottles/FamilyPack';
import { Bottle12L } from '../bottles/Bottle12L';
import { Bottle19L } from '../bottles/Bottle19L';
import { useCart } from '../../context/CartContext';
import { PRODUCTS, formatPKR } from '../../data/products';
import { ShoppingBag } from 'lucide-react';

export const SizeLineup: React.FC = () => {
  const { addToCart } = useCart();

  const lineupItems = [
    {
      sizeLabel: '500 mL',
      desc: 'Single Pocket Bottle',
      productId: 'dw-500ml-single',
      price: 50,
      bottleHeightClass: 'h-[62%]',
      renderBottle: () => <Bottle500 className="w-auto h-full max-h-full" />
    },
    {
      sizeLabel: '1.5 L',
      desc: 'Dining & Table Bottle',
      productId: 'dw-1500ml-single',
      price: 110,
      bottleHeightClass: 'h-[78%]',
      renderBottle: () => <Bottle1500 className="w-auto h-full max-h-full" animatedWater={true} />
    },
    {
      sizeLabel: 'Family Pack',
      desc: '12 × 500 mL Bundle',
      productId: 'dw-family-pack',
      price: 540,
      originalPrice: 600,
      bottleHeightClass: 'h-[70%] max-w-[85%]',
      renderBottle: () => <FamilyPack className="w-auto h-full max-h-full" />
    },
    {
      sizeLabel: '12 L',
      desc: 'Bottle with Handle',
      productId: 'dw-12l-handle',
      price: 250,
      originalPrice: 280,
      bottleHeightClass: 'h-[80%]',
      renderBottle: () => <Bottle12L className="w-auto h-full max-h-full" />
    },
    {
      sizeLabel: '19 L',
      desc: 'Dispenser Refill',
      productId: 'dw-19l-refill',
      price: 250,
      bottleHeightClass: 'h-[88%]',
      renderBottle: () => <Bottle19L className="w-auto h-full max-h-full" />
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#F4FAFF] via-white to-[#F4FAFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="font-script text-2xl sm:text-3xl text-[#0B5FD6] font-bold">
            Pure Hydration for Every Need
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A2A6B] mt-1 tracking-tight">
            All Sizes Available
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
            500 mL · 1.5 L · Family Pack · 12 L · 19 L
          </p>
        </div>

        {/* River Pebble Platform / Lineup Display */}
        <div className="relative">
          {/* Subtle River Bed / Wave line */}
          <div className="absolute bottom-6 inset-x-0 h-4 bg-gradient-to-r from-transparent via-[#3FB4F5]/20 to-transparent blur-sm -z-10" />

          {/* Horizontal scroll container with snap on mobile */}
          <div className="flex items-end justify-start sm:justify-center gap-4 sm:gap-6 md:gap-8 overflow-x-auto pb-6 px-4 snap-x snap-mandatory scrollbar-none">
            {lineupItems.map(item => {
              const matchedProduct = PRODUCTS.find(p => p.id === item.productId);

              return (
                <div
                  key={item.sizeLabel}
                  className="flex flex-col items-center shrink-0 snap-center group select-none min-w-[130px] sm:min-w-[160px]"
                >
                  {/* Fixed-height slot (180px mobile, 260px desktop), aligned to bottom so all sit on one baseline */}
                  <div className="h-[180px] sm:h-[260px] w-full flex flex-col items-center justify-end relative">
                    {/* Bottle with lift on hover */}
                    <div
                      className={`relative flex items-end justify-center ${item.bottleHeightClass} transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-[1.03]`}
                    >
                      {item.renderBottle()}
                    </div>

                    {/* Soft ellipse shadow under each bottle */}
                    <div className="w-2/3 max-w-[90px] h-2 bg-[#0A2A6B]/10 rounded-[100%] blur-[2px] mt-1 pointer-events-none" />
                  </div>

                  {/* Size Pill Tag */}
                  <div className="mt-4 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#0A2A6B] to-[#0B5FD6] text-white font-display font-extrabold text-xs shadow-md tracking-wide group-hover:from-[#0B5FD6] group-hover:to-[#3FB4F5] transition-all">
                    {item.sizeLabel}
                  </div>

                  <span className="text-[11px] text-slate-500 mt-1 font-medium">
                    {item.desc}
                  </span>

                  <div className="flex items-center gap-1.5 mt-1 font-bold text-xs text-[#0A2A6B]">
                    <span>{formatPKR(item.price)}</span>
                    {item.originalPrice && (
                      <span className="text-[10px] text-slate-400 line-through">
                        {formatPKR(item.originalPrice)}
                      </span>
                    )}
                  </div>

                  {matchedProduct && (
                    <button
                      onClick={() => addToCart(matchedProduct, 1)}
                      className="mt-2.5 px-3 py-1.5 rounded-lg text-[11px] font-bold text-[#0B5FD6] bg-sky-50 hover:bg-[#0B5FD6] hover:text-white transition-all flex items-center gap-1 active:scale-95 shadow-sm"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>Add</span>
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
