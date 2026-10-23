import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Clock, Send, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('Gujar Khan City');
  const [inquiryType, setInquiryType] = useState('New Home 19L Delivery');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      alert('Please provide your name and phone number.');
      return;
    }

    let text = `💧 *CONTACT INQUIRY — DECENT WATER*\n`;
    text += `──────────────────\n`;
    text += `• *Name:* ${name.trim()}\n`;
    text += `• *Phone:* ${phone.trim()}\n`;
    text += `• *Area:* ${area}\n`;
    text += `• *Inquiry:* ${inquiryType}\n`;
    if (message.trim()) {
      text += `• *Message:* ${message.trim()}\n`;
    }
    text += `──────────────────\n`;
    text += `Sent from Decent Water Contact Page.`;

    const url = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-16 bg-[#F4FAFF]">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="rounded-3xl bg-gradient-to-r from-[#0A2A6B] via-[#0B5FD6] to-[#0A2A6B] text-white p-8 sm:p-12 text-center shadow-lg relative overflow-hidden">
          <div className="font-script text-2xl sm:text-3xl text-sky-200 font-bold">
            Pure Hydration for Every Need
          </div>
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight mt-1">
            Get in Touch with Decent Water
          </h1>
          <p className="text-xs sm:text-sm text-sky-100/90 max-w-xl mx-auto mt-2 leading-relaxed">
            Have questions about regular 19L home refills, wholesale commercial cartons, or event catering? We are here 7 days a week.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Contact Info & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-white border border-sky-100 shadow-sm space-y-5">
              <h3 className="font-display font-bold text-lg text-[#0A2A6B]">
                Plant & Office Channels
              </h3>

              {/* Plant Location */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0B5FD6] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0A2A6B]">Main Plant & Bottling Unit</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                  <span className="text-[11px] font-semibold text-[#0B5FD6] block mt-1">
                    Owner: Sameer Afzaal
                  </span>
                </div>
              </div>

              {/* Phone Numbers with Click-to-Call */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0B5FD6] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-bold text-[#0A2A6B]">Direct Phone Numbers</h4>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-2">
                    <a
                      href={`tel:${BUSINESS_INFO.phone1Intl}`}
                      className="px-3 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-[#0A2A6B] font-bold text-xs flex items-center gap-1.5 border border-sky-200 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#0B5FD6]" />
                      <span>{BUSINESS_INFO.phone1}</span>
                    </a>
                    <a
                      href={`tel:${BUSINESS_INFO.phone2Intl}`}
                      className="px-3 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-[#0A2A6B] font-bold text-xs flex items-center gap-1.5 border border-sky-200 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#0B5FD6]" />
                      <span>{BUSINESS_INFO.phone2}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Link */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0A2A6B]">WhatsApp Helpline</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fast order dispatch and delivery tracking
                  </p>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-sm"
                  >
                    Chat on WhatsApp: +{BUSINESS_INFO.whatsappRaw}
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3 pt-2 border-t border-sky-50">
                <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0A2A6B]">Operating Hours</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Monday to Sunday: 7:00 AM – 9:00 PM
                  </p>
                  <span className="text-[11px] text-emerald-600 font-medium">
                    Same-day delivery available for early orders
                  </span>
                </div>
              </div>
            </div>

            {/* Embedded Location Map */}
            <div className="rounded-3xl overflow-hidden border border-sky-100 shadow-sm h-56 bg-slate-100 relative">
              <iframe
                title="Decent Water Ahdi Gujar Khan Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106656.49508595781!2d73.2386127117366!3d33.15392062326707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df8962ff4a689f%3A0xe54fbbeee6cf3a68!2sGujar%20Khan%2C%20Rawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                className="w-full h-full border-0 filter contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Pre-filled WhatsApp Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-sky-100 shadow-sm">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#0B5FD6]">
                Message Us
              </span>
              <h2 className="font-display font-extrabold text-2xl text-[#0A2A6B] mt-1">
                Send an Inquiry or Schedule Delivery
              </h2>
              <p className="text-xs text-slate-500 mt-1 mb-6">
                Fill in your details below and click submit to instantly send your message to our WhatsApp team.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0A2A6B] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sameer"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full text-xs px-3.5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5FD6]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0A2A6B] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0310 1234567"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="w-full text-xs px-3.5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5FD6]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0A2A6B] mb-1">
                      Area / Location
                    </label>
                    <select
                      value={area}
                      onChange={e => setArea(e.target.value)}
                      className="w-full text-xs px-3.5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5FD6] bg-white"
                    >
                      {BUSINESS_INFO.areas.map(a => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                      <option value="Other Area">Other Area in Punjab</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0A2A6B] mb-1">
                      Inquiry Type
                    </label>
                    <select
                      value={inquiryType}
                      onChange={e => setInquiryType(e.target.value)}
                      className="w-full text-xs px-3.5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5FD6] bg-white"
                    >
                      <option value="New Home 19L Delivery">New Home 19L Delivery</option>
                      <option value="Corporate Office Contract">Corporate Office Contract</option>
                      <option value="Wedding / Event Bulk Supply">Wedding / Event Bulk Supply</option>
                      <option value="Retail Carton Orders">Retail Carton Orders</option>
                      <option value="Plant Visit / Distribution Partnership">Plant Visit / Distribution Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0A2A6B] mb-1">
                    Your Message / Delivery Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us how many bottles you need, preferred delivery schedule, or any questions..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="w-full text-xs px-3.5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5FD6]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 active:scale-95 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via WhatsApp</span>
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Direct connection with plant dispatch at Ahdi</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
