import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu, X, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { BUSINESS_INFO } from '../../data/products';

export const Navbar: React.FC = () => {
  const { itemCount, openDrawer, cartBounce } = useCart();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Single passive scroll listener throttled with requestAnimationFrame
  // Only updates state when crossing the 20px threshold
  useEffect(() => {
    let ticking = false;

    const checkScroll = () => {
      const pastThreshold = window.scrollY >= 20;
      setIsScrolled(prev => (prev !== pastThreshold ? pastThreshold : prev));
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(checkScroll);
        ticking = true;
      }
    };

    // Initial check on mount
    checkScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Why Us', path: '/#why-us' },
    { label: 'Process', path: '/#process' },
    { label: 'Delivery', path: '/#delivery' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  // Only the home page starts transparent; all other pages without a dark hero start in frosted glass
  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !isScrolled && !mobileMenuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300 ease-out ${
          isTransparent
            ? 'h-[68px] lg:h-[80px] bg-transparent text-white'
            : 'h-[60px] lg:h-[68px] text-[#0A2A6B]'
        }`}
        style={
          isTransparent
            ? {
                backgroundColor: 'transparent',
                borderBottom: '1px solid transparent',
                boxShadow: 'none'
              }
            : {
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                backdropFilter: 'blur(16px) saturate(180%)',
                WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                borderBottom: '1px solid rgba(11, 95, 214, 0.12)',
                boxShadow: '0 8px 30px rgba(10, 42, 107, 0.08)'
              }
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-8">
          {/* ZONE 1: BRAND LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group select-none whitespace-nowrap shrink-0 transition-transform active:scale-95"
            aria-label="Decent Water Home"
          >
            {/* Water drop mark */}
            <div className="relative w-7 h-9 sm:w-8 sm:h-10 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 50 62" className="w-full h-full drop-shadow-sm" fill="none">
                <defs>
                  <linearGradient id="navDropGrad" x1="10" y1="5" x2="40" y2="55" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#3FB4F5" />
                    <stop offset="60%" stopColor="#0B5FD6" />
                    <stop offset="100%" stopColor="#0A2A6B" />
                  </linearGradient>
                </defs>
                <path
                  d="M25 4C25 4 8 28 8 40C8 50 15.6 58 25 58C34.4 58 42 50 42 40C42 28 25 4 25 4Z"
                  fill="url(#navDropGrad)"
                />
                <path
                  d="M14 42C19 38 31 38 36 42"
                  stroke="#FFFFFF"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  opacity="0.9"
                />
                <path
                  d="M19 19C19 19 14 27 14 34C14 37 15.5 40 18 42C16.5 39 16 36 16 34C16 28 19 21 19 19Z"
                  fill="#FFFFFF"
                  fillOpacity="0.85"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1 font-display font-extrabold text-lg sm:text-xl tracking-tight leading-none">
                <span
                  className={`transition-colors duration-300 ${
                    isTransparent || mobileMenuOpen ? 'text-white' : 'text-[#0A2A6B]'
                  }`}
                >
                  Decent
                </span>
                <span
                  className={`font-semibold transition-colors duration-300 ${
                    isTransparent || mobileMenuOpen ? 'text-[#7FD8FF]' : 'text-[#0B5FD6]'
                  }`}
                >
                  Water
                </span>
              </div>
              <span
                className={`text-[8px] sm:text-[8.5px] uppercase tracking-wider font-semibold transition-colors duration-300 ${
                  isTransparent || mobileMenuOpen ? 'text-sky-200' : 'text-[#3FB4F5]'
                }`}
              >
                Pure Bottled Water
              </span>
            </div>
          </Link>

          {/* ZONE 2: NAV LINKS (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-[14px] font-semibold">
            {navLinks.map(link => {
              const isActive =
                link.path === '/'
                  ? location.pathname === '/' && !location.hash
                  : link.path.startsWith('/#')
                  ? location.pathname === '/' && location.hash === link.path.replace('/', '')
                  : location.pathname === link.path;

              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`relative py-1 transition-colors duration-300 whitespace-nowrap shrink-0 group ${
                    isTransparent
                      ? isActive
                        ? 'text-white font-bold'
                        : 'text-white/85 hover:text-white'
                      : isActive
                      ? 'text-[#0B5FD6] font-bold'
                      : 'text-[#0A2A6B]/80 hover:text-[#0B5FD6]'
                  }`}
                >
                  <span>{link.label}</span>
                  {/* Sliding active link indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#3FB4F5] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ZONE 3: ACTIONS (CART + ORDER NOW + MOBILE HAMBURGER) */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Cart Trigger with Bouncing Badge */}
            <button
              onClick={openDrawer}
              aria-label="View Shopping Cart"
              className={`relative p-2 sm:p-2.5 rounded-xl transition-all duration-300 flex items-center justify-center ${
                isTransparent || mobileMenuOpen
                  ? 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm'
                  : 'bg-sky-50 hover:bg-sky-100 text-[#0A2A6B]'
              } ${cartBounce ? 'scale-115 ring-2 ring-[#3FB4F5]' : ''}`}
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-[20px] px-1 text-[11px] font-bold text-white bg-gradient-to-r from-[#0B5FD6] to-[#3FB4F5] rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Desktop "Order Now" Button */}
            <button
              onClick={openDrawer}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-xs tracking-wide text-white bg-gradient-to-r from-[#0B5FD6] via-[#2A8BEA] to-[#3FB4F5] hover:opacity-95 shadow-md shadow-sky-500/20 active:scale-95 transition-all whitespace-nowrap shrink-0"
            >
              <span>Order Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger / Morphing X Button */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
                isTransparent || mobileMenuOpen
                  ? 'text-white bg-white/15 hover:bg-white/25 active:bg-white/30'
                  : 'text-[#0A2A6B] bg-sky-50 hover:bg-sky-100 active:bg-sky-200'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* FULL-SCREEN MOBILE OVERLAY MENU (Layered right under fixed navbar at z-40) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 lg:hidden bg-gradient-to-b from-[#0A2A6B] via-[#0B5FD6] to-[#0A2A6B] text-white pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto"
          >
            <div className="flex flex-col space-y-4">
              <span className="text-[11px] font-bold text-[#7FD8FF] uppercase tracking-widest">
                Navigation Menu
              </span>
              <div className="flex flex-col space-y-2">
                {navLinks.map((link, index) => {
                  const isActive =
                    link.path === '/'
                      ? location.pathname === '/' && !location.hash
                      : link.path.startsWith('/#')
                      ? location.pathname === '/' && location.hash === link.path.replace('/', '')
                      : location.pathname === link.path;

                  return (
                    <Link
                      key={link.label}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-2xl font-display font-bold py-2.5 border-b border-white/10 transition-colors flex items-center justify-between ${
                        isActive ? 'text-[#7FD8FF]' : 'text-white/95 hover:text-[#7FD8FF]'
                      }`}
                      style={{ animationDelay: `${index * 40}ms` }}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-5 h-5 text-white/40" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Quick Contact Buttons at bottom of mobile menu */}
            <div className="mt-8 pt-6 border-t border-white/15 flex flex-col gap-3">
              <span className="text-xs text-sky-200 font-medium">Quick Order / Inquiry</span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone1Intl}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 backdrop-blur-md text-white font-semibold text-xs border border-white/20 active:bg-white/20 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#7FD8FF]" />
                  <span>Call Plant</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
                    'Hello Decent Water! I would like to order drinking water in Gujar Khan / Rawalpindi.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs shadow-lg active:scale-95 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
              <p className="text-[11px] text-center text-sky-200/80 mt-2">
                {BUSINESS_INFO.address}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
