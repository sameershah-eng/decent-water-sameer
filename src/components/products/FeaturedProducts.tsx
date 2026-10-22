import React, { useState } from 'react';
import { PRODUCTS, ProductCategory } from '../../data/products';
import { ProductCard } from './ProductCard';

interface FeaturedProductsProps {
  showTitle?: boolean;
  defaultFilter?: ProductCategory;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  showTitle = true,
  defaultFilter = 'all'
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(defaultFilter);

  const categories: { key: ProductCategory; label: string }[] = [
    { key: 'all', label: 'All Products' },
    { key: 'bottles', label: 'Single Bottles' },
    { key: 'cartons', label: 'Cartons' },
    { key: 'family', label: 'Family Packs' },
    { key: 'large', label: '12L & 19L Dispensers' },
    { key: 'plans', label: 'Monthly Plans' }
  ];

  const filteredProducts = PRODUCTS.filter(p => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="products-section" className="py-16 sm:py-20 bg-[#F4FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#0B5FD6]">
              Order Online
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A2A6B] mt-1 tracking-tight">
              Our Pure Water Lineup
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              From everyday personal bottles to weekly family packs and corporate dispenser subscriptions.
            </p>
          </div>
        )}

        {/* Filter Tabs (Functional segmented controls with clean active styles) */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <div className="p-1.5 bg-white rounded-2xl border border-sky-100 shadow-sm flex items-center gap-1">
            {categories.map(cat => {
              const active = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-gradient-to-r from-[#0B5FD6] to-[#3FB4F5] text-white shadow-md'
                      : 'text-slate-600 hover:text-[#0A2A6B] hover:bg-sky-50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid:
            < 480px: 1 card per row, max-w-[420px], centered
            480px - 767px: 2 cards per row, gap 14px (gap-3.5)
            768px - 1023px: 2 or 3 cards per row, gap 20px (gap-5)
            1024px+: 3 or 4 cards per row, gap 24px (gap-6)
        */}
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 md:gap-5 lg:gap-6 max-w-[420px] min-[480px]:max-w-none mx-auto">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
