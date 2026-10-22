import React from 'react';
import { MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/products';
import { useCart } from '../../context/CartContext';

export const FloatingWhatsApp: React.FC = () => {
  const { isDrawerOpen } = useCart();
  if (isDrawerOpen) return null;

  const defaultMsg = encodeURIComponent(
    'Hello Decent Water! I would like to inquire about drinking water delivery to my home/office.'
  );

  return (
    <aside aria-label="Quick contact" className="fixed bottom-20 md:bottom-6 right-5 z-30 select-none">
      <a
        href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${defaultMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 active:scale-95 transition-all duration-200"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageSquare className="w-5 h-5 fill-white stroke-none" />
        <span className="text-xs font-bold tracking-tight hidden sm:inline-block">
          Order on WhatsApp
        </span>
      </a>
    </aside>
  );
};
