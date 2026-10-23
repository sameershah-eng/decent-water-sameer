# Decent Water — Production Marketing & Ordering Website

A high-performance, mobile-first brand and ordering website for **Decent Water**, manufactured and bottled at Ahdi, Tehsil Gujar Khan, District Rawalpindi, Punjab, Pakistan.

---

## 💧 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run local development server (port 3000)
npm run dev

# 3. Compile & production build test
npm run build
```

---

## 📋 How to Update Prices & Phone Numbers

All products, prices, discount badges, and plant contact numbers are located in **one central file**:
👉 `src/data/products.ts`

### 1. Changing Prices
Inside `src/data/products.ts`, each product contains comments clearly indicating where to modify prices:
```typescript
{
  id: 'dw-500ml-single',
  name: '500 mL Bottle (Single)',
  price: 50,       // MOCK PRICE: update regular price here
  salePrice: 45,   // Optional: set promotional sale price
  badge: 'Best Seller'
}
```

### 2. Changing Phone Numbers & Delivery Fees
At the bottom of `src/data/products.ts`, update `BUSINESS_INFO`:
```typescript
export const BUSINESS_INFO = {
  brand: 'Decent Water',
  owner: 'Sameer Afzaal',
  phone1: '0310 7956354',
  phone2: '0345 4873545',
  phone1Intl: '+923107956354',
  phone2Intl: '+923454873545',
  whatsappRaw: '923107956354',
  address: 'Ahdi, Tehsil Gujar Khan, District Rawalpindi, Punjab, Pakistan',
  freeDeliveryThreshold: 1500, // PKR
  standardDeliveryFee: 100     // PKR
};
```

---

## 🏷️ How to Configure Custom Branded Bottles

All personalized bottle services, tiers, themes, and templates are in:
👉 `src/data/customBottles.ts`

### 1. Changing Custom Bottle Pricing Tiers
Inside `src/data/customBottles.ts`, find `PRICING_TIERS`:
```typescript
export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter Order',
    rangeLabel: '100 – 299 Bottles',
    prices: {
      '330ml': 65,  // // MOCK PRICE: confirm with client
      '500ml': 75,  // // MOCK PRICE: confirm with client
      '1500ml': 140 // // MOCK PRICE: confirm with client
    }
  },
  {
    id: 'event',
    name: 'Event Pack',
    rangeLabel: '300 – 999 Bottles',
    badge: 'Most Popular',
    prices: {
      '330ml': 58,
      '500ml': 68,
      '1500ml': 125
    }
  },
  {
    id: 'bulk',
    name: 'Bulk / Business',
    rangeLabel: '1,000+ Bottles',
    badge: 'Best Value',
    prices: {
      '330ml': 50,
      '500ml': 60,
      '1500ml': 110
    }
  }
];
```

### 2. Changing Minimum Order Quantity
Modify `MINIMUM_ORDER_BOTTLES` in `src/data/customBottles.ts`:
```typescript
export const MINIMUM_ORDER_BOTTLES = 100; // MOCK: confirm with client
```

### 3. Adding or Customizing Label Themes
Modify or add themes in `LABEL_THEMES`:
```typescript
export const LABEL_THEMES: Record<LabelThemeId, LabelTheme> = {
  royalBlue: { ... },
  navyGold: { ... },
  rosePink: { ... },
  emeraldGreen: { ... },
  maroon: { ... },
  classicWhite: { ... }
};
```

---

## 🚀 How to Deploy on Vercel

1. Push the repository to GitHub.
2. In your Vercel Dashboard, click **Add New Project** and import the repository.
3. Framework Preset: **Vite**
4. Root Directory: `./`
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

> Note: The included `vercel.json` already contains SPA rewrites (`"rewrites": [{ "source": "/(.*)", "destination": "/" }]`) ensuring client-side routes (`/products`, `/about`, `/contact`) work on hard refresh.

---

## 🎨 Visual Identity & Assets

- **Colors**: Deep Navy (`#0A2A6B`), Royal Blue (`#0B5FD6`), Sky Aqua (`#3FB4F5` & `#7FD8FF`), Ice White (`#F4FAFF`).
- **Product Assets**: Pure React SVG vector components in `src/components/bottles/` guarantee crisp rendering across all screen densities without broken external image links.
- **Client Flyers**: Saved in `/public/images/` and showcased in the interactive Campaign Gallery with click-to-zoom Lightbox.
- **WhatsApp Checkout**: Builds an itemized, friendly WhatsApp order message directly to `wa.me/923107956354`.
