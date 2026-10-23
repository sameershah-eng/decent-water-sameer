import React, { useState } from 'react';
import { Bottle330 } from '../bottles/Bottle330';
import { Bottle500 } from '../bottles/Bottle500';
import { Bottle1500 } from '../bottles/Bottle1500';
import {
  GALLERY_ITEMS,
  GalleryItem,
  OccasionCategoryId,
  CustomLabelData,
  BottleSizeId
} from '../../data/customBottles';
import {
  Sparkles,
  Eye,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

interface ReadyMadeGalleryProps {
  onSelectDesign: (design: CustomLabelData, size: BottleSizeId) => void;
}

export const ReadyMadeGallery: React.FC<ReadyMadeGalleryProps> = ({ onSelectDesign }) => {
  const [activeTab, setActiveTab] = useState<OccasionCategoryId>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const tabs: { id: OccasionCategoryId; label: string }[] = [
    { id: 'all', label: 'All Designs' },
    { id: 'weddings', label: 'Weddings & Barat' },
    { id: 'restaurants', label: 'Restaurants & Cafes' },
    { id: 'corporate', label: 'Corporate Summits' },
    { id: 'family', label: 'Family & Birthdays' }
  ];

  const filteredItems =
    activeTab === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter(item => item.category === activeTab);

  const activeItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  const handlePrev = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex(prev => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex(prev => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
  };

  const handleApplyDesign = (item: GalleryItem) => {
    onSelectDesign(item.labelData, item.size);
    setActiveLightboxIndex(null);
    const designerSection = document.getElementById('live-designer');
    if (designerSection) {
      designerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderBottle = (size: BottleSizeId, labelData: CustomLabelData, className = 'w-auto h-full max-h-full') => {
    if (size === '330ml') {
      return <Bottle330 className={className} customLabel={labelData} />;
    }
    if (size === '1500ml') {
      return <Bottle1500 className={className} customLabel={labelData} />;
    }
    return <Bottle500 className={className} customLabel={labelData} />;
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E6F3FF] text-[#0B5FD6] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#3FB4F5]" />
            <span>Inspiration Portfolio</span>
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0A2A6B] tracking-tight">
            Ready-Made Design Gallery
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Browse authentic label concepts crafted for clients across Rawalpindi and Gujar Khan. Tap any design to customize it with your own name.
          </p>
        </div>

        {/* Filter Tabs (Horizontal scroll on mobile) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none snap-x">
          {tabs.map(tab => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`min-h-[44px] px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all snap-start active:scale-95 ${
                  isSelected
                    ? 'bg-[#0A2A6B] text-white shadow-md'
                    : 'bg-sky-50 hover:bg-sky-100 text-[#0A2A6B] border border-sky-100'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* MOBILE: Horizontal Swipe Carousel with snap (1.3 cards visible) */}
        {/* DESKTOP & TABLET: Responsive Grid */}
        <div className="flex sm:hidden overflow-x-auto gap-4 pb-6 snap-x snap-mandatory scrollbar-none -mx-4 px-4">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(idx)}
              className="snap-center shrink-0 w-[78vw] max-w-[280px] bg-gradient-to-b from-[#F4FAFF] to-[#E6F3FF] rounded-3xl p-5 border border-sky-200/80 shadow-sm flex flex-col items-center justify-between cursor-pointer active:scale-98 transition-transform"
            >
              <div className="w-full flex items-center justify-between text-[11px] font-bold text-[#0B5FD6]">
                <span className="bg-white px-2 py-0.5 rounded-full shadow-xs border border-sky-100">
                  {item.tag}
                </span>
                <span className="text-[#0A2A6B] uppercase">{item.size}</span>
              </div>

              <div className="h-56 w-full flex items-center justify-center my-3">
                {renderBottle(item.size, item.labelData, 'w-auto h-full max-h-full drop-shadow-md')}
              </div>

              <div className="w-full text-center">
                <h4 className="font-display font-bold text-sm text-[#0A2A6B] truncate">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 truncate">
                  {item.labelData.mainText}
                </p>
                <button
                  type="button"
                  onClick={e => {
                    e.stopPropagation();
                    handleApplyDesign(item);
                  }}
                  className="w-full mt-3 py-2 px-3 rounded-xl bg-[#0B5FD6] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Use This Design</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* TABLET / DESKTOP GRID */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(idx)}
              className="group bg-gradient-to-b from-[#F4FAFF] to-[#E6F3FF] hover:to-sky-100/90 rounded-3xl p-6 border border-sky-200/70 hover:border-sky-400/50 shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-between cursor-pointer"
            >
              <div className="w-full flex items-center justify-between text-xs font-bold text-[#0B5FD6]">
                <span className="bg-white/90 px-2.5 py-0.5 rounded-full shadow-xs border border-sky-100">
                  {item.tag}
                </span>
                <span className="text-[#0A2A6B] uppercase bg-sky-100/70 px-2 py-0.5 rounded-full">
                  {item.size}
                </span>
              </div>

              <div className="h-64 w-full flex items-center justify-center my-4">
                {renderBottle(
                  item.size,
                  item.labelData,
                  'w-auto h-full max-h-full drop-shadow-lg group-hover:scale-105 transition-transform duration-300'
                )}
              </div>

              <div className="w-full text-center">
                <h4 className="font-display font-bold text-base text-[#0A2A6B] group-hover:text-[#0B5FD6] transition-colors truncate">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5 truncate">
                  {item.labelData.mainText} • {item.labelData.secondLine}
                </p>

                <div className="grid grid-cols-2 gap-2 mt-4">
                  <button
                    type="button"
                    onClick={e => {
                      e.stopPropagation();
                      setActiveLightboxIndex(idx);
                    }}
                    className="py-2.5 px-3 rounded-xl bg-white hover:bg-sky-50 text-[#0A2A6B] font-semibold text-xs border border-sky-200 flex items-center justify-center gap-1 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#0B5FD6]" />
                    <span>Zoom</span>
                  </button>

                  <button
                    type="button"
                    onClick={e => {
                      e.stopPropagation();
                      handleApplyDesign(item);
                    }}
                    className="py-2.5 px-3 rounded-xl bg-[#0B5FD6] hover:bg-[#0A2A6B] text-white font-bold text-xs flex items-center justify-center gap-1 shadow-sm transition-colors"
                  >
                    <span>Use Design</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FULLSCREEN LIGHTBOX (Keyboard & Mobile Friendly) */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 bg-[#0A2A6B]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveLightboxIndex(null)}
          >
            <div
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col items-center max-h-[92vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button (44x44px minimum) */}
              <button
                type="button"
                onClick={() => setActiveLightboxIndex(null)}
                className="absolute top-4 right-4 min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-sky-50 hover:bg-sky-100 text-[#0A2A6B] flex items-center justify-center transition-colors active:scale-90"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev / Next Buttons */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-white/90 shadow-md text-[#0A2A6B] flex items-center justify-center hover:bg-sky-50 active:scale-95"
                aria-label="Previous Design"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-white/90 shadow-md text-[#0A2A6B] flex items-center justify-center hover:bg-sky-50 active:scale-95"
                aria-label="Next Design"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Lightbox Content */}
              <div className="w-full text-center pt-2">
                <span className="text-[11px] font-bold text-[#0B5FD6] uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                  {activeItem.tag} • {activeItem.size.toUpperCase()}
                </span>
                <h3 className="font-display font-black text-xl sm:text-2xl text-[#0A2A6B] mt-2">
                  {activeItem.title}
                </h3>
              </div>

              {/* Large Bottle View */}
              <div className="h-72 sm:h-96 w-full flex items-center justify-center my-6">
                {renderBottle(
                  activeItem.size,
                  activeItem.labelData,
                  'w-auto h-full max-h-full drop-shadow-2xl'
                )}
              </div>

              {/* Label Metadata Specs */}
              <div className="w-full bg-sky-50 rounded-2xl p-4 text-xs text-slate-700 space-y-1 mb-6 border border-sky-100">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Main Title:</span>
                  <span className="font-bold text-[#0A2A6B]">{activeItem.labelData.mainText}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Subtitle / Date:</span>
                  <span className="font-semibold">{activeItem.labelData.secondLine || 'None'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Color Theme:</span>
                  <span className="font-semibold capitalize">{activeItem.labelData.theme}</span>
                </div>
              </div>

              {/* Fixed Bottom Action */}
              <button
                type="button"
                onClick={() => handleApplyDesign(activeItem)}
                className="w-full min-h-[52px] h-13 rounded-2xl bg-[#0B5FD6] hover:bg-[#0A2A6B] text-white font-display font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25 active:scale-98 transition-all"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Use This Design in Live Studio</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
