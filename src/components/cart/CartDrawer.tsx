import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Check, MessageSquare } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { ProductBottleView } from '../bottles/ProductBottleView';
import { BUSINESS_INFO, formatPKR } from '../../data/products';

export const CartDrawer: React.FC = () => {
  const {
    items,
    itemCount,
    subtotal,
    savings,
    deliveryFee,
    total,
    isDrawerOpen,
    closeDrawer,
    updateQuantity,
    removeFromCart,
    clearCart
  } = useCart();

  const [step, setStep] = useState<'cart' | 'checkout'>('cart');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerArea, setCustomerArea] = useState('Gujar Khan City');
  const [customerAddress, setCustomerAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'Cash on Delivery' | 'JazzCash' | 'Easypaisa' | 'Bank Transfer'>('Cash on Delivery');
  const [deliveryNotes, setDeliveryNotes] = useState('');

  if (!isDrawerOpen) return null;

  // Free delivery progress calculation
  const freeThreshold = BUSINESS_INFO.freeDeliveryThreshold; // 1500
  const remainingForFree = Math.max(0, freeThreshold - subtotal);
  const progressPercent = Math.min(100, (subtotal / freeThreshold) * 100);

  // Send WhatsApp order handler
  const handlePlaceOrderWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName.trim() || !customerPhone.trim() || !customerAddress.trim()) {
      alert('Please fill in your name, phone number, and delivery address.');
      return;
    }

    // Build formatted message
    let message = `💧 *NEW ORDER — DECENT WATER*\n`;
    message += `──────────────────\n`;
    message += `*Customer Information:*\n`;
    message += `• *Name:* ${customerName.trim()}\n`;
    message += `• *Phone:* ${customerPhone.trim()}\n`;
    message += `• *Area:* ${customerArea}\n`;
    message += `• *Address:* ${customerAddress.trim()}\n`;
    message += `• *Payment Method:* ${paymentMethod}\n`;
    if (deliveryNotes.trim()) {
      message += `• *Special Notes:* ${deliveryNotes.trim()}\n`;
    }
    message += `──────────────────\n`;
    message += `*Items Ordered:*\n`;

    items.forEach((item, index) => {
      const price = item.product.salePrice ?? item.product.price;
      const lineTotal = price * item.quantity;
      message += `${index + 1}. *${item.product.name}* (${item.product.size})\n`;
      message += `   Qty: ${item.quantity} × ${formatPKR(price)} = ${formatPKR(lineTotal)}\n`;
    });

    message += `──────────────────\n`;
    message += `• *Items Subtotal:* ${formatPKR(subtotal)}\n`;
    if (savings > 0) {
      message += `• *Total Savings:* -${formatPKR(savings)}\n`;
    }
    message += `• *Delivery Fee:* ${deliveryFee === 0 ? 'FREE' : formatPKR(deliveryFee)}\n`;
    message += `• *GRAND TOTAL:* *${formatPKR(total)}*\n`;
    message += `──────────────────\n`;
    message += `Order placed via Decent Water website. Please confirm dispatch details!`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encoded}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div
        onClick={closeDrawer}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-white h-full flex flex-col shadow-2xl z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="px-5 py-4 border-b border-sky-100 flex items-center justify-between bg-gradient-to-r from-sky-50 to-white">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#0B5FD6]/10 flex items-center justify-center text-[#0B5FD6]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-[#0A2A6B]">
                {step === 'cart' ? 'Your Hydration Bag' : 'Delivery & Checkout'}
              </h2>
              <span className="text-xs text-slate-500 font-medium">
                {itemCount} {itemCount === 1 ? 'item' : 'items'}
              </span>
            </div>
          </div>
          <button
            onClick={closeDrawer}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Delivery Bar */}
        {items.length > 0 && (
          <div className="px-5 py-3 bg-[#E0F2FE]/40 border-b border-sky-100">
            <div className="flex items-center justify-between text-xs mb-1.5 font-medium text-[#0A2A6B]">
              <span>
                {remainingForFree === 0 ? (
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> FREE Delivery unlocked!
                  </span>
                ) : (
                  <span>
                    Add <strong className="text-[#0B5FD6]">{formatPKR(remainingForFree)}</strong> more for <strong>FREE delivery</strong>
                  </span>
                )}
              </span>
              <span className="text-[11px] text-slate-500">{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full h-2 bg-sky-200/60 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#0B5FD6] to-[#3FB4F5] rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        )}

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6">
              <div className="w-20 h-20 rounded-full bg-sky-50 flex items-center justify-center mb-4 text-sky-400">
                <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#0A2A6B]">Your bag is empty</h3>
              <p className="text-sm text-slate-500 mt-1 max-w-xs">
                Add single bottles, family packs, or 19L dispenser refills to get fresh water delivered.
              </p>
              <button
                onClick={closeDrawer}
                className="mt-6 px-6 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-[#0B5FD6] to-[#3FB4F5] hover:opacity-95 shadow-md active:scale-95"
              >
                Browse Products
              </button>
            </div>
          ) : step === 'cart' ? (
            /* Items List */
            <div className="space-y-3">
              {items.map(item => {
                const currentPrice = item.product.salePrice ?? item.product.price;
                return (
                  <div
                    key={item.product.id}
                    className="p-3 rounded-2xl border border-sky-100 bg-white shadow-sm flex items-center gap-3"
                  >
                    {/* Bottle thumbnail: fixed 64x64 box, bottle at 85% height */}
                    <div className="w-16 h-16 shrink-0 bg-gradient-to-b from-[#F4FAFF] to-[#E6F3FF] rounded-2xl flex items-center justify-center p-1.5 border border-sky-100 relative overflow-hidden">
                      <div className="h-[85%] flex items-center justify-center">
                        <ProductBottleView bottleType={item.product.bottleType} />
                      </div>
                      <div className="absolute bottom-1 w-8 h-1 bg-[#0A2A6B]/10 rounded-[100%] blur-[1px] pointer-events-none" />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-[#0A2A6B] truncate">
                        {item.product.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs font-semibold text-[#0B5FD6]">
                          {formatPKR(currentPrice)}
                        </span>
                        {item.product.salePrice && (
                          <span className="text-[11px] text-slate-400 line-through">
                            {formatPKR(item.product.price)}
                          </span>
                        )}
                        <span className="text-[10px] text-slate-500">
                          ({item.product.size})
                        </span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 hover:bg-slate-200 text-slate-600 active:bg-slate-300"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2.5 text-xs font-bold text-[#0A2A6B]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 hover:bg-slate-200 text-slate-600 active:bg-slate-300"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-slate-400 hover:text-red-500 p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="pt-2 flex justify-between items-center text-xs text-slate-400">
                <button
                  onClick={clearCart}
                  className="hover:text-red-500 transition-colors"
                >
                  Clear all items
                </button>
                <span>Free delivery threshold: {formatPKR(BUSINESS_INFO.freeDeliveryThreshold)}</span>
              </div>
            </div>
          ) : (
            /* Checkout Form */
            <form id="checkout-form" onSubmit={handlePlaceOrderWhatsApp} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#0A2A6B] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Muhammad Ali"
                  value={customerName}
                  onChange={e => setCustomerName(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5FD6]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A2A6B] mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0300 1234567"
                  value={customerPhone}
                  onChange={e => setCustomerPhone(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5FD6]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A2A6B] mb-1">
                  Delivery Area / City *
                </label>
                <select
                  value={customerArea}
                  onChange={e => setCustomerArea(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5FD6] bg-white"
                >
                  {BUSINESS_INFO.areas.map(area => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                  <option value="Other Area (mention in notes)">Other Area (mention in notes)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A2A6B] mb-1">
                  Street Address / House # / Landmark *
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="House #, Street name, Near Landmark, Ahdi or Gujar Khan..."
                  value={customerAddress}
                  onChange={e => setCustomerAddress(e.target.value)}
                  className="w-full text-xs px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5FD6]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A2A6B] mb-1.5">
                  Payment Method
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {(['Cash on Delivery', 'JazzCash', 'Easypaisa', 'Bank Transfer'] as const).map(pm => (
                    <button
                      type="button"
                      key={pm}
                      onClick={() => setPaymentMethod(pm)}
                      className={`p-2 rounded-xl border text-left font-medium transition-colors ${
                        paymentMethod === pm
                          ? 'border-[#0B5FD6] bg-sky-50 text-[#0B5FD6] font-bold ring-1 ring-[#0B5FD6]'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {pm}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A2A6B] mb-1">
                  Special Delivery Instructions (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Call before delivery, 2nd floor, etc."
                  value={deliveryNotes}
                  onChange={e => setDeliveryNotes(e.target.value)}
                  className="w-full text-xs px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5FD6]"
                />
              </div>
            </form>
          )}
        </div>

        {/* Footer Summary & Action */}
        {items.length > 0 && (
          <div className="p-5 border-t border-sky-100 bg-[#F4FAFF] space-y-3">
            {/* Calculation lines */}
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-900">{formatPKR(subtotal)}</span>
              </div>
              {savings > 0 && (
                <div className="flex justify-between text-emerald-600 font-medium">
                  <span>Offers & Bundle Savings</span>
                  <span>-{formatPKR(savings)}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-600">
                <span>Delivery Fee</span>
                <span className="font-semibold">
                  {deliveryFee === 0 ? (
                    <span className="text-emerald-600 font-bold uppercase tracking-wide">FREE</span>
                  ) : (
                    formatPKR(deliveryFee)
                  )}
                </span>
              </div>
              <div className="pt-2 border-t border-slate-200 flex justify-between items-baseline text-sm font-bold text-[#0A2A6B]">
                <span>Total Amount</span>
                <span className="text-lg text-[#0B5FD6] font-display">{formatPKR(total)}</span>
              </div>
            </div>

            {/* Action Buttons */}
            {step === 'cart' ? (
              <button
                onClick={() => setStep('checkout')}
                className="w-full py-3 px-4 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#0B5FD6] via-[#2A8BEA] to-[#3FB4F5] hover:opacity-95 shadow-md flex items-center justify-center gap-2 active:scale-95 transition-all"
              >
                <span>Proceed to Delivery Info</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="space-y-2">
                <button
                  type="submit"
                  form="checkout-form"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 active:scale-95 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Place Order via WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep('cart')}
                  className="w-full py-2 text-center text-xs text-slate-500 hover:text-slate-800 transition-colors"
                >
                  Back to Bag
                </button>
              </div>
            )}

            <div className="flex items-center justify-center gap-2 text-[10.5px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Direct delivery dispatch from Ahdi Plant, Gujar Khan</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
