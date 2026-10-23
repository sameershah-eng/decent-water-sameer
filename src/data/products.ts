/**
 * Decent Water Product Lineup & Pricing
 * Brand: Decent Water (Ahdi, Tehsil Gujar Khan, District Rawalpindi, Pakistan)
 * Phone / WhatsApp: 0310 7956354 / 0345 4873545
 * Owner: Sameer Afzal
 */

export type ProductCategory = 'all' | 'bottles' | 'cartons' | 'family' | 'large' | 'plans';

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'bottles' | 'cartons' | 'family' | 'large' | 'plans';
  size: string;
  unitsPerPack: number;
  price: number; // MOCK PRICE: confirm with client
  salePrice?: number; // MOCK PRICE: confirm with client
  badge?: string;
  shortDescription: string;
  features: [string, string, string];
  bottleType: 'bottle500' | 'bottle1500' | 'familyPack' | 'bottle12L' | 'bottle19L' | 'carton';
  inStock: boolean;
  rating: number; // MOCK RATING
  perBottlePrice?: number;
}

export const PRODUCTS: Product[] = [
  {
    id: 'dw-500ml-single',
    name: '500 mL Bottle (Single)',
    slug: '500ml-bottle-single',
    category: 'bottles',
    size: '500 mL',
    unitsPerPack: 1,
    // MOCK PRICE: confirm with client
    price: 50,
    shortDescription: 'Convenient pocket & commute size. Pure crystal clear drinking water on the move.',
    features: [
      'Ergonomic ribbed grip bottle',
      'Tamper-evident royal blue safety cap',
      'Multi-stage RO & UV treated'
    ],
    bottleType: 'bottle500',
    inStock: true,
    rating: 4.8
  },
  {
    id: 'dw-500ml-carton',
    name: '500 mL Carton (24 Bottles)',
    slug: '500ml-carton-24',
    category: 'cartons',
    size: '24 × 500 mL',
    unitsPerPack: 24,
    // MOCK PRICE: confirm with client
    price: 1200,
    // MOCK PRICE: confirm with client
    salePrice: 1050,
    badge: 'Save Rs. 150',
    perBottlePrice: 44,
    shortDescription: 'Bulk carton of 24 handy bottles. Ideal for guest hosting, schools, retail shops & travel.',
    features: [
      'Heavy-duty protective master carton',
      'Economical Rs. 44 per bottle rate',
      'Free doorstep delivery eligible'
    ],
    bottleType: 'carton',
    inStock: true,
    rating: 4.9
  },
  {
    id: 'dw-1500ml-single',
    name: '1.5 Liter Bottle (Single)',
    slug: '1500ml-bottle-single',
    category: 'bottles',
    size: '1.5 Liter',
    unitsPerPack: 1,
    // MOCK PRICE: confirm with client
    price: 110,
    shortDescription: 'Our flagship dining & daily hydration bottle as featured on our campaign flyers.',
    features: [
      'Optimal dining table & workout size',
      'Essential natural minerals retained',
      'Bottled fresh at Ahdi plant'
    ],
    bottleType: 'bottle1500',
    inStock: true,
    rating: 4.9
  },
  {
    id: 'dw-1500ml-carton',
    name: '1.5 Liter Carton (6 Bottles)',
    slug: '1500ml-carton-6',
    category: 'cartons',
    size: '6 × 1.5 Liter',
    unitsPerPack: 6,
    // MOCK PRICE: confirm with client
    price: 660,
    // MOCK PRICE: confirm with client
    salePrice: 600,
    badge: 'Best Seller',
    perBottlePrice: 100,
    shortDescription: 'Weekly household dining supply. Sealed multi-bottle box with handle straps.',
    features: [
      'Save Rs. 60 compared to retail single',
      'Convenient 6-pack dining carton',
      'Safe shrink seal protection'
    ],
    bottleType: 'carton',
    inStock: true,
    rating: 4.9
  },
  {
    id: 'dw-family-pack',
    name: 'Family Pack (12 × 500 mL)',
    slug: 'family-pack-12x500ml',
    category: 'family',
    size: '12 × 500 mL',
    unitsPerPack: 12,
    // MOCK PRICE: confirm with client
    price: 600,
    // MOCK PRICE: confirm with client
    salePrice: 540,
    badge: 'Family Favourite',
    perBottlePrice: 45,
    shortDescription: 'Heavy-gauge shrink-wrapped bundle of 12 x 500 mL bottles. Easy to carry and store.',
    features: [
      'Transparent thermo-shrink wrap',
      'Great for picnics, kids & family cars',
      'Rs. 45 / bottle bundle savings'
    ],
    bottleType: 'familyPack',
    inStock: true,
    rating: 4.8
  },
  {
    id: 'dw-12l-handle',
    name: '12 Liter Bottle with Handle',
    slug: '12l-bottle-handle',
    category: 'large',
    size: '12 Liter',
    unitsPerPack: 1,
    // MOCK PRICE: confirm with client
    price: 280,
    // MOCK PRICE: confirm with client
    salePrice: 250,
    badge: 'Easy Carry',
    shortDescription: 'Medium capacity sturdy bottle equipped with an integrated molded carrying handle.',
    features: [
      'Integrated heavy-duty carry handle',
      'Fits standard tabletop dispensers',
      'Refillable food-grade PET vessel'
    ],
    bottleType: 'bottle12L',
    inStock: true,
    rating: 4.7
  },
  {
    id: 'dw-19l-refill',
    name: '19 Liter Dispenser Refill',
    slug: '19l-dispenser-refill',
    category: 'large',
    size: '19 Liter',
    unitsPerPack: 1,
    // MOCK PRICE: confirm with client
    price: 250,
    badge: 'Most Popular for Homes',
    shortDescription: 'Standard 19-Liter blue dispenser bottle refill for water dispensers and pumps.',
    features: [
      'Direct doorstep swap in Gujar Khan',
      'Sanitized and pressure-washed bottle',
      'Leak-proof hygienic peel seal cap'
    ],
    bottleType: 'bottle19L',
    inStock: true,
    rating: 4.9
  },
  {
    id: 'dw-19l-new-bottle',
    name: '19 L New Bottle (incl. Deposit)',
    slug: '19l-new-bottle-with-deposit',
    category: 'large',
    size: '19 Liter',
    unitsPerPack: 1,
    // MOCK PRICE: confirm with client
    price: 1250,
    badge: 'First-Time Setup',
    shortDescription: 'Brand new 19L food-grade polycarbonate bottle full of pure water (includes Rs. 1,000 refundable deposit).',
    features: [
      'Rs. 1,000 refundable bottle deposit included',
      'BPA-free premium durable construction',
      'Ready to fit any hot & cold dispenser'
    ],
    bottleType: 'bottle19L',
    inStock: true,
    rating: 4.8
  },
  {
    id: 'dw-monthly-home-plan',
    name: 'Monthly Home Hydration Plan',
    slug: 'monthly-home-hydration-plan',
    category: 'plans',
    size: '4 × 19 L Refills',
    unitsPerPack: 4,
    // MOCK PRICE: confirm with client
    price: 1000,
    // MOCK PRICE: confirm with client
    salePrice: 900,
    badge: 'Save 10%',
    shortDescription: '1 refill delivered every week on your preferred schedule. Never run out of pure drinking water.',
    features: [
      'Scheduled weekly delivery day',
      'Priority delivery dispatch',
      'Save Rs. 100 every single month'
    ],
    bottleType: 'bottle19L',
    inStock: true,
    rating: 4.9
  },
  {
    id: 'dw-monthly-office-plan',
    name: 'Monthly Corporate Office Plan',
    slug: 'monthly-corporate-office-plan',
    category: 'plans',
    size: '12 × 19 L Refills',
    unitsPerPack: 12,
    // MOCK PRICE: confirm with client
    price: 3000,
    // MOCK PRICE: confirm with client
    salePrice: 2640,
    badge: 'Best Value',
    shortDescription: 'High-volume 12-refill monthly supply for corporate teams, clinics, schools, and offices.',
    features: [
      'Multi-drop flexible delivery days',
      'Dedicated delivery driver contact',
      'Includes monthly VAT invoice support'
    ],
    bottleType: 'bottle19L',
    inStock: true,
    rating: 4.9
  }
];

export const BUSINESS_INFO = {
  brand: 'Decent Water',
  tagline: 'Refresh Your Day Naturally',
  subTagline: 'Pure Hydration for Every Need',
  owner: 'Sameer Afzal',
  phone1: '0310 7956354',
  phone2: '0345 4873545',
  phone1Intl: '+923107956354',
  phone2Intl: '+923454873545',
  whatsappRaw: '923107956354',
  address: 'Ahdi, Tehsil Gujar Khan, District Rawalpindi, Punjab, Pakistan',
  owners: [
    { name: 'Ch Shoaib Zakir', phone: '+92 345 4873545', tel: '+923454873545' },
    { name: 'Sameer Afzal', phone: '+92 333 5728466', tel: '+923335728466' }
  ],
  areas: ['Ahdi', 'Gujar Khan City', 'Mandrah', 'Sohawa', 'Rawalpindi Cantt & City', 'GT Road Belt'],
  freeDeliveryThreshold: 1500, // Rs.
  standardDeliveryFee: 100 // Rs.
};

export function formatPKR(amount: number): string {
  return `Rs. ${amount.toLocaleString('en-PK')}`;
}
