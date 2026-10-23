import React from 'react';
import { Sparkles, Droplets, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

const WHY_US_ITEMS = [
  {
    icon: Sparkles,
    title: 'Free Design Mockup',
    description: 'Our digital studio crafts an exact 3D bottle preview for your approval before printing a single sheet.'
  },
  {
    icon: Droplets,
    title: 'Waterproof Premium Labels',
    description: 'High-definition lamination guarantees labels will not peel, rip, or smudge inside ice chillers or buckets.'
  },
  {
    icon: ShieldCheck,
    title: 'Same Pure Decent Water',
    description: 'Certified multi-stage Reverse Osmosis & UV sterilization directly bottled fresh at our Ahdi facility.'
  },
  {
    icon: Clock,
    title: 'On-Time Venue Delivery',
    description: 'Direct delivery vans to your home, marquee, cafe, or school across Rawalpindi, Gujar Khan, and GT Road.'
  }
];

export const CustomWhyUs: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#F4FAFF] border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#0B5FD6] uppercase tracking-wider">
            Guaranteed Quality
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0A2A6B] tracking-tight mt-1">
            Why Choose Decent Water for Custom Bottles
          </h2>
        </div>

        {/* 2x2 grid on mobile, 4 in a row on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {WHY_US_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-sky-100 shadow-sm flex flex-col items-start"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-sky-50 text-[#0B5FD6] flex items-center justify-center mb-3 sm:mb-4">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-display font-bold text-xs sm:text-base text-[#0A2A6B] leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-1.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
