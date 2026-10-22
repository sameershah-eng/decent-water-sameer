import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const CartToast: React.FC = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed top-20 right-5 z-50 animate-in fade-in slide-in-from-top-3 duration-200">
      <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-[#0A2A6B] text-white shadow-xl border border-sky-400/30 backdrop-blur-md">
        <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
        <span className="text-xs font-semibold tracking-wide">{toastMessage}</span>
      </div>
    </div>
  );
};
