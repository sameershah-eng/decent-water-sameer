import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Phone, MessageSquare, Quote } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/products';

export const TestimonialsFaq: React.FC = () => {
  // Testimonials with realistic Pakistani names (initials avatars in gradient circles, no fake faces)
  const testimonials = [
    {
      // MOCK TESTIMONIAL: confirm with client
      name: 'Dr. Tariq Mahmood',
      role: 'Family Physician',
      area: 'Gujar Khan City',
      initials: 'TM',
      quote:
        'We shifted to Decent Water for our family clinic 6 months ago. The TDS levels are well-regulated, the seal on each 19L jar is always intact, and the delivery boys are very respectful and timely.'
    },
    {
      // MOCK TESTIMONIAL: confirm with client
      name: 'Ayesha Usman',
      role: 'Homeowner & Mother',
      area: 'Ahdi, Gujar Khan',
      initials: 'AU',
      quote:
        'Finding reliable pure drinking water in our area was challenging until Decent Water started their plant right in Ahdi. Their weekly refill plan has been seamless—they drop new bottles right on time.'
    },
    {
      // MOCK TESTIMONIAL: confirm with client
      name: 'Imran Malik',
      role: 'Operations Lead, IT Firm',
      area: 'Rawalpindi Cantt',
      initials: 'IM',
      quote:
        'We use the Monthly Office Plan (12 bottles per month) for our 25-person team. Great taste, no plastic odor, and they provide proper receipts for office expense reimbursement.'
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // FAQ Items
  const faqItems = [
    {
      q: 'Which areas do you deliver to in Punjab?',
      a: 'We operate our primary bottling facility in Ahdi, Tehsil Gujar Khan. We deliver daily across Gujar Khan City, Ahdi, Mandrah, Sohawa, Bewal, and the Rawalpindi Cantt / City commercial and residential sectors.'
    },
    {
      q: 'How does the 19 Liter bottle deposit work?',
      a: 'For first-time customers who do not already have an empty food-grade 19L bottle, there is a one-time refundable security deposit of Rs. 1,000 per bottle. On future orders, you simply exchange your empty bottle for a freshly filled and sanitized refill for just Rs. 250.'
    },
    {
      q: 'Can I order single cartons for weddings, parties, or bulk events?',
      a: 'Yes! We regularly supply cartons of 500 mL and 1.5 L bottles for weddings, funeral gatherings, conferences, and school sports galas. Special wholesale discounts and refrigerated delivery dispatch can be coordinated by contacting Sameer Afzal via phone or WhatsApp.'
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept Cash on Delivery (COD) upon receiving your bottles, as well as direct mobile payments via JazzCash, Easypaisa, and direct Pakistani bank transfers.'
    },
    {
      q: 'What are your purification and laboratory testing standards?',
      a: 'Our water undergoes a rigorous 6-step multi-barrier treatment including high-pressure Reverse Osmosis (RO), activated coconut-shell carbon filtration, and Ultraviolet (UV) disinfection. We routinely monitor TDS, pH, and microbial clarity.'
    }
  ];

  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============================================================== */}
        {/* STATS STRIP                                                    */}
        {/* ============================================================== */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0A2A6B] via-[#0B5FD6] to-[#0A2A6B] text-white shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              {/* MOCK STAT: confirm with client */}
              <div className="font-display font-black text-3xl sm:text-4xl text-[#7FD8FF]">
                5,000+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-sky-100 mt-1">
                Happy Customers
              </div>
              <div className="text-[10.5px] text-sky-200/70 mt-0.5">Across Gujar Khan & Pindi</div>
            </div>

            <div>
              {/* MOCK STAT: confirm with client */}
              <div className="font-display font-black text-3xl sm:text-4xl text-[#7FD8FF]">
                120,000+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-sky-100 mt-1">
                Bottles Delivered
              </div>
              <div className="text-[10.5px] text-sky-200/70 mt-0.5">Hygienically Sealed</div>
            </div>

            <div>
              {/* MOCK STAT: confirm with client */}
              <div className="font-display font-black text-3xl sm:text-4xl text-[#7FD8FF]">
                7.2 pH
              </div>
              <div className="text-xs sm:text-sm font-semibold text-sky-100 mt-1">
                Balanced Neutral
              </div>
              <div className="text-[10.5px] text-sky-200/70 mt-0.5">Essential Minerals Retained</div>
            </div>

            <div>
              {/* MOCK STAT: confirm with client */}
              <div className="font-display font-black text-3xl sm:text-4xl text-[#7FD8FF]">
                100%
              </div>
              <div className="text-xs sm:text-sm font-semibold text-sky-100 mt-1">
                RO & UV Certified
              </div>
              <div className="text-[10.5px] text-sky-200/70 mt-0.5">Ahdi Bottling Facility</div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* TESTIMONIALS SLIDER                                            */}
        {/* ============================================================== */}
        <div className="mb-24">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#0B5FD6]">
              Community Voices
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A2A6B] mt-1 tracking-tight">
              Trusted by Families & Local Businesses
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Active Testimonial Card */}
            <div className="relative p-8 sm:p-10 rounded-3xl bg-[#F4FAFF] border border-sky-100 shadow-lg text-center flex flex-col items-center">
              <Quote className="w-10 h-10 text-[#0B5FD6]/20 mb-4" />

              <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed max-w-xl">
                "{testimonials[activeTestimonial].quote}"
              </p>

              {/* 5 Stars */}
              <div className="flex items-center gap-1 mt-6 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                ))}
              </div>

              {/* Avatar Initials + Name */}
              <div className="flex items-center gap-3 mt-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#0B5FD6] to-[#3FB4F5] text-white font-bold text-sm flex items-center justify-center shadow-md">
                  {testimonials[activeTestimonial].initials}
                </div>
                <div className="text-left">
                  <div className="font-display font-bold text-sm text-[#0A2A6B]">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {testimonials[activeTestimonial].role} · {testimonials[activeTestimonial].area}
                  </div>
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex items-center gap-2 mt-8">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      activeTestimonial === idx
                        ? 'w-8 bg-[#0B5FD6]'
                        : 'w-2.5 bg-sky-200 hover:bg-sky-300'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* FAQ ACCORDION                                                  */}
        {/* ============================================================== */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#0B5FD6]">
              Got Questions?
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A2A6B] mt-1 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, index) => {
              const isOpen = expandedFaq === index;
              return (
                <div
                  key={item.q}
                  className="rounded-2xl border border-sky-100 overflow-hidden bg-white shadow-sm transition-all"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left font-display font-bold text-sm sm:text-base text-[#0A2A6B] flex items-center justify-between gap-4 hover:bg-sky-50/50 transition-colors"
                  >
                    <span>{item.q}</span>
                    <span className="p-1 rounded-lg bg-sky-50 text-[#0B5FD6] shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-sky-50 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================================== */}
        {/* FINAL CALL TO ACTION BAND                                      */}
        {/* ============================================================== */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0A2A6B] via-[#0B5FD6] to-[#3FB4F5] text-white p-8 sm:p-12 text-center shadow-xl">
          <span className="font-script text-2xl sm:text-3xl text-sky-200 font-bold">
            Pure Hydration for Every Need
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl mt-1 tracking-tight">
            Order Fresh Pure Water Today
          </h2>
          <p className="text-xs sm:text-sm text-sky-100 max-w-lg mx-auto mt-2 leading-relaxed">
            Delivering clean, healthy, crystal-clear drinking water across Ahdi, Gujar Khan, and Rawalpindi.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone1Intl}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-white text-[#0A2A6B] hover:bg-sky-50 shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4 text-[#0B5FD6]" />
              <span>Call: {BUSINESS_INFO.phone1}</span>
            </a>

            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Decent Water! I want to order water.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: {BUSINESS_INFO.phone2}</span>
            </a>
          </div>

          <p className="text-[11px] text-sky-200/80 mt-4">
            Plant & Dispatch: {BUSINESS_INFO.address} · Owner: Sameer Afzal
          </p>
        </div>
      </div>
    </section>
  );
};
