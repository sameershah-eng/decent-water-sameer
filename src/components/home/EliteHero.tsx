import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, MessageSquare, ShoppingBag, Check, Shield, Sparkles, Droplets } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { PRODUCTS, BUSINESS_INFO, formatPKR } from '../../data/products';
import { Bottle1500 } from '../bottles/Bottle1500';
import { Bottle500 } from '../bottles/Bottle500';
import { Bottle12L } from '../bottles/Bottle12L';
import { Bottle19L } from '../bottles/Bottle19L';

export const EliteHero: React.FC = () => {
  const { addToCart } = useCart();
  const heroRef = useRef<HTMLElement>(null);

  // Rotating target word
  const destinations = ['Home', 'Office', 'Shop', 'Event'];
  const [destIndex, setDestIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDestIndex(prev => (prev + 1) % destinations.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [destinations.length]);

  // Selected bottle size in hero
  type HeroSize = '500ml' | '1.5l' | '12l' | '19l';
  const [selectedSize, setSelectedSize] = useState<HeroSize>('1.5l');
  const [isAdded, setIsAdded] = useState(false);

  // Mouse tilt tracking for bottle on desktop
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.innerWidth < 1024) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 14;
    const y = (clientY / innerHeight - 0.5) * 14;
    setMouseTilt({ x, y });
  };

  // Bottle config mapping
  const sizeOptions: Record<HeroSize, {
    label: string;
    chip: string;
    price: number;
    originalPrice?: number;
    productId: string;
    description: string;
  }> = {
    '500ml': {
      label: '500 mL Bottle',
      chip: '500 mL',
      price: 50,
      productId: 'dw-500ml-single',
      description: 'Handy pocket & travel size'
    },
    '1.5l': {
      label: '1.5 L Bottle',
      chip: '1.5 L',
      price: 110,
      productId: 'dw-1500ml-single',
      description: 'Daily dining & hydration bottle'
    },
    '12l': {
      label: '12 L Bottle (Handle)',
      chip: '12 L',
      price: 250,
      originalPrice: 280,
      productId: 'dw-12l-handle',
      description: 'Integrated molded easy-carry handle'
    },
    '19l': {
      label: '19 L Dispenser Refill',
      chip: '19 L',
      price: 250,
      productId: 'dw-19l-refill',
      description: 'Standard dispenser carboy swap'
    }
  };

  const currentOption = sizeOptions[selectedSize];
  const matchedProduct = PRODUCTS.find(p => p.id === currentOption.productId) || PRODUCTS[2];

  const handleQuickAdd = () => {
    addToCart(matchedProduct, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  // Rising bubble particles (generated stably)
  const bubbles = [
    { left: '8%', size: 14, delay: 0.2, duration: 9 },
    { left: '16%', size: 8, delay: 2.1, duration: 11 },
    { left: '26%', size: 18, delay: 1.0, duration: 13 },
    { left: '38%', size: 10, delay: 3.5, duration: 10 },
    { left: '52%', size: 16, delay: 0.8, duration: 12 },
    { left: '68%', size: 9, delay: 2.7, duration: 14 },
    { left: '78%', size: 22, delay: 1.4, duration: 11 },
    { left: '88%', size: 12, delay: 3.1, duration: 10 },
    { left: '94%', size: 7, delay: 0.5, duration: 12 }
  ];

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[640px] h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[#0A2A6B] text-white pt-20 pb-12 sm:pt-24 sm:pb-16 select-none"
    >
      {/* ============================================================== */}
      {/* LAYER 1: Slow-moving liquid gradient mesh in navy/royal/aqua   */}
      {/* ============================================================== */}
      <div className="absolute inset-0 animate-liquid-mesh opacity-90 -z-30 pointer-events-none" />

      {/* ============================================================== */}
      {/* LAYER 2: Mountain Silhouettes with snowy peaks (Parallax feel) */}
      {/* ============================================================== */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none -z-20 overflow-hidden"
        style={{
          transform: `translateY(${mouseTilt.y * -0.3}px)`
        }}
      >
        <svg
          viewBox="0 0 1440 420"
          className="w-full h-auto min-h-[220px] max-h-[360px] object-cover"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="backMountains" x1="0" y1="0" x2="0" y2="400" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0B5FD6" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="frontMountains" x1="0" y1="0" x2="0" y2="350" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0F172A" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0A2A6B" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          {/* Distant Peaks */}
          <path
            d="M0 240 L180 120 L320 200 L520 80 L680 190 L880 70 L1080 190 L1260 100 L1440 210 L1440 420 L0 420 Z"
            fill="url(#backMountains)"
          />
          {/* Distant Snow Caps */}
          <polygon points="520,80 480,130 560,130" fill="#E0F2FE" opacity="0.6" />
          <polygon points="880,70 840,120 920,120" fill="#E0F2FE" opacity="0.6" />
          <polygon points="180,120 150,160 210,160" fill="#E0F2FE" opacity="0.5" />
          <polygon points="1260,100 1230,140 1290,140" fill="#E0F2FE" opacity="0.5" />

          {/* Forefront Peaks */}
          <path
            d="M0 320 L240 180 L440 290 L700 160 L940 270 L1180 170 L1440 300 L1440 420 L0 420 Z"
            fill="url(#frontMountains)"
          />
          <polygon points="700,160 660,210 740,210" fill="#FFFFFF" opacity="0.75" />
          <polygon points="240,180 200,230 280,230" fill="#FFFFFF" opacity="0.75" />
          <polygon points="1180,170 1145,220 1215,220" fill="#FFFFFF" opacity="0.75" />
        </svg>
      </div>

      {/* ============================================================== */}
      {/* LAYER 3: Animated water caustics / light ripples               */}
      {/* ============================================================== */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-400/15 via-transparent to-transparent animate-caustic pointer-events-none -z-15" />

      {/* ============================================================== */}
      {/* LAYER 4: Rising bubble particles                               */}
      {/* ============================================================== */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {bubbles.map((b, i) => (
          <motion.div
            key={i}
            className="absolute bottom-[-30px] rounded-full border border-sky-200/50 bg-sky-300/20 backdrop-blur-[1px]"
            style={{
              left: b.left,
              width: b.size,
              height: b.size
            }}
            animate={{
              y: ['0vh', '-110vh'],
              x: [0, (i % 2 === 0 ? 15 : -15), 0],
              opacity: [0, 0.7, 0.7, 0]
            }}
            transition={{
              duration: b.duration,
              delay: b.delay,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      {/* ============================================================== */}
      {/* LAYER 5: Soft Sunlight beam from top-right (Flyer feel)        */}
      {/* ============================================================== */}
      <div className="absolute -top-32 -right-24 w-96 h-96 bg-gradient-to-b from-[#7FD8FF]/30 to-transparent rotate-45 blur-3xl pointer-events-none -z-10" />

      {/* ============================================================== */}
      {/* MAIN VIEWPORT CONTENT (Split Desktop / Stacked Mobile)         */}
      {/* ============================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-3.5 sm:space-y-4 max-w-xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-[11px] font-semibold text-sky-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#3FB4F5] animate-ping" />
            <span>Trusted Water Supplier in Gujar Khan</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.08] text-balance">
            <span>Refresh Your Day</span>
            <span className="block mt-1 text-shimmer">Naturally</span>
          </h1>

          {/* Script Accent Line */}
          <div className="font-script text-2xl sm:text-3xl text-[#7FD8FF] -mt-1 drop-shadow-sm font-bold">
            Pure Hydration for Every Need
          </div>

          {/* Rotating Destination Banner */}
          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-sky-100/90 h-6 overflow-hidden">
            <span>Fresh water delivered to your</span>
            <div className="relative h-6 inline-block w-20 text-left font-bold text-[#7FD8FF]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={destinations[destIndex]}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -16, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 underline decoration-[#3FB4F5]/60 underline-offset-2"
                >
                  {destinations[destIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Subtext */}
          <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed max-w-lg">
            Multi-stage purified drinking water, from 500 mL bottles to 19 L dispensers.
            Sourced pure, treated with RO & UV, and delivered fast across Gujar Khan and Rawalpindi.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full sm:w-auto">
            <a
              href="#products-section"
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-white text-[#0A2A6B] hover:bg-sky-50 shadow-lg shadow-sky-900/30 flex items-center justify-center gap-2 group transition-all active:scale-95"
            >
              <span>Shop Lineup</span>
              <ArrowRight className="w-4 h-4 text-[#0B5FD6] group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Decent Water! I would like to order water.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-white/10 hover:bg-white/20 border border-white/25 text-white backdrop-blur-md flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Order on WhatsApp</span>
            </a>
          </div>

          {/* Trust Row / Proof Numbers */}
          <div className="pt-3 border-t border-white/15 grid grid-cols-3 gap-3 w-full text-center lg:text-left">
            <div>
              {/* MOCK STAT: confirm with client */}
              <div className="font-display font-extrabold text-base sm:text-lg text-white">5,000+</div>
              <div className="text-[10px] sm:text-xs text-sky-200/80">Happy Customers</div>
            </div>
            <div>
              {/* MOCK STAT: confirm with client */}
              <div className="font-display font-extrabold text-base sm:text-lg text-white">7-Step</div>
              <div className="text-[10px] sm:text-xs text-sky-200/80">Purification RO</div>
            </div>
            <div>
              {/* MOCK STAT: confirm with client */}
              <div className="font-display font-extrabold text-base sm:text-lg text-white">Same-Day</div>
              <div className="text-[10px] sm:text-xs text-sky-200/80">Local Delivery</div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT: INTERACTIVE HERO BOTTLE & SIZE SWITCHER */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center relative mt-2 lg:mt-0">
          {/* Pulsing Ripple Circle Behind Bottle */}
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-sky-400/30 animate-pulse-glow -z-10" />
          <div className="absolute w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-gradient-to-tr from-[#3FB4F5]/20 to-[#0B5FD6]/30 blur-2xl -z-10" />

          {/* Floating Info Cards on Desktop */}
          <div className="hidden lg:block absolute -left-6 top-12 z-20 animate-float" style={{ animationDelay: '0.2s' }}>
            <div className="px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg flex items-center gap-2 text-xs font-semibold">
              <Droplets className="w-4 h-4 text-[#7FD8FF]" />
              <span>pH Balanced 7.2</span>
            </div>
          </div>

          <div className="hidden lg:block absolute -right-4 top-28 z-20 animate-float" style={{ animationDelay: '1.2s' }}>
            <div className="px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg flex items-center gap-2 text-xs font-semibold">
              <Sparkles className="w-4 h-4 text-[#3FB4F5]" />
              <span>UV & RO Treated</span>
            </div>
          </div>

          <div className="hidden lg:block absolute -left-4 bottom-28 z-20 animate-float" style={{ animationDelay: '2.2s' }}>
            <div className="px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg flex items-center gap-2 text-xs font-semibold">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Sealed for Safety</span>
            </div>
          </div>

          {/* Interactive Bottle Display (max-height 60vh on desktop, 38svh on mobile) */}
          <motion.div
            key={selectedSize}
            initial={{ scale: 0.85, opacity: 0.4, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="relative flex items-center justify-center h-[36svh] lg:h-[48vh] max-h-[38svh] lg:max-h-[60vh] select-none"
            style={{
              transform: `perspective(600px) rotateY(${mouseTilt.x * 0.4}deg) rotateX(${-mouseTilt.y * 0.4}deg)`
            }}
          >
            {selectedSize === '500ml' && <Bottle500 className="h-[78%] w-auto max-h-full" />}
            {selectedSize === '1.5l' && <Bottle1500 className="h-full w-auto max-h-full" animatedWater={true} />}
            {selectedSize === '12l' && <Bottle12L className="h-[92%] w-auto max-h-full" />}
            {selectedSize === '19l' && <Bottle19L className="h-full w-auto max-h-full" />}

            {/* Base water splash droplets & soft ground reflection */}
            <div className="absolute -bottom-2 inset-x-0 flex justify-center items-center gap-4 opacity-80 pointer-events-none">
              <span className="w-2.5 h-1.5 rounded-full bg-sky-300 blur-[0.5px]" />
              <span className="w-4 h-2 rounded-full bg-white/90 blur-[0.5px]" />
              <span className="w-2.5 h-1.5 rounded-full bg-sky-300 blur-[0.5px]" />
            </div>
            <div className="absolute -bottom-1.5 w-36 h-2.5 bg-black/20 rounded-[100%] blur-[3px] pointer-events-none" />
          </motion.div>

          {/* Size Selector Chips & Quick Add Card */}
          <div className="mt-4 sm:mt-5 flex flex-col items-center w-full max-w-sm">
            {/* Glass Size Chips */}
            <div className="p-1 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-1 shadow-inner">
              {(['500ml', '1.5l', '12l', '19l'] as HeroSize[]).map(sizeKey => {
                const opt = sizeOptions[sizeKey];
                const active = selectedSize === sizeKey;
                return (
                  <button
                    key={sizeKey}
                    onClick={() => setSelectedSize(sizeKey)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      active
                        ? 'bg-gradient-to-r from-[#0B5FD6] to-[#3FB4F5] text-white shadow-md'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {opt.chip}
                  </button>
                );
              })}
            </div>

            {/* Floating Price & Quick Add Tag */}
            <div className="mt-3 px-4 py-2 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-between gap-4 w-full shadow-lg">
              <div className="text-left">
                <div className="text-[11px] font-semibold text-sky-200">
                  {currentOption.label}
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display font-black text-base text-white">
                    {formatPKR(currentOption.price)}
                  </span>
                  {currentOption.originalPrice && (
                    <span className="text-[11px] text-white/60 line-through">
                      {formatPKR(currentOption.originalPrice)}
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={handleQuickAdd}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-md active:scale-95 ${
                  isAdded
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white text-[#0A2A6B] hover:bg-sky-50'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Added!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-3.5 h-3.5 text-[#0B5FD6]" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* SCROLL INDICATOR                                               */}
      {/* ============================================================== */}
      <div className="absolute bottom-5 inset-x-0 hidden sm:flex flex-col items-center justify-center text-center pointer-events-none z-10">
        <span className="text-[10px] font-bold uppercase tracking-widest text-sky-200/70 mb-1">
          Scroll to explore
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <motion.div
            className="w-1.5 h-2 rounded-full bg-[#3FB4F5]"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          />
        </div>
      </div>

      {/* ============================================================== */}
      {/* DUAL OVERLAPPING SVG WAVES AT BOTTOM EDGE                      */}
      {/* ============================================================== */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none -z-5 overflow-hidden leading-none">
        {/* Back Wave (Aqua tint) */}
        <svg
          viewBox="0 0 1440 80"
          className="w-full h-10 sm:h-14 opacity-40 text-[#7FD8FF]"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,32L60,42.7C120,53,240,75,360,69.3C480,64,600,32,720,26.7C840,21,960,43,1080,48C1200,53,1320,43,1380,37.3L1440,32L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z" />
        </svg>

        {/* Front Wave (Blending smoothly into #F4FAFF) */}
        <svg
          viewBox="0 0 1440 70"
          className="w-full h-8 sm:h-12 -mt-4 sm:-mt-6 text-[#F4FAFF]"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,25 C320,60 420,-10 720,25 C1020,60 1120,-5 1440,25 L1440,70 L0,70 Z" />
        </svg>
      </div>
    </section>
  );
};
