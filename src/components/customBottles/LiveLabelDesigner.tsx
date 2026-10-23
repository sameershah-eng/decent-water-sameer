import React, { useState, useRef, useId } from 'react';
import { Bottle330 } from '../bottles/Bottle330';
import { Bottle500 } from '../bottles/Bottle500';
import { Bottle1500 } from '../bottles/Bottle1500';
import {
  BOTTLE_SIZES,
  LABEL_THEMES,
  LABEL_TEMPLATES,
  OCCASIONS,
  BottleSizeId,
  LabelThemeId,
  LabelTemplateId,
  CustomLabelData,
  calculateCustomQuote,
  MINIMUM_ORDER_BOTTLES
} from '../../data/customBottles';
import { BUSINESS_INFO, formatPKR } from '../../data/products';
import {
  Sparkles,
  Download,
  Share2,
  ChevronDown,
  ChevronUp,
  Minus,
  Plus,
  MessageSquare,
  CheckCircle2,
  Calendar,
  MapPin,
  User,
  Phone,
  Info
} from 'lucide-react';

interface LiveLabelDesignerProps {
  initialLabel?: Partial<CustomLabelData>;
  initialSize?: BottleSizeId;
  initialQuantity?: number;
}

export const LiveLabelDesigner: React.FC<LiveLabelDesignerProps> = ({
  initialLabel,
  initialSize = '500ml',
  initialQuantity = 100
}) => {
  const [selectedSize, setSelectedSize] = useState<BottleSizeId>(initialSize);
  const [quantity, setQuantity] = useState<number>(initialQuantity);

  const [labelData, setLabelData] = useState<CustomLabelData>({
    occasion: initialLabel?.occasion || 'Wedding',
    mainText: initialLabel?.mainText || 'Ayesha & Hamza',
    secondLine: initialLabel?.secondLine || 'Barat • 14 Dec 2026',
    theme: initialLabel?.theme || 'navyGold',
    template: initialLabel?.template || 'elegant'
  });

  // Customer Contact Details for WhatsApp Quote
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [deliveryArea, setDeliveryArea] = useState('Ahdi / Gujar Khan');

  const [validationError, setValidationError] = useState<string | null>(null);
  const [isExporting, setIsExporting] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);

  const bottleSvgId = useId().replace(/:/g, '-');
  const quote = calculateCustomQuote(selectedSize, quantity);
  const activeTheme = LABEL_THEMES[labelData.theme];

  // Handle Occasion Chip Click
  const handleSelectOccasion = (occId: string) => {
    const occ = OCCASIONS.find(o => o.id === occId);
    if (!occ) return;
    setLabelData(prev => ({
      ...prev,
      occasion: occ.label,
      mainText: occ.defaultMain,
      secondLine: occ.defaultSecond,
      theme: occ.suggestedTheme,
      template: occ.suggestedTemplate
    }));
  };

  // Quantity Stepper Handlers
  const handleDecrement = () => {
    setQuantity(prev => Math.max(MINIMUM_ORDER_BOTTLES, prev - 50));
  };

  const handleIncrement = () => {
    setQuantity(prev => prev + 50);
  };

  // WhatsApp Quote Dispatcher
  const handleRequestQuote = () => {
    if (!labelData.mainText.trim()) {
      setValidationError('Please enter a name or brand text for the label.');
      return;
    }
    setValidationError(null);

    const message = `*CUSTOM BOTTLE QUOTE REQUEST - DECENT WATER*
----------------------------------------
*Service:* Personalized Label Bottled Water
*Occasion:* ${labelData.occasion || 'Custom'}
*Main Text:* "${labelData.mainText.trim()}"
*Second Line:* "${labelData.secondLine.trim() || 'N/A'}"
*Theme:* ${activeTheme.name}
*Template Style:* ${LABEL_TEMPLATES.find(t => t.id === labelData.template)?.name || labelData.template}
*Bottle Size:* ${quote.sizeName}
*Quantity:* ${quantity} Bottles
*Est. Rate:* ${formatPKR(quote.unitPrice)} / bottle
*Est. Total:* ${formatPKR(quote.totalPrice)}${
      quote.savings > 0 ? ` (Bulk Savings: ${formatPKR(quote.savings)})` : ''
    }

*CUSTOMER DETAILS:*
• Name: ${customerName.trim() || 'Valued Customer'}
• Contact Phone: ${customerPhone.trim() || 'Same as WhatsApp'}
• Event Date: ${eventDate || 'To be confirmed'}
• Delivery Area: ${deliveryArea}
----------------------------------------
_I would like to receive the free 2D digital mockup and confirm printing timeline._`;

    const waUrl = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  // PNG Export via HTML5 Canvas & Web Share API
  const handleExportPreview = async () => {
    setIsExporting(true);
    setExportSuccess(false);

    try {
      const svgEl = document.getElementById(`custom-bottle-canvas-${bottleSvgId}`) as SVGGraphicsElement | null;
      if (!svgEl) {
        throw new Error('SVG container not found');
      }

      const svgData = new XMLSerializer().serializeToString(svgEl);
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const URL = window.URL || window.webkitURL || window;
      const blobURL = URL.createObjectURL(svgBlob);

      const image = new Image();
      image.onload = async () => {
        const canvas = document.createElement('canvas');
        // Render at 2x crisp resolution
        const width = 800;
        const height = 1000;
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Clean soft luxury backdrop
        const grad = ctx.createLinearGradient(0, 0, 0, height);
        grad.addColorStop(0, '#F4FAFF');
        grad.addColorStop(1, '#E6F3FF');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);

        // Header watermark
        ctx.fillStyle = '#0A2A6B';
        ctx.font = 'bold 26px Montserrat, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('DECENT WATER - CUSTOM BOTTLE PREVIEW', width / 2, 60);

        ctx.fillStyle = '#0B5FD6';
        ctx.font = '16px Plus Jakarta Sans, sans-serif';
        ctx.fillText('Ahdi Plant, Tehsil Gujar Khan • WhatsApp: +92 310 7956354', width / 2, 90);

        // Draw Bottle Image
        const bottleAspect = image.width / image.height;
        const renderHeight = 720;
        const renderWidth = renderHeight * bottleAspect;
        const xOffset = (width - renderWidth) / 2;
        const yOffset = 130;
        ctx.drawImage(image, xOffset, yOffset, renderWidth, renderHeight);

        // Footer note
        ctx.fillStyle = '#64748B';
        ctx.font = '14px Plus Jakarta Sans, sans-serif';
        ctx.fillText(`Label: "${labelData.mainText}" | Size: ${selectedSize.toUpperCase()}`, width / 2, 940);

        URL.revokeObjectURL(blobURL);

        canvas.toBlob(async blob => {
          if (!blob) return;
          const fileName = `decent-water-${labelData.mainText.toLowerCase().replace(/[^a-z0-9]/g, '-') || 'custom'}.png`;
          const file = new File([blob], fileName, { type: 'image/png' });

          // Web Share API if supported (Mobile Safari & Chrome)
          if (navigator.canShare && navigator.canShare({ files: [file] })) {
            try {
              await navigator.share({
                title: 'Decent Water - Custom Label Preview',
                text: `Preview of custom labeled bottles for ${labelData.mainText}`,
                files: [file]
              });
              setExportSuccess(true);
              setIsExporting(false);
              return;
            } catch (err) {
              // User dismissed or share canceled, fall back to download
            }
          }

          // Fallback: standard file download
          const downloadLink = document.createElement('a');
          downloadLink.download = fileName;
          downloadLink.href = canvas.toDataURL('image/png');
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);

          setExportSuccess(true);
          setIsExporting(false);
        }, 'image/png');
      };
      image.src = blobURL;
    } catch (err) {
      console.error('Export failed:', err);
      setIsExporting(false);
    }
  };

  return (
    <section id="live-designer" className="py-12 sm:py-20 bg-[#F4FAFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E6F3FF] text-[#0B5FD6] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#3FB4F5]" />
            <span>Interactive Live Studio</span>
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0A2A6B] tracking-tight">
            Design Your Custom Bottle
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Type your wedding names, company logo, or restaurant brand. See the bottle update in real time with instant wholesale pricing.
          </p>
        </div>

        {/* 2-Column Desktop Grid / Sticky Mobile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* COLUMN 1: LIVE BOTTLE PREVIEW (Sticky on Mobile & Desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 z-20">
            {/* Mobile Sticky Wrapper */}
            <div className="sticky top-[60px] lg:top-0 z-20 bg-white/90 lg:bg-white backdrop-blur-md lg:backdrop-blur-none rounded-3xl border border-sky-200/70 shadow-lg p-4 sm:p-8 flex flex-col items-center">
              {/* Bottle Stage Badge */}
              <div className="w-full flex items-center justify-between pb-3 border-b border-sky-100 mb-2">
                <span className="text-[11px] font-bold text-[#0B5FD6] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Real-Time 3D Proof</span>
                </span>
                <span className="text-xs font-extrabold text-[#0A2A6B] bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
                  {selectedSize.toUpperCase()}
                </span>
              </div>

              {/* SVG Bottle Viewport (Height dynamically constrained for mobile sticky view) */}
              <div className="relative w-full h-[220px] sm:h-[340px] lg:h-[420px] flex items-center justify-center p-2">
                {selectedSize === '330ml' && (
                  <Bottle330
                    id={`custom-bottle-canvas-${bottleSvgId}`}
                    className="w-auto h-full max-h-full drop-shadow-2xl transition-all duration-300"
                    customLabel={labelData}
                  />
                )}
                {selectedSize === '500ml' && (
                  <Bottle500
                    id={`custom-bottle-canvas-${bottleSvgId}`}
                    className="w-auto h-full max-h-full drop-shadow-2xl transition-all duration-300"
                    customLabel={labelData}
                  />
                )}
                {selectedSize === '1500ml' && (
                  <Bottle1500
                    id={`custom-bottle-canvas-${bottleSvgId}`}
                    className="w-auto h-full max-h-full drop-shadow-2xl transition-all duration-300"
                    customLabel={labelData}
                  />
                )}

                {/* Soft ground reflection shadow */}
                <div className="absolute bottom-1 w-32 sm:w-44 h-3 bg-[#0A2A6B]/15 rounded-full blur-md pointer-events-none" />
              </div>

              {/* Quick Actions under Bottle: Download / Share Preview */}
              <div className="w-full pt-3 border-t border-sky-100 flex items-center justify-between gap-3 text-xs">
                <button
                  type="button"
                  onClick={handleExportPreview}
                  disabled={isExporting}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-sky-50 hover:bg-sky-100 text-[#0A2A6B] font-semibold transition-colors disabled:opacity-50 active:scale-95"
                >
                  {exportSuccess ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Ready / Shared!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 text-[#0B5FD6]" />
                      <span>{isExporting ? 'Generating PNG...' : 'Download Preview'}</span>
                    </>
                  )}
                </button>
                <span className="hidden sm:inline-block text-[11px] text-slate-400">
                  Share with family
                </span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: CONTROLS & FORM */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl border border-sky-100 shadow-sm p-6 sm:p-8 space-y-6">
              {/* CONTROL 1: OCCASION SELECT (Horizontal scroll chips) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A2A6B] mb-2.5">
                  1. Choose Your Occasion
                </label>
                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none snap-x">
                  {OCCASIONS.map(occ => {
                    const isSelected = labelData.occasion === occ.label;
                    return (
                      <button
                        key={occ.id}
                        type="button"
                        onClick={() => handleSelectOccasion(occ.id)}
                        className={`min-h-[44px] px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all snap-start active:scale-95 ${
                          isSelected
                            ? 'bg-[#0B5FD6] text-white shadow-md shadow-sky-500/25 ring-2 ring-sky-300'
                            : 'bg-sky-50/80 hover:bg-sky-100 text-[#0A2A6B] border border-sky-100'
                        }`}
                      >
                        {occ.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* CONTROL 2: MAIN TEXT (Max 24 chars) */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#0A2A6B]">
                    2. Main Title / Brand / Name
                  </label>
                  <span className="text-[11px] font-semibold text-slate-400">
                    {labelData.mainText.length} / 24
                  </span>
                </div>
                <input
                  type="text"
                  maxLength={24}
                  value={labelData.mainText}
                  onChange={e => {
                    setLabelData(prev => ({ ...prev, mainText: e.target.value }));
                    if (validationError) setValidationError(null);
                  }}
                  placeholder="e.g. Ayesha weds Hamza or Karachi Biryani"
                  className="w-full h-12 px-4 rounded-xl border border-sky-200 focus:border-[#0B5FD6] focus:ring-2 focus:ring-[#0B5FD6]/20 text-[16px] text-[#0A2A6B] font-semibold transition-all placeholder:text-slate-400"
                />
                {validationError && (
                  <p className="text-xs text-rose-600 font-medium mt-1.5 flex items-center gap-1">
                    <Info className="w-3.5 h-3.5" />
                    <span>{validationError}</span>
                  </p>
                )}
              </div>

              {/* CONTROL 3: SECOND LINE (Max 30 chars) */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#0A2A6B]">
                    3. Second Line (Date, Slogan, City)
                  </label>
                  <span className="text-[11px] font-semibold text-slate-400">
                    {labelData.secondLine.length} / 30
                  </span>
                </div>
                <input
                  type="text"
                  maxLength={30}
                  value={labelData.secondLine}
                  onChange={e =>
                    setLabelData(prev => ({ ...prev, secondLine: e.target.value }))
                  }
                  placeholder="e.g. Barat • 14 Dec 2026 or Since 1998"
                  className="w-full h-12 px-4 rounded-xl border border-sky-200 focus:border-[#0B5FD6] focus:ring-2 focus:ring-[#0B5FD6]/20 text-[16px] text-[#0A2A6B] font-semibold transition-all placeholder:text-slate-400"
                />
              </div>

              {/* CONTROL 4: THEME SWATCHES (44px circles) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A2A6B] mb-2.5">
                  4. Label Color Theme ({activeTheme.name})
                </label>
                <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
                  {(Object.keys(LABEL_THEMES) as LabelThemeId[]).map(themeId => {
                    const themeObj = LABEL_THEMES[themeId];
                    const isSelected = labelData.theme === themeId;
                    return (
                      <button
                        key={themeId}
                        type="button"
                        onClick={() => setLabelData(prev => ({ ...prev, theme: themeId }))}
                        title={themeObj.name}
                        className={`min-w-[44px] min-h-[44px] w-11 h-11 rounded-full p-0.5 transition-all flex items-center justify-center relative active:scale-95 ${
                          isSelected
                            ? 'ring-4 ring-[#0B5FD6] ring-offset-2 scale-110 shadow-md'
                            : 'hover:scale-105 border border-slate-200 opacity-90'
                        }`}
                        style={{ backgroundColor: themeObj.swatchColor }}
                      >
                        {isSelected && (
                          <div className="w-3.5 h-3.5 rounded-full bg-white shadow-sm flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-[#0B5FD6]" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* CONTROL 5: TEMPLATE STYLE (3 Segmented Buttons) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A2A6B] mb-2.5">
                  5. Typography & Template Style
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {LABEL_TEMPLATES.map(tmpl => {
                    const isSelected = labelData.template === tmpl.id;
                    return (
                      <button
                        key={tmpl.id}
                        type="button"
                        onClick={() => setLabelData(prev => ({ ...prev, template: tmpl.id }))}
                        className={`min-h-[48px] py-2.5 px-3 rounded-xl text-center text-xs font-bold transition-all border ${
                          isSelected
                            ? 'bg-[#0A2A6B] text-white border-[#0A2A6B] shadow-sm'
                            : 'bg-sky-50/70 hover:bg-sky-100 text-slate-700 border-sky-100'
                        }`}
                      >
                        <div>{tmpl.name}</div>
                        <div className="text-[10px] font-normal opacity-75 mt-0.5 truncate hidden sm:block">
                          {tmpl.description}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* CONTROL 6: BOTTLE SIZE CHIPS */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A2A6B] mb-2.5">
                  6. Bottle Size
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {BOTTLE_SIZES.map(bSize => {
                    const isSelected = selectedSize === bSize.id;
                    return (
                      <button
                        key={bSize.id}
                        type="button"
                        onClick={() => setSelectedSize(bSize.id)}
                        className={`min-h-[48px] py-2.5 px-3 rounded-xl text-center text-xs font-bold transition-all border ${
                          isSelected
                            ? 'bg-[#0B5FD6] text-white border-[#0B5FD6] shadow-sm ring-2 ring-sky-300'
                            : 'bg-sky-50/70 hover:bg-sky-100 text-[#0A2A6B] border-sky-100'
                        }`}
                      >
                        <div className="font-extrabold">{bSize.volume}</div>
                        <div className="text-[10px] opacity-80">{bSize.tagline}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* CONTROL 7: QUANTITY STEPPER (Min 100, step 50) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#0A2A6B]">
                    7. Order Quantity (Min 100 Bottles)
                  </label>
                  <span className="text-xs font-bold text-[#0B5FD6]">
                    Tier: {quote.tier.name}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleDecrement}
                    disabled={quantity <= MINIMUM_ORDER_BOTTLES}
                    className="min-w-[48px] min-h-[48px] w-12 h-12 rounded-xl bg-sky-50 hover:bg-sky-100 text-[#0A2A6B] font-bold text-lg flex items-center justify-center border border-sky-200 disabled:opacity-40 transition-colors active:scale-95"
                    aria-label="Decrease quantity by 50"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <div className="flex-1 h-12 bg-sky-50/50 rounded-xl border border-sky-200 flex items-center justify-center px-4 font-display font-black text-xl text-[#0A2A6B]">
                    {quantity.toLocaleString()} Bottles
                  </div>
                  <button
                    type="button"
                    onClick={handleIncrement}
                    className="min-w-[48px] min-h-[48px] w-12 h-12 rounded-xl bg-sky-50 hover:bg-sky-100 text-[#0A2A6B] font-bold text-lg flex items-center justify-center border border-sky-200 transition-colors active:scale-95"
                    aria-label="Increase quantity by 50"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* COLLAPSIBLE: CUSTOMER CONTACT DETAILS */}
              <div className="border border-sky-200/80 rounded-2xl overflow-hidden bg-sky-50/40">
                <button
                  type="button"
                  onClick={() => setDetailsOpen(prev => !prev)}
                  className="w-full p-4 flex items-center justify-between text-left text-xs font-bold text-[#0A2A6B] hover:bg-sky-100/50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#0B5FD6]" />
                    <span>Add Delivery & Event Details (Optional for quote)</span>
                  </div>
                  {detailsOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                {detailsOpen && (
                  <div className="p-4 pt-0 space-y-3 border-t border-sky-100 bg-white">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                          Your Full Name
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
                          <input
                            type="text"
                            value={customerName}
                            onChange={e => setCustomerName(e.target.value)}
                            placeholder="e.g. Hamza Malik"
                            className="w-full h-11 pl-9 pr-3 rounded-xl border border-sky-200 text-[16px] text-slate-800"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                          Phone / WhatsApp
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
                          <input
                            type="tel"
                            inputMode="tel"
                            value={customerPhone}
                            onChange={e => setCustomerPhone(e.target.value)}
                            placeholder="03XX XXXXXXX"
                            className="w-full h-11 pl-9 pr-3 rounded-xl border border-sky-200 text-[16px] text-slate-800"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                          Event Date
                        </label>
                        <div className="relative">
                          <Calendar className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
                          <input
                            type="date"
                            value={eventDate}
                            onChange={e => setEventDate(e.target.value)}
                            className="w-full h-11 pl-9 pr-3 rounded-xl border border-sky-200 text-[16px] text-slate-800"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                          Delivery City / Marquee
                        </label>
                        <div className="relative">
                          <MapPin className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
                          <input
                            type="text"
                            value={deliveryArea}
                            onChange={e => setDeliveryArea(e.target.value)}
                            placeholder="e.g. Gujar Khan Marquee / Mandrah"
                            className="w-full h-11 pl-9 pr-3 rounded-xl border border-sky-200 text-[16px] text-slate-800"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* LIVE PRICE ESTIMATE CARD */}
              <div className="rounded-2xl bg-gradient-to-r from-[#0A2A6B] to-[#0B5FD6] text-white p-5 shadow-lg relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs uppercase font-extrabold tracking-wider text-sky-200">
                      Estimated Production Cost
                    </span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="font-display font-black text-2xl sm:text-3xl text-white">
                        {formatPKR(quote.totalPrice)}
                      </span>
                      <span className="text-xs text-sky-200 font-semibold">
                        ({formatPKR(quote.unitPrice)} / bottle)
                      </span>
                    </div>
                    {quote.savings > 0 && (
                      <span className="inline-block text-[11px] font-extrabold text-emerald-300 bg-emerald-900/60 px-2 py-0.5 rounded-full mt-1 border border-emerald-400/30">
                        🎉 You Save {formatPKR(quote.savings)} with Bulk Tier!
                      </span>
                    )}
                  </div>

                  <div className="text-right sm:border-l sm:border-white/15 sm:pl-4">
                    <span className="text-[11px] text-sky-100 block">Includes:</span>
                    <span className="text-xs font-semibold text-white block">
                      Full Color Waterproof Labels
                    </span>
                    <span className="text-xs font-semibold text-white block">
                      RO & UV Water + Sealed Caps
                    </span>
                  </div>
                </div>

                <p className="text-[10px] text-sky-200/80 mt-3 pt-2 border-t border-white/15">
                  * Final pricing confirmed upon artwork review. Minimum order {MINIMUM_ORDER_BOTTLES} bottles.
                </p>
              </div>

              {/* LOGO NOTE */}
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50/80 border border-amber-200/70 text-xs text-amber-900">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p>
                  <strong>Want your exact company or wedding logo?</strong> Request a quote below, then simply attach your logo PNG or PDF on WhatsApp. Our design team will format it for free!
                </p>
              </div>

              {/* MAIN CTA BUTTON: REQUEST QUOTE ON WHATSAPP */}
              <button
                type="button"
                onClick={handleRequestQuote}
                className="w-full min-h-[56px] h-14 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 text-white font-display font-black text-base shadow-lg shadow-emerald-500/30 hover:opacity-95 active:scale-[0.99] transition-all flex items-center justify-center gap-2.5"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Request Quote on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
