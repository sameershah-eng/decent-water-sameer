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
      renderBottle: () => <Bottle500 className="h-44 sm:h-52" />
    },
    {
      sizeLabel: '1.5 L',
      desc: 'Dining & Table Bottle',
      productId: 'dw-1500ml-single',
      price: 110,
      renderBottle: () => <Bottle1500 className="h-52 sm:h-64" animatedWater={true} />
    },
    {
      sizeLabel: 'Family Pack',
      desc: '12 × 500 mL Bundle',
      productId: 'dw-family-pack',
      price: 540,
      originalPrice: 600,
      renderBottle: () => <FamilyPack className="h-48 sm:h-60" />
    },
    {
      sizeLabel: '12 L',
      desc: 'Bottle with Handle',
      productId: 'dw-12l-handle',
      price: 250,
      originalPrice: 280,
      renderBottle: () => <Bottle12L className="h-52 sm:h-64" />
    },
    {
      sizeLabel: '19 L',
      desc: 'Dispenser Refill',
      productId: 'dw-19l-refill',
      price: 250,
      renderBottle: () => <Bottle19L className="h-56 sm:h-70" />
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
            {lineupItems.map((item) => {
              const matchedProduct = PRODUCTS.find(p => p.id === item.productId);

              return (
                <div
                  key={item.sizeLabel}
                  className="flex flex-col items-center shrink-0 snap-center group select-none min-w-[140px] sm:min-w-[170px]"
                >
                  {/* Bottle with lift on hover */}
                  <div className="h-72 flex items-end justify-center transition-transform duration-300 group-hover:-translate-y-4">
                    {item.renderBottle()}
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
