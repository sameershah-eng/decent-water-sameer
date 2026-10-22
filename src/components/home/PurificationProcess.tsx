import React from 'react';
import { Mountain, Filter, Flame, Waves, SunMedium, ShieldCheck } from 'lucide-react';

export const PurificationProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Protected Aquifer Source',
      desc: 'Extracted from deep underground natural aquifers in Ahdi, shielded from surface contamination.',
      icon: Mountain
    },
    {
      num: '02',
      title: 'Multi-Stage Sediment',
      desc: 'High-density micro filters trap sand, silt, and microscopic suspended particles down to 1 micron.',
      icon: Filter
    },
    {
      num: '03',
      title: 'Activated Carbon Filtration',
      desc: 'Premium organic carbon beds absorb odors, trace chemicals, chlorine, and optimize natural freshness.',
      icon: Flame
    },
    {
      num: '04',
      title: 'Reverse Osmosis (RO)',
      desc: 'High-pressure semi-permeable membranes balance essential minerals and eliminate dissolved salts.',
      icon: Waves
    },
    {
      num: '05',
      title: 'Ultraviolet & Ozone',
      desc: 'Dual disinfection ensures 99.99% elimination of microbial pathogens while keeping water pristine.',
      icon: SunMedium
    },
    {
      num: '06',
      title: 'Automated Sealed Bottling',
      desc: 'Pressurized sanitization, cleanroom filling, and automated tamper-evident royal blue capping.',
      icon: ShieldCheck
    }
  ];

  return (
    <section id="process" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#0B5FD6]">
            Quality Standards
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A2A6B] mt-1 tracking-tight">
            Our 6-Stage Purification Process
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Every drop is purified and tested at our Ahdi bottling plant to ensure pure crystal-clear hydration.
          </p>
        </div>

        {/* Steps Grid with connecting water line */}
        <div className="relative">
          {/* Subtle animated water line across background on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-[#3FB4F5]/20 via-[#0B5FD6]/30 to-[#3FB4F5]/20 -translate-y-1/2 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="group relative p-6 rounded-3xl bg-[#F4FAFF] hover:bg-white border border-sky-100 hover:border-sky-300 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0B5FD6] to-[#3FB4F5] text-white flex items-center justify-center shadow-md shadow-sky-600/20 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 stroke-[2]" />
                      </div>
                      <span className="font-display font-black text-2xl text-sky-200 group-hover:text-[#0B5FD6]/30 transition-colors">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-base text-[#0A2A6B]">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-sky-100/60 flex items-center gap-1.5 text-[11px] font-semibold text-[#0B5FD6]">
                    <span>Step verified at Ahdi Plant</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
