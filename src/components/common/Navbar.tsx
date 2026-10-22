import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { BUSINESS_INFO } from '../../data/products';

export const Navbar: React.FC = () => {
  const { itemCount, openDrawer, cartBounce } = useCart();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll handler for frosted glass & hide on down / show on up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if past top hero zone
      if (currentScrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide on scroll down, show on scroll up (with 10px buffer)
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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

  const isHeroTransparent = !isScrolled && location.pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isHeroTransparent
            ? 'bg-transparent text-white py-5'
            : 'bg-white/85 backdrop-blur-md shadow-sm border-b border-sky-100 text-[#0A2A6B] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* ZONE 1: BRAND LOGO */}
          <Link to="/" className="flex items-center gap-2.5 group select-none whitespace-nowrap shrink-0">
            {/* Water drop mark */}
            <div className="relative w-8 h-10 flex items-center justify-center">
              <svg viewBox="0 0 50 62" className="w-full h-full drop-shadow-sm" fill="none">
                <defs>
                  <linearGradient id="navDropGrad" x1="10" y1="5" x2="40" y2="55" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#3FB4F5" />
                    <stop offset="60%" stopColor="#0B5FD6" />
                    <stop offset="100%" stopColor="#0A2A6B" />
                  </linearGradient>
                </defs>
                <path d="M25 4C25 4 8 28 8 40C8 50 15.6 58 25 58C34.4 58 42 50 42 40C42 28 25 4 25 4Z" fill="url(#navDropGrad)" />
                <path d="M14 42C19 38 31 38 36 42" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" opacity="0.9" />
                <path d="M19 19C19 19 14 27 14 34C14 37 15.5 40 18 42C16.5 39 16 36 16 34C16 28 19 21 19 19Z" fill="#FFFFFF" fillOpacity="0.85" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1 font-display font-extrabold text-xl tracking-tight leading-none">
                <span className={isHeroTransparent ? 'text-white' : 'text-[#0A2A6B]'}>Decent</span>
                <span className="text-[#3FB4F5] font-semibold">Water</span>
              </div>
              <span className={`text-[8.5px] uppercase tracking-wider font-semibold ${isHeroTransparent ? 'text-sky-200' : 'text-sky-600'}`}>
                Pure Bottled Water
              </span>
            </div>
          </Link>

          {/* ZONE 2: NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-7 text-[14px] font-semibold">
            {navLinks.map(link => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 group ${
                    isHeroTransparent
                      ? isActive
                        ? 'text-white'
                        : 'text-white/85 hover:text-white'
                      : isActive
                      ? 'text-[#0B5FD6]'
                      : 'text-[#0A2A6B]/80 hover:text-[#0B5FD6]'
                  }`}
                >
                  {link.label}
                  {/* Subtle active indicator bar */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3FB4F5] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ZONE 3: ACTIONS (CART + ORDER NOW) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Cart Trigger */}
            <button
              onClick={openDrawer}
              aria-label="View Shopping Cart"
              className={`relative p-2 rounded-xl transition-all flex items-center justify-center ${
                isHeroTransparent
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

            {/* Order Now Gradient Button */}
            <button
              onClick={openDrawer}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-xs tracking-wide text-white bg-gradient-to-r from-[#0B5FD6] via-[#2A8BEA] to-[#3FB4F5] hover:opacity-95 shadow-md shadow-sky-500/20 active:scale-95 transition-all whitespace-nowrap shrink-0"
            >
              <span>Order Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                isHeroTransparent ? 'text-white bg-white/10' : 'text-[#0A2A6B] bg-sky-50'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* FULL-SCREEN MOBILE OVERLAY MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-gradient-to-b from-[#0A2A6B] via-[#0B5FD6] to-[#0A2A6B] text-white pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
          <div className="flex flex-col space-y-4">
            <span className="text-xs font-semibold text-[#7FD8FF] uppercase tracking-wider">
              Navigation Menu
            </span>
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-display font-bold py-2 border-b border-white/10 text-white/95 hover:text-[#7FD8FF] transition-colors flex items-center justify-between"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-5 h-5 text-white/40" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Contact Buttons at bottom of mobile menu */}
          <div className="mt-8 pt-6 border-t border-white/15 flex flex-col gap-3">
            <span className="text-xs text-sky-200 font-medium">Quick Order / Inquiry</span>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phone1Intl}`}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 backdrop-blur-md text-white font-semibold text-xs border border-white/20 active:bg-white/20"
              >
                <Phone className="w-4 h-4 text-[#7FD8FF]" />
                <span>Call Plant</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Decent Water! I would like to order drinking water in Gujar Khan / Rawalpindi.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs shadow-lg active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
            <p className="text-[11px] text-center text-sky-200/80 mt-2">
              {BUSINESS_INFO.address}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
