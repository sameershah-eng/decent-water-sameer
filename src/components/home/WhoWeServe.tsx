import React from 'react';
import { Home, Building2, GraduationCap, Utensils, PartyPopper } from 'lucide-react';
import { SmartImage } from '../common/SmartImage';

export const WhoWeServe: React.FC = () => {
  const sectors = [
    {
      title: 'Residential Homes',
      desc: 'Weekly 19L refills delivered straight to your doorstep. Keep your children and family healthy.',
      icon: Home,
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Corporate Offices',
      desc: 'Scheduled dispenser servicing and multiple refill drops to keep your team energized all workday.',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Schools & Colleges',
      desc: 'Tested microbiological safety. Large volume cartons and dispenser bottles for students & staff.',
      icon: GraduationCap,
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Shops & Restaurants',
      desc: 'Single 500 mL and 1.5 L cartons ready for customer retail sale and dining table service.',
      icon: Utensils,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Events & Weddings',
      desc: 'Chilled delivery coordination for marriage halls, conferences, and outdoor celebrations.',
      icon: PartyPopper,
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F4FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#0B5FD6]">
            Dedicated Hydration
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A2A6B] mt-1 tracking-tight">
            Who We Serve in Gujar Khan & Rawalpindi
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Reliable on-time delivery whether you need one bottle or a full commercial truckload.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group rounded-3xl bg-white border border-sky-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="h-44 sm:h-48 w-full relative overflow-hidden">
                  <SmartImage
                    src={item.image}
                    alt={item.title}
                    fallbackTitle={item.title}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A6B]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white">
                    <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#7FD8FF]" />
                    </div>
                    <span className="font-display font-bold text-sm tracking-wide">
                      {item.title}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-4 pt-3 border-t border-sky-50 flex items-center justify-between text-xs text-[#0B5FD6] font-bold">
                    <span>Priority Delivery Available</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
