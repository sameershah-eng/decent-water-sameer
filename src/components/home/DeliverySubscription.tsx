import React from 'react';
import { Check, MessageSquare, Truck, Calendar, ShieldCheck } from 'lucide-react';
import { Bottle19L } from '../bottles/Bottle19L';
import { BUSINESS_INFO, formatPKR } from '../../data/products';
import { SmartImage } from '../common/SmartImage';
import { useCart } from '../../context/CartContext';
import { PRODUCTS } from '../../data/products';

export const DeliverySubscription: React.FC = () => {
  const { addToCart } = useCart();

  const homePlan = PRODUCTS.find(p => p.id === 'dw-monthly-home-plan');
  const officePlan = PRODUCTS.find(p => p.id === 'dw-monthly-office-plan');

  return (
    <section id="delivery" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner container with deep blue gradient */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0A2A6B] via-[#0B5FD6] to-[#0A2A6B] text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle water caustics / glowing backdrop */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3FB4F5]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Details & Plan features */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-[#7FD8FF]">
                <Truck className="w-3.5 h-3.5" />
                <span>Doorstep Delivery Schedule</span>
              </div>

              <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
                Never Run Out of Pure Water with Our 19L Refill Plans
              </h2>

              <p className="text-xs sm:text-sm text-sky-100/90 leading-relaxed max-w-xl">
                Set up a hassle-free recurring delivery for your family residence or office.
                Our dedicated fleet delivers sanitized, seal-capped 19 Liter bottles on fixed weekly days across Gujar Khan and Rawalpindi.
              </p>

              {/* Plan Perks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-white">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Free doorstep exchange</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-white">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Sanitized & seal-capped jars</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-white">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>No long-term contracts</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-white">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Direct WhatsApp dispatch helpline</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Decent Water! I would like to setup a 19L weekly water delivery subscription.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Subscribe on WhatsApp</span>
                </a>

                {homePlan && (
                  <button
                    onClick={() => addToCart(homePlan, 1)}
                    className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-white/10 hover:bg-white/20 border border-white/25 text-white flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    <span>Add Monthly Home Plan ({formatPKR(homePlan.salePrice || homePlan.price)})</span>
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: 19L Bottle Visual + Delivery Van Thumbnail */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              <div className="relative w-full max-w-xs flex flex-col items-center">
                <div className="h-60 sm:h-68 flex flex-col items-center justify-center select-none relative">
                  <Bottle19L className="h-full w-auto max-h-full drop-shadow-2xl" />
                  <div className="absolute -bottom-1 w-32 h-2.5 bg-black/20 rounded-[100%] blur-[2.5px] pointer-events-none" />
                </div>

                {/* Delivery Fleet Photo Overlay Card */}
                <div className="w-full mt-4 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-3 shadow-lg">
                  <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-white/20">
                    <SmartImage
                      src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                      alt="Delivery Fleet"
                      fallbackTitle="Decent Water Logistics"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-sky-300" />
                      <span>Dedicated Delivery Vans</span>
                    </div>
                    <p className="text-[11px] text-sky-100/80 mt-0.5 truncate">
                      Covering Gujar Khan, Ahdi & Rawalpindi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
