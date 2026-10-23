import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageSquare, ShieldCheck, Mail, Users } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/products';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A2A6B] text-white pt-16 pb-12 overflow-hidden select-none">
      {/* Top Wave Edge */}
      <div className="absolute top-0 inset-x-0 overflow-hidden leading-none pointer-events-none -translate-y-[99%]">
        <svg
          viewBox="0 0 1440 60"
          className="w-full h-8 sm:h-12 text-[#0A2A6B]"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,20 C360,55 720,0 1080,35 C1260,50 1380,25 1440,20 L1440,60 L0,60 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-10 flex items-center justify-center">
                <svg viewBox="0 0 50 62" className="w-full h-full drop-shadow-sm" fill="none">
                  <path d="M25 4C25 4 8 28 8 40C8 50 15.6 58 25 58C34.4 58 42 50 42 40C42 28 25 4 25 4Z" fill="#3FB4F5" />
                  <path d="M14 42C19 38 31 38 36 42" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M19 19C19 19 14 27 14 34C14 37 15.5 40 18 42C16.5 39 16 36 16 34C16 28 19 21 19 19Z" fill="#FFFFFF" fillOpacity="0.85" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-xl tracking-tight text-white leading-none">
                  Decent<span className="text-[#3FB4F5] font-normal ml-1">Water</span>
                </span>
                <span className="text-[9px] uppercase tracking-wider font-semibold text-sky-300">
                  Bottled Drinking Water
                </span>
              </div>
            </Link>

            <p className="text-xs text-sky-100/80 leading-relaxed max-w-sm">
              Premium multi-stage Reverse Osmosis & UV-sterilized drinking water. Sourced pure and bottled fresh at Ahdi, Gujar Khan.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified RO & UV Disinfection</span>
            </div>

            {/* Owners & Founders Section */}
            <div className="pt-3 border-t border-white/10 space-y-2.5">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#7FD8FF] flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#3FB4F5]" />
                <span>Owners & Founders</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-sky-400/40 transition-colors">
                  <div className="text-xs font-semibold text-white">Ch Shoaib Zakir</div>
                  <div className="mt-1">
                    <a
                      href="tel:+923454873545"
                      className="inline-flex items-center gap-1.5 text-xs text-sky-200 hover:text-white transition-colors group/tel"
                      aria-label="Call Ch Shoaib Zakir at +92 345 4873545"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#3FB4F5] group-hover/tel:text-emerald-400 transition-colors shrink-0" />
                      <span className="font-medium">+92 345 4873545</span>
                    </a>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-sky-400/40 transition-colors">
                  <div className="text-xs font-semibold text-white">Sameer Afzaal</div>
                  <div className="mt-1">
                    <a
                      href="tel:+923335728466"
                      className="inline-flex items-center gap-1.5 text-xs text-sky-200 hover:text-white transition-colors group/tel"
                      aria-label="Call Sameer Afzaal at +92 333 5728466"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#3FB4F5] group-hover/tel:text-emerald-400 transition-colors shrink-0" />
                      <span className="font-medium">+92 333 5728466</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#7FD8FF]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-sky-100/80">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">All Products</Link>
              </li>
              <li>
                <Link to="/custom-bottles" className="hover:text-white transition-colors text-[#7FD8FF] font-semibold">
                  Custom Bottles
                </Link>
              </li>
              <li>
                <a href="/#process" className="hover:text-white transition-colors">Purification Process</a>
              </li>
              <li>
                <a href="/#delivery" className="hover:text-white transition-colors">Refill Delivery</a>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Plant</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Bottle Sizes (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#7FD8FF]">
              Product Sizes
            </h4>
            <ul className="space-y-2 text-xs text-sky-100/80">
              <li>
                <Link to="/products" className="hover:text-white transition-colors">500 mL Single & Carton</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">1.5 Liter Table Bottle</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">Family Pack (12-Pack)</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">12 L Bottle with Handle</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">19 L Dispenser Carboy</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">Monthly Hydration Plans</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Plant Location & Embedded Map (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#7FD8FF]">
              Plant & Contact
            </h4>
            <div className="space-y-2 text-xs text-sky-100/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#3FB4F5] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#3FB4F5] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone1Intl}`} className="hover:text-white">
                  {BUSINESS_INFO.phone1}
                </a>
                <span>/</span>
                <a href={`tel:${BUSINESS_INFO.phone2Intl}`} className="hover:text-white">
                  {BUSINESS_INFO.phone2}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300"
                >
                  WhatsApp: +{BUSINESS_INFO.whatsappRaw}
                </a>
              </div>
            </div>

            {/* Embedded Stylized Map Card for Ahdi, Gujar Khan */}
            <div className="mt-3 rounded-2xl overflow-hidden border border-white/15 h-32 w-full relative bg-slate-800">
              <iframe
                title="Decent Water Plant Location - Ahdi Gujar Khan"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106656.49508595781!2d73.2386127117366!3d33.15392062326707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df8962ff4a689f%3A0xe54fbbeee6cf3a68!2sGujar%20Khan%2C%20Rawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                className="w-full h-full border-0 filter contrast-125 opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-2 left-2 px-2 py-1 rounded bg-[#0A2A6B]/90 backdrop-blur-sm text-[10px] font-bold text-white pointer-events-none flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#3FB4F5]" />
                <span>Ahdi, Gujar Khan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-sky-200/60 gap-3">
          <p>
            © {currentYear} Decent Water. All rights reserved. Sameer Afzaal, Owner.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Ahdi, Tehsil Gujar Khan, District Rawalpindi</span>
            <span>·</span>
            <span>Made for Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
