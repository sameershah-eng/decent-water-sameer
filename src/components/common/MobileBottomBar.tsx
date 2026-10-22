import React from 'react';
import { Phone, MessageSquare, ShoppingBag } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/products';
import { useCart } from '../../context/CartContext';

export const MobileBottomBar: React.FC = () => {
  const { isDrawerOpen, openDrawer, itemCount } = useCart();

  if (isDrawerOpen) return null;

  return (
    <nav aria-label="Mobile quick actions" className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-sky-100 shadow-[0_-4px_16px_rgba(10,42,107,0.06)] px-3 py-2 flex items-center justify-between gap-2 safe-bottom">
      {/* Call Button */}
      <a
        href={`tel:${BUSINESS_INFO.phone1Intl}`}
        className="flex-1 flex items-center justify-center gap-1.5 h-11 px-3 rounded-xl bg-sky-50 text-[#0A2A6B] font-bold text-xs border border-sky-100 active:bg-sky-100 transition-colors"
      >
        <Phone className="w-4 h-4 text-[#0B5FD6]" />
        <span>Call</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Decent Water! I want to order drinking water.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 h-11 px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs active:bg-emerald-700 shadow-sm transition-colors"
      >
        <MessageSquare className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>

      {/* Cart Quick Button */}
      <button
        onClick={openDrawer}
        aria-label="View Cart"
        className="relative flex items-center justify-center h-11 px-4 rounded-xl bg-gradient-to-r from-[#0B5FD6] to-[#3FB4F5] text-white active:scale-95 transition-all shadow-sm"
      >
        <ShoppingBag className="w-4 h-4" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 text-[10px] font-bold text-white bg-red-500 rounded-full flex items-center justify-center border-2 border-white">
            {itemCount}
          </span>
        )}
      </button>
    </nav>
  );
};
