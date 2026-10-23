import React, { useState } from 'react';
import { CUSTOM_TESTIMONIALS, CUSTOM_FAQS } from '../../data/customBottles';
import { Star, ChevronDown, ChevronUp, Quote, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/products';

export const CustomTestimonialsFaq: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* PART 1: TESTIMONIALS */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#0B5FD6] uppercase tracking-wider">
              Client Feedback
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0A2A6B] tracking-tight mt-1">
              Loved by Pakistani Hosts & Businesses
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              From wedding banquet tables to cafe dining rooms, see how custom bottles leave a lasting impression.
            </p>
          </div>

          {/* Testimonial Cards (Horizontal snap on mobile, 3 cols desktop) */}
          <div className="flex sm:grid sm:grid-cols-3 gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {CUSTOM_TESTIMONIALS.map(item => (
              <div
                key={item.id}
                className="snap-center shrink-0 w-[82vw] max-w-[340px] sm:w-auto bg-gradient-to-b from-[#F4FAFF] to-[#E6F3FF] rounded-3xl p-6 border border-sky-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {/* Stars */}
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-sky-200" />
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                    "{item.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-sky-200/60">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0A2A6B] to-[#0B5FD6] text-white font-display font-bold text-xs flex items-center justify-center shrink-0 shadow-sm">
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs sm:text-sm text-[#0A2A6B]">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-[#0B5FD6] font-medium">
                      {item.role} • {item.city}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PART 2: FAQ ACCORDION */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-xs font-bold text-[#0B5FD6] uppercase tracking-wider">
              Got Questions?
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0A2A6B] tracking-tight mt-1">
              Custom Bottling Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {CUSTOM_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-sky-100 bg-[#F4FAFF] overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full min-h-[52px] py-3.5 px-5 flex items-center justify-between text-left gap-4 hover:bg-sky-100/50 transition-colors"
                  >
                    <span className="font-display font-bold text-xs sm:text-sm text-[#0A2A6B]">
                      {faq.question}
                    </span>
                    <span className="p-1 rounded-full bg-white text-[#0B5FD6] shadow-xs shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-sky-100/60 bg-white/70">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* WhatsApp Direct Help */}
          <div className="mt-8 text-center bg-sky-50 rounded-2xl p-4 border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-700">
              Have a special inquiry or marquee requirement not listed here?
            </span>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
                'Hello Decent Water, I have a custom bottle question.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 shrink-0"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
