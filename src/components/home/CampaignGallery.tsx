import React, { useState } from 'react';
import { Eye, X, ZoomIn } from 'lucide-react';

export const CampaignGallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const campaigns = [
    {
      title: 'Flagship 1.5L Launch Campaign',
      tagline: 'Refresh Your Day Naturally',
      image: '/images/flyer-1.jpg',
      desc: 'Our official launch poster introducing pristine 1.5L bottled drinking water in Gujar Khan & Rawalpindi.'
    },
    {
      title: 'Bottles & Multi-Pack Range',
      tagline: 'Pure Hydration for a Healthier Tomorrow',
      image: '/images/flyer-2.jpg',
      desc: 'Featuring our single bottles and convenient 12-bottle shrink-wrapped Family Packs.'
    },
    {
      title: 'Complete 5-Size Lineup',
      tagline: 'Pure Hydration for Every Need',
      image: '/images/flyer-3.jpg',
      desc: 'Showcasing the entire family: 500 mL, 1.5 L, Family Pack, 12 L with handle, and 19 L dispenser jar.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#0B5FD6]">
            Visual Identity
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A2A6B] mt-1 tracking-tight">
            Our Brand Campaigns
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Click any poster to inspect the full campaign artwork and official brand print specifications.
          </p>
        </div>

        {/* 3 Campaign Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {campaigns.map((item, index) => (
            <div
              key={item.title}
              onClick={() => setActiveImage(item.image)}
              className="group cursor-pointer rounded-3xl bg-[#F4FAFF] border border-sky-100 hover:border-sky-300 p-4 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-100 mb-4 shadow-inner">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#0A2A6B]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <div className="px-4 py-2 rounded-xl bg-white text-[#0A2A6B] font-bold text-xs flex items-center gap-2 shadow-lg">
                    <ZoomIn className="w-4 h-4 text-[#0B5FD6]" />
                    <span>View Poster</span>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-[11px] font-bold text-[#0B5FD6] uppercase tracking-wider">
                  Poster 0{index + 1}
                </span>
                <h3 className="font-display font-bold text-base text-[#0A2A6B] mt-1">
                  {item.title}
                </h3>
                <p className="font-script text-base text-[#0B5FD6] mt-0.5">
                  "{item.tagline}"
                </p>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-2xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={activeImage}
              alt="Decent Water Campaign Poster"
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
