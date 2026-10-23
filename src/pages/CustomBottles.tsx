import React, { useState, useEffect } from 'react';
import { Bottle330 } from '../components/bottles/Bottle330';
import { Bottle500 } from '../components/bottles/Bottle500';
import { Bottle1500 } from '../components/bottles/Bottle1500';
import { BeforeAfterBottleSlider } from '../components/customBottles/BeforeAfterBottleSlider';
import { CustomWhoItsFor } from '../components/customBottles/CustomWhoItsFor';
import { LiveLabelDesigner } from '../components/customBottles/LiveLabelDesigner';
import { ReadyMadeGallery } from '../components/customBottles/ReadyMadeGallery';
import { CustomHowItWorks } from '../components/customBottles/CustomHowItWorks';
import { CustomPricingTiers } from '../components/customBottles/CustomPricingTiers';
import { CustomWhyUs } from '../components/customBottles/CustomWhyUs';
import { CustomTestimonialsFaq } from '../components/customBottles/CustomTestimonialsFaq';
import { BUSINESS_INFO } from '../data/products';
import { CustomLabelData, BottleSizeId } from '../data/customBottles';
import {
  Sparkles,
  Palette,
  MessageSquare,
  Phone,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const FANNED_HERO_WEDDING: CustomLabelData = {
  occasion: 'Wedding',
  mainText: 'Ayesha weds Hamza',
  secondLine: '14 Dec 2026',
  theme: 'maroon',
  template: 'elegant'
};

const FANNED_HERO_RESTAURANT: CustomLabelData = {
  occasion: 'Cafe',
  mainText: 'Karachi Biryani',
  secondLine: 'Since 1998',
  theme: 'royalBlue',
  template: 'modern'
};

const FANNED_HERO_CORPORATE: CustomLabelData = {
  occasion: 'Corporate',
  mainText: 'TechVision 2026',
  secondLine: 'Leadership Summit',
  theme: 'navyGold',
  template: 'modern'
};

export const CustomBottles: React.FC = () => {
  // Shared state if user picks a design from the ready-made gallery
  const [designerConfig, setDesignerConfig] = useState<{
    label: CustomLabelData;
    size: BottleSizeId;
  }>({
    label: FANNED_HERO_WEDDING,
    size: '500ml'
  });

  // Page SEO and JSON-LD injection
  useEffect(() => {
    document.title =
      'Custom Name Water Bottles for Weddings, Restaurants and Events | Decent Water, Gujar Khan';

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Personalized custom printed water bottles for weddings, restaurants, corporate summits, and events in Gujar Khan, Rawalpindi, and Islamabad. Sourced pure and bottled fresh by Decent Water.'
    );

    // Service JSON-LD Schema
    const scriptId = 'custom-bottles-schema-ld';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Custom Branded Bottled Water',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Decent Water',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Ahdi',
          addressLocality: 'Gujar Khan',
          addressRegion: 'Punjab',
          addressCountry: 'PK'
        },
        telephone: BUSINESS_INFO.phone1Intl
      },
      serviceType: 'Personalized Water Bottle Printing & Delivery',
      areaServed: [
        { '@type': 'City', name: 'Gujar Khan' },
        { '@type': 'City', name: 'Rawalpindi' },
        { '@type': 'City', name: 'Islamabad' },
        { '@type': 'City', name: 'Mandrah' },
        { '@type': 'City', name: 'Sohawa' }
      ],
      description:
        'Personalized water bottles with custom names and logos for weddings, restaurants, marathons, and business events starting from 100 bottles.'
    };

    script.textContent = JSON.stringify(schemaData);

    return () => {
      // cleanup script if navigating away
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  const handleSelectGalleryDesign = (design: CustomLabelData, size: BottleSizeId) => {
    setDesignerConfig({ label: design, size });
  };

  const scrollToDesigner = () => {
    const el = document.getElementById('live-designer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F4FAFF] overflow-x-clip pb-16 md:pb-0">
      {/* SECTION A: HERO */}
      <section className="relative pt-24 sm:pt-28 pb-14 sm:pb-20 lg:min-h-[80svh] flex items-center bg-gradient-to-b from-[#0A2A6B] via-[#0B5FD6] to-[#0A2A6B] text-white overflow-hidden">
        {/* Subtle Liquid Bubbles Backdrop (reduced on mobile for high lighthouse score) */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-12 left-10 w-32 h-32 rounded-full bg-white/20 blur-2xl animate-pulse" />
          <div className="absolute bottom-16 right-12 w-48 h-48 rounded-full bg-[#3FB4F5]/30 blur-3xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Hero Copy */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
              {/* Glass Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-sky-200 border border-white/20 text-xs font-bold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-[#7FD8FF]" />
                <span>New: Personalized Water Bottles</span>
              </div>

              {/* Main Headline with white-to-aqua gradient */}
              <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.15]">
                <span>Your Name.</span>{' '}
                <span className="block sm:inline bg-gradient-to-r from-white via-sky-200 to-[#7FD8FF] bg-clip-text text-transparent">
                  Our Pure Water.
                </span>
              </h1>

              {/* Script Accent Line */}
              <p className="font-script text-2xl sm:text-3xl text-[#7FD8FF] font-bold">
                Make Every Occasion Memorable
              </p>

              {/* Subtext */}
              <p className="text-xs sm:text-sm text-sky-100/90 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Custom-labelled drinking water for weddings, restaurants, corporate summits, and celebrations. Starting from 100 bottles, delivered cold and sealed across Ahdi, Gujar Khan, and Rawalpindi.
              </p>

              {/* Fanned Bottles (Visible on mobile between text and CTAs for immediate visual hook) */}
              <div className="lg:hidden relative w-full h-52 sm:h-64 my-4 flex items-center justify-center">
                {/* Left Mini Bottle (Wedding Maroon) */}
                <div className="absolute left-1/2 -translate-x-28 -translate-y-2 transform -rotate-12 w-20 h-44 drop-shadow-xl z-10">
                  <Bottle330 className="w-auto h-full" customLabel={FANNED_HERO_WEDDING} />
                </div>
                {/* Center Bottle (Restaurant Blue) */}
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-4 w-24 h-48 drop-shadow-2xl z-20">
                  <Bottle500 className="w-auto h-full" customLabel={FANNED_HERO_RESTAURANT} />
                </div>
                {/* Right Bottle (Corporate Navy Gold) */}
                <div className="absolute left-1/2 translate-x-8 -translate-y-1 transform rotate-12 w-22 h-44 drop-shadow-xl z-10">
                  <Bottle330 className="w-auto h-full" customLabel={FANNED_HERO_CORPORATE} />
                </div>
              </div>

              {/* CTAs (52px tall, stacked full-width on mobile) */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={scrollToDesigner}
                  className="w-full sm:w-auto min-h-[52px] px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#3FB4F5] to-[#0B5FD6] text-white font-display font-extrabold text-sm shadow-xl shadow-sky-500/25 hover:opacity-95 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Palette className="w-4 h-4" />
                  <span>Design Your Label</span>
                </button>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
                    'Hello Decent Water, I am interested in custom labeled water bottles for my event.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[52px] px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-xs border border-white/20 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Get Quote on WhatsApp</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3 text-[11px] text-sky-200 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Min. 100 Bottles</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Free 24h Digital Mockup</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Venue Delivery</span>
                </span>
              </div>
            </div>

            {/* Right Hero Visual (Desktop: 3 Fanned Floating Bottles) */}
            <div className="hidden lg:flex lg:col-span-5 relative h-[440px] items-center justify-center select-none">
              {/* Glow backdrop ring */}
              <div className="absolute w-72 h-72 rounded-full bg-[#3FB4F5]/20 blur-3xl" />

              {/* Left Bottle: Wedding 330 mL */}
              <div
                className="absolute left-4 top-14 w-32 h-80 transform -rotate-12 drop-shadow-2xl z-10 transition-transform duration-500 hover:scale-105"
                style={{ animation: 'floatSlow 6s ease-in-out infinite' }}
              >
                <Bottle330 className="w-auto h-full" customLabel={FANNED_HERO_WEDDING} />
              </div>

              {/* Center Bottle: Restaurant 500 mL */}
              <div
                className="absolute left-1/2 -translate-x-1/2 top-4 w-40 h-96 drop-shadow-2xl z-20 transition-transform duration-500 hover:scale-105"
                style={{ animation: 'floatMedium 5s ease-in-out infinite 0.5s' }}
              >
                <Bottle500 className="w-auto h-full" customLabel={FANNED_HERO_RESTAURANT} />
              </div>

              {/* Right Bottle: Corporate 1500 mL */}
              <div
                className="absolute right-4 top-8 w-36 h-92 transform rotate-12 drop-shadow-2xl z-10 transition-transform duration-500 hover:scale-105"
                style={{ animation: 'floatSlow 7s ease-in-out infinite 1s' }}
              >
                <Bottle1500 className="w-auto h-full" customLabel={FANNED_HERO_CORPORATE} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave Divider */}
        <div className="absolute bottom-0 inset-x-0 overflow-hidden leading-none pointer-events-none translate-y-[1px]">
          <svg
            viewBox="0 0 1440 48"
            className="w-full h-8 sm:h-12 text-white"
            fill="currentColor"
            preserveAspectRatio="none"
          >
            <path d="M0,24 C320,48 720,0 1080,32 C1260,44 1380,18 1440,24 L1440,48 L0,48 Z" />
          </svg>
        </div>
      </section>

      {/* SECTION B: HOW IT LOOKS (Before / After Slider) */}
      <BeforeAfterBottleSlider />

      {/* SECTION C: WHO IT'S FOR (Use Case Cards) */}
      <CustomWhoItsFor />

      {/* SECTION D: LIVE LABEL DESIGNER (Star of the page) */}
      <LiveLabelDesigner
        initialLabel={designerConfig.label}
        initialSize={designerConfig.size}
      />

      {/* SECTION E: READY-MADE DESIGN GALLERY */}
      <ReadyMadeGallery onSelectDesign={handleSelectGalleryDesign} />

      {/* SECTION F: HOW IT WORKS (5 Steps with water line) */}
      <CustomHowItWorks />

      {/* SECTION G: PRICING TIERS */}
      <CustomPricingTiers />

      {/* SECTION H: WHY CHOOSE US */}
      <CustomWhyUs />

      {/* SECTIONS I & J: TESTIMONIALS & FAQ */}
      <CustomTestimonialsFaq />

      {/* SECTION K: FINAL CTA BAND */}
      <section className="py-14 sm:py-20 bg-gradient-to-r from-[#0A2A6B] via-[#0B5FD6] to-[#0A2A6B] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="font-script text-2xl sm:text-3xl text-sky-200 font-bold block mb-1">
            Personalized Refreshment for Every Table
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
            Planning a Wedding or Event? Let's Make Your Bottles.
          </h2>
          <p className="text-xs sm:text-sm text-sky-100/90 max-w-xl mx-auto mt-2 leading-relaxed">
            Get a complimentary 2D digital mockup of your label within 24 hours. Connect directly with plant management in Ahdi, Gujar Khan.
          </p>

          {/* Contact Numbers & WhatsApp (Click-to-call stacked on mobile) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 max-w-xl mx-auto">
            <a
              href="tel:+923107956354"
              className="w-full sm:w-auto min-h-[48px] px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-xs border border-white/20 flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#7FD8FF]" />
              <span>Call: 0310 7956354</span>
            </a>

            <a
              href="tel:+923454873545"
              className="w-full sm:w-auto min-h-[48px] px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-xs border border-white/20 flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#7FD8FF]" />
              <span>Call: 0345 4873545</span>
            </a>

            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
                'Hello Decent Water, I would like to order custom branded bottles.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Order on WhatsApp</span>
            </a>
          </div>

          <p className="text-[11px] text-sky-200/70 mt-4">
            Plant & Dispatch: Ahdi, Tehsil Gujar Khan, District Rawalpindi, Punjab, Pakistan
          </p>
        </div>
      </section>
    </div>
  );
};
