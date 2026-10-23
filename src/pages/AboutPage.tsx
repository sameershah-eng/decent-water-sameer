import React from 'react';
import { ShieldCheck, MapPin, Award, CheckCircle2, User, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';
import { CampaignGallery } from '../components/home/CampaignGallery';
import { SmartImage } from '../components/common/SmartImage';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-16 bg-[#F4FAFF]">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="rounded-3xl bg-gradient-to-r from-[#0A2A6B] via-[#0B5FD6] to-[#0A2A6B] text-white p-8 sm:p-14 text-center shadow-lg relative overflow-hidden">
          <div className="font-script text-2xl sm:text-3xl text-sky-200 font-bold">
            Pure Hydration for a Healthier Tomorrow
          </div>
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight mt-1">
            About Decent Water
          </h1>
          <p className="text-xs sm:text-sm text-sky-100/90 max-w-xl mx-auto mt-2 leading-relaxed">
            Founded with a singular mission: to provide certified safe, refreshing, and genuinely pure drinking water to families and businesses across Punjab.
          </p>
        </div>
      </div>

      {/* Main Story & Plant Location */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#0B5FD6]">
              Our Foundation
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A2A6B] tracking-tight">
              State-of-the-Art Bottling in Ahdi, Gujar Khan
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Decent Water is based in the scenic town of <strong>Ahdi, Tehsil Gujar Khan</strong>, located within the Rawalpindi District of Punjab. Tapping into protected subterranean aquifers known for natural mineral balance, our facility incorporates industrial-grade Reverse Osmosis filtration systems and multi-lamp ultraviolet disinfection chambers.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Unlike ordinary tap filters or non-sanitized local refills, every Decent Water container undergoes automated pressure washing and touch-free cleanroom filling, ensuring absolute safety for newborn babies, children, and elderly parents.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Deep subterranean natural water source</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Strict daily TDS & pH testing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Food-grade BPA free bottles</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hygienic tamper-evident caps</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-sky-100 shadow-xl bg-white">
              <div className="h-64 sm:h-72 w-full relative">
                <SmartImage
                  src="https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80"
                  alt="Pure Water Laboratory & Purification"
                  fallbackTitle="Ahdi Bottling Plant"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A6B]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-xs font-bold text-sky-200">
                    <MapPin className="w-4 h-4 text-[#3FB4F5]" />
                    <span>Ahdi, Tehsil Gujar Khan, District Rawalpindi</span>
                  </div>
                  <div className="text-sm font-display font-extrabold mt-0.5">
                    Central Purification & Dispatch Unit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Owner Profile Section: Sameer Afzaal */}
        <div className="rounded-3xl bg-white border border-sky-100 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-[#0A2A6B] via-[#0B5FD6] to-[#3FB4F5] text-white flex items-center justify-center shadow-xl p-1 mb-4">
                <div className="w-full h-full rounded-full bg-[#0A2A6B] flex items-center justify-center">
                  <User className="w-16 h-16 text-sky-200 stroke-[1.5]" />
                </div>
              </div>
              <h3 className="font-display font-black text-xl text-[#0A2A6B]">
                Sameer Afzaal
              </h3>
              <span className="text-xs font-bold text-[#0B5FD6] mt-0.5">
                Owner & Founder, Decent Water
              </span>
              <div className="flex items-center gap-2 mt-4">
                <a
                  href={`tel:${BUSINESS_INFO.phone1Intl}`}
                  className="p-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-[#0A2A6B] transition-colors"
                  aria-label="Call Owner"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-600 transition-colors"
                  aria-label="WhatsApp Owner"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="md:col-span-8 space-y-3">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#0B5FD6]">
                Message from the Owner
              </span>
              <h4 className="font-display font-extrabold text-xl sm:text-2xl text-[#0A2A6B]">
                "Clean drinking water is not a luxury—it is the basic foundation of a healthy community."
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                "When we founded Decent Water at Ahdi, our pledge was simple: zero compromises on purification. Many water suppliers cut corners on filtration membrane maintenance or bottle sanitation. Here, every batch is checked for mineral equilibrium and sealed immediately. We take personal pride in every single 500 mL bottle and 19 Liter dispenser jar that enters your household."
              </p>
              <div className="pt-2 text-xs text-slate-500 font-medium">
                For personal business partnerships or corporate supply contracts, feel free to reach out to me directly at <strong>{BUSINESS_INFO.phone1}</strong> or <strong>{BUSINESS_INFO.phone2}</strong>.
              </div>
            </div>
          </div>
        </div>

        {/* Quality Commitments */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-sky-100 shadow-sm flex flex-col items-start">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0B5FD6] flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-display font-bold text-base text-[#0A2A6B]">
              Rigorous Laboratory Standards
            </h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Regular chemical and biological checks guarantee that trace contaminants and dissolved impurities remain undetectable.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-sky-100 shadow-sm flex flex-col items-start">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0B5FD6] flex items-center justify-center mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="font-display font-bold text-base text-[#0A2A6B]">
              Balanced Mineral Profile
            </h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              We calibrate the total dissolved solids (TDS) and pH to 7.2 to guarantee maximum cellular hydration and a crisp, light finish.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-sky-100 shadow-sm flex flex-col items-start">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0B5FD6] flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-display font-bold text-base text-[#0A2A6B]">
              Tamper-Evident Safety
            </h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              All bottles and 19L dispenser carboys feature airtight safety shrink sleeves so you know your water is 100% factory sealed.
            </p>
          </div>
        </div>

        {/* Official Campaigns Display */}
        <CampaignGallery />
      </div>
    </div>
  );
};
