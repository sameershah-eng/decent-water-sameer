import React, { useState } from 'react';
import { Plus, Minus, ShoppingBag, Check } from 'lucide-react';
import { Product, formatPKR } from '../../data/products';
import { ProductBottleView } from '../bottles/ProductBottleView';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const currentPrice = product.salePrice ?? product.price;
  const hasDiscount = Boolean(product.salePrice && product.salePrice < product.price);
  const discountPercent = hasDiscount
    ? Math.round(((product.price - (product.salePrice || 0)) / product.price) * 100)
    : 0;

  const handleAdd = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1400);
  };

  // Height proportional to container as required in specs:
  // 500 mL: 62%, 1.5 L: 78%, Family Pack: 70%, 12 L: 80%, 19 L: 82%
  const getBottleScaleClass = () => {
    switch (product.bottleType) {
      case 'bottle500':
        return 'h-[62%]';
      case 'bottle1500':
        return 'h-[78%]';
      case 'familyPack':
        return 'h-[70%] max-w-[85%]';
      case 'bottle12L':
        return 'h-[80%]';
      case 'bottle19L':
        return 'h-[82%]';
      case 'carton':
        return 'h-[72%] max-w-[85%]';
      default:
        return 'h-[78%]';
    }
  };

  return (
    <div className="group relative rounded-3xl bg-white border border-sky-100 hover:border-sky-300 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col h-full overflow-hidden p-2.5 sm:p-3">
      {/* 1. FIXED IMAGE AREA: aspect-ratio 4/3 mobile, 1/1 tablet & desktop */}
      <div className="relative w-full aspect-[4/3] sm:aspect-square overflow-hidden rounded-[20px] bg-gradient-to-b from-[#F4FAFF] to-[#E6F3FF] flex items-center justify-center p-4 select-none">
        {/* Top-Left Main / Discount Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-[12px] sm:text-[13px] font-extrabold bg-gradient-to-r from-[#0B5FD6] to-[#3FB4F5] text-white shadow-sm tracking-wide pointer-events-none">
            {product.badge}
          </span>
        )}

        {/* Top-Right "X% OFF" Pill (hidden on very narrow cards when main badge exists to avoid overlap) */}
        {hasDiscount && (
          <span
            className={`absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full text-[12px] sm:text-[13px] font-bold bg-white/95 text-emerald-700 border border-emerald-200 shadow-sm pointer-events-none ${
              product.badge ? 'hidden min-[360px]:inline-block' : 'inline-block'
            }`}
          >
            {discountPercent}% OFF
          </span>
        )}

        {/* Bottle + Soft Shadow inside image container */}
        <div className="w-full h-full flex flex-col items-center justify-center relative">
          {/* Bottle lifts slightly on hover/tap but stays contained */}
          <div
            className={`relative flex items-center justify-center ${getBottleScaleClass()} transition-transform duration-300 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.03]`}
          >
            <ProductBottleView
              bottleType={product.bottleType}
              animatedWater={product.bottleType === 'bottle1500'}
            />
          </div>

          {/* Soft ellipse shadow under the bottle (blurred, 10% opacity navy) */}
          <div className="absolute bottom-2.5 w-1/3 max-w-[100px] h-2 bg-[#0A2A6B]/10 rounded-[100%] blur-[2.5px] pointer-events-none" />
        </div>
      </div>

      {/* 4. CONTENT BLOCK BELOW THE IMAGE */}
      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Title: 18px mobile, 20px desktop, max 2 lines with line clamp */}
          <h3 className="font-display font-bold text-[18px] sm:text-[20px] text-[#0A2A6B] leading-snug line-clamp-2 mt-2">
            {product.name}
          </h3>

          <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Pricing Row */}
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-display font-black text-xl sm:text-2xl text-[#0B5FD6]">
              {formatPKR(currentPrice)}
            </span>
            {hasDiscount && (
              <span className="text-xs text-slate-400 line-through font-medium">
                {formatPKR(product.price)}
              </span>
            )}
            <span className="text-[11px] font-bold text-slate-400">
              · {product.size}
            </span>
          </div>

          {/* Per bottle calculation if carton or family pack */}
          {product.perBottlePrice && (
            <div className="text-[11px] font-semibold text-emerald-600 mt-0.5">
              Only {formatPKR(product.perBottlePrice)} per bottle
            </div>
          )}
        </div>

        {/* Action Bottom: Stepper + Add to Cart (pushed to bottom with mt-auto) */}
        <div className="mt-auto pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          {/* Quantity Stepper */}
          <div className="flex items-center justify-between sm:justify-center border border-slate-200 rounded-xl overflow-hidden bg-slate-50/90 h-10 px-1">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-9 h-full flex items-center justify-center text-slate-600 hover:bg-slate-200 active:bg-slate-300 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="px-3 font-display font-bold text-xs text-[#0A2A6B]">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-9 h-full flex items-center justify-center text-slate-600 hover:bg-slate-200 active:bg-slate-300 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Add to Cart button (full width on mobile) */}
          <button
            onClick={handleAdd}
            className={`w-full sm:flex-1 h-10 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95 ${
              isAdded
                ? 'bg-emerald-500 text-white'
                : 'bg-gradient-to-r from-[#0B5FD6] via-[#2A8BEA] to-[#3FB4F5] text-white hover:opacity-95'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
