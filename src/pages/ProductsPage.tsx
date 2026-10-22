import React from 'react';
import { FeaturedProducts } from '../components/products/FeaturedProducts';
import { MessageSquare, Phone, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export const ProductsPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-16 bg-[#F4FAFF]">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="rounded-3xl bg-gradient-to-r from-[#0A2A6B] via-[#0B5FD6] to-[#0A2A6B] text-white p-8 sm:p-12 text-center shadow-lg relative overflow-hidden">
          <div className="font-script text-2xl sm:text-3xl text-sky-200 font-bold">
            Pure Hydration for Every Need
          </div>
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight mt-1">
            Complete Product Catalog
          </h1>
          <p className="text-xs sm:text-sm text-sky-100/90 max-w-xl mx-auto mt-2 leading-relaxed">
            Order single bottles, bulk protective cartons, 12L handle bottles, and 19L home & office refills. All prices in PKR with doorstep delivery.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <FeaturedProducts showTitle={false} />

      {/* Bulk & Wedding Catering Quote Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-3xl bg-white border border-sky-100 p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-[#0B5FD6] text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Event & Wedding Supply</span>
            </div>
            <h3 className="font-display font-extrabold text-2xl text-[#0A2A6B]">
              Planning a Wedding, Conference or Bulk Event?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              We provide discounted bulk carton pricing for 500 mL and 1.5 L bottles, with customized on-time delivery across marriage halls in Gujar Khan and Rawalpindi.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Decent Water! I want to request a wholesale bulk quote for an upcoming event.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs bg-emerald-500 hover:bg-emerald-600 text-white shadow-md flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get Wholesale Quote</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phone1Intl}`}
              className="w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-xs bg-sky-50 text-[#0A2A6B] hover:bg-sky-100 border border-sky-200 flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4 text-[#0B5FD6]" />
              <span>Call Owner</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
