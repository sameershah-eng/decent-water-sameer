import React from 'react';
import { Droplet, Leaf, ShieldCheck, Diamond } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustFeatures = [
    {
      icon: Droplet,
      title: 'Pure Water',
      subtitle: 'Crystal Clear Purity',
      desc: 'Deep aquifer source thoroughly tested for total dissolved solids & balanced pH.'
    },
    {
      icon: Leaf,
      title: 'Fresh Taste',
      subtitle: 'Naturally Refreshing',
      desc: 'Crisp, natural spring taste that quenches thirst without chemical aftertaste.'
    },
    {
      icon: ShieldCheck,
      title: 'Safe & Healthy',
      subtitle: 'Safe for Your Family',
      desc: '7-stage multi-barrier purification certified safe for infants, children & elders.'
    },
    {
      icon: Diamond,
      title: 'Premium Quality',
      subtitle: 'Consistent Great Taste',
      desc: 'Bottled under stringent hygienic conditions at our specialized Ahdi plant.'
    }
  ];

  return (
    <section id="why-us" className="py-10 bg-white border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group p-5 rounded-2xl bg-[#F4FAFF] hover:bg-white border border-sky-100/80 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300 flex flex-col items-start"
              >
                {/* Circular badge matching flyer style */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0B5FD6] to-[#3FB4F5] flex items-center justify-center text-white shadow-md shadow-sky-600/20 group-hover:scale-110 transition-transform mb-3.5">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>

                <h3 className="font-display font-bold text-base text-[#0A2A6B]">
                  {item.title}
                </h3>
                <span className="text-xs font-semibold text-[#0B5FD6] mt-0.5">
                  {item.subtitle}
                </span>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
