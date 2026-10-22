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

  return (
    <div className="group relative rounded-3xl bg-white border border-sky-100 hover:border-sky-300 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between overflow-hidden p-5">
      {/* Top badges */}
      <div className="flex items-center justify-between gap-2 mb-3">
        {product.badge ? (
          <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-extrabold bg-gradient-to-r from-[#0B5FD6] to-[#3FB4F5] text-white shadow-sm tracking-wide">
            {product.badge}
          </span>
        ) : (
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            {product.size}
          </span>
        )}

        {hasDiscount && (
          <span className="px-2 py-0.5 rounded-full text-[10.5px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            {discountPercent}% OFF
          </span>
        )}
      </div>

      {/* Bottle Artwork Container */}
      <div className="relative h-56 sm:h-64 flex items-center justify-center p-2 bg-gradient-to-b from-[#F4FAFF] to-white rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-300">
        <ProductBottleView
          bottleType={product.bottleType}
          className="max-h-full max-w-full drop-shadow-lg"
          animatedWater={product.bottleType === 'bottle1500'}
        />
      </div>

      {/* Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-display font-bold text-sm sm:text-base text-[#0A2A6B] leading-snug">
              {product.name}
            </h3>
          </div>

          <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Pricing Row */}
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-display font-black text-xl text-[#0B5FD6]">
              {formatPKR(currentPrice)}
            </span>
            {hasDiscount && (
              <span className="text-xs text-slate-400 line-through font-medium">
                {formatPKR(product.price)}
              </span>
            )}
          </div>

          {/* Per bottle calculation if carton/family pack */}
          {product.perBottlePrice && (
            <div className="text-[11px] font-semibold text-emerald-600 mt-0.5">
              Only {formatPKR(product.perBottlePrice)} per bottle
            </div>
          )}
        </div>

        {/* Action Bottom: Stepper + Add to Cart */}
        <div className="mt-4 pt-3 border-t border-sky-50 flex items-center gap-2">
          {/* Stepper */}
          <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-slate-50/80">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-2 py-2 text-slate-600 hover:bg-slate-200 active:bg-slate-300 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="px-2 font-display font-bold text-xs text-[#0A2A6B]">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-2 py-2 text-slate-600 hover:bg-slate-200 active:bg-slate-300 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Add to Cart button */}
          <button
            onClick={handleAdd}
            className={`flex-1 py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95 ${
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
