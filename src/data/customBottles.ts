/**
 * Decent Water - Custom Branded Water Bottles Data
 * Service: Personalized name/logo printed bottles for weddings, restaurants, corporates, and events
 * Location: Ahdi, Tehsil Gujar Khan, District Rawalpindi, Punjab, Pakistan
 *
 * NOTE: All prices marked with // MOCK PRICE: confirm with client
 */

export type BottleSizeId = '330ml' | '500ml' | '1500ml';
export type LabelThemeId = 'royalBlue' | 'navyGold' | 'rosePink' | 'emeraldGreen' | 'maroon' | 'classicWhite';
export type LabelTemplateId = 'elegant' | 'modern' | 'classic';
export type OccasionCategoryId = 'all' | 'weddings' | 'restaurants' | 'corporate' | 'family';

export interface CustomLabelData {
  occasion: string;
  mainText: string;
  secondLine: string;
  theme: LabelThemeId;
  template: LabelTemplateId;
  isUrdu?: boolean;
}

export interface BottleSizeOption {
  id: BottleSizeId;
  name: string;
  volume: string;
  tagline: string;
  recommendedFor: string;
  basePrice: number; // MOCK PRICE: confirm with client
}

export const BOTTLE_SIZES: BottleSizeOption[] = [
  {
    id: '330ml',
    name: '330 mL Mini Bottle',
    volume: '330 mL',
    tagline: 'Petite Event Size',
    recommendedFor: 'Mehndi, Marquees, Seminars & Wedding Tables',
    basePrice: 65 // MOCK PRICE: confirm with client
  },
  {
    id: '500ml',
    name: '500 mL Standard',
    volume: '500 mL',
    tagline: 'Most Popular Classic',
    recommendedFor: 'Cafes, Dining Tables, Corporate Goodie Bags',
    basePrice: 75 // MOCK PRICE: confirm with client
  },
  {
    id: '1500ml',
    name: '1.5 Liter Table Bottle',
    volume: '1.5 L',
    tagline: 'Family Table Serving',
    recommendedFor: 'Banquet Hall Centerpieces, VIP Tables, Dhabas',
    basePrice: 140 // MOCK PRICE: confirm with client
  }
];

export interface LabelTheme {
  id: LabelThemeId;
  name: string;
  bgGradient: [string, string];
  borderColor: string;
  textColor: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  swatchColor: string;
}

export const LABEL_THEMES: Record<LabelThemeId, LabelTheme> = {
  royalBlue: {
    id: 'royalBlue',
    name: 'Royal Blue',
    bgGradient: ['#0B5FD6', '#0A2A6B'],
    borderColor: '#7FD8FF',
    textColor: '#FFFFFF',
    accentColor: '#3FB4F5',
    badgeBg: '#3FB4F5',
    badgeText: '#0A2A6B',
    swatchColor: '#0B5FD6'
  },
  navyGold: {
    id: 'navyGold',
    name: 'Navy & Gold',
    bgGradient: ['#0A1D37', '#061327'],
    borderColor: '#E5B842',
    textColor: '#FFFFFF',
    accentColor: '#F7D674',
    badgeBg: '#E5B842',
    badgeText: '#0A1D37',
    swatchColor: '#E5B842'
  },
  rosePink: {
    id: 'rosePink',
    name: 'Rose Pink',
    bgGradient: ['#A0244C', '#6E1432'],
    borderColor: '#FDA4AF',
    textColor: '#FFFFFF',
    accentColor: '#FBCFE8',
    badgeBg: '#F472B6',
    badgeText: '#4C0519',
    swatchColor: '#DB2777'
  },
  emeraldGreen: {
    id: 'emeraldGreen',
    name: 'Emerald Green',
    bgGradient: ['#065F46', '#022C22'],
    borderColor: '#6EE7B7',
    textColor: '#FFFFFF',
    accentColor: '#A7F3D0',
    badgeBg: '#10B981',
    badgeText: '#064E3B',
    swatchColor: '#059669'
  },
  maroon: {
    id: 'maroon',
    name: 'Imperial Maroon',
    bgGradient: ['#7F1D1D', '#450A0A'],
    borderColor: '#FCA5A5',
    textColor: '#FFFFFF',
    accentColor: '#FDE047',
    badgeBg: '#F59E0B',
    badgeText: '#450A0A',
    swatchColor: '#991B1B'
  },
  classicWhite: {
    id: 'classicWhite',
    name: 'Classic White',
    bgGradient: ['#FFFFFF', '#F1F5F9'],
    borderColor: '#0B5FD6',
    textColor: '#0A2A6B',
    accentColor: '#0284C7',
    badgeBg: '#0A2A6B',
    badgeText: '#FFFFFF',
    swatchColor: '#E2E8F0'
  }
};

export interface LabelTemplateOption {
  id: LabelTemplateId;
  name: string;
  description: string;
  styleClass: string;
}

export const LABEL_TEMPLATES: LabelTemplateOption[] = [
  {
    id: 'elegant',
    name: 'Elegant Script',
    description: 'Graceful flourishes & luxury wedding typography',
    styleClass: 'font-serif italic'
  },
  {
    id: 'modern',
    name: 'Modern Sans',
    description: 'Clean bold geometry for modern cafes & businesses',
    styleClass: 'font-display font-extrabold tracking-tight'
  },
  {
    id: 'classic',
    name: 'Classic Crest',
    description: 'Double hairline borders with vintage insignia',
    styleClass: 'font-serif font-bold tracking-wide'
  }
];

export interface OccasionOption {
  id: string;
  label: string;
  category: OccasionCategoryId;
  defaultMain: string;
  defaultSecond: string;
  suggestedTheme: LabelThemeId;
  suggestedTemplate: LabelTemplateId;
}

export const OCCASIONS: OccasionOption[] = [
  {
    id: 'wedding',
    label: 'Wedding & Barat',
    category: 'weddings',
    defaultMain: 'Ayesha & Hamza',
    defaultSecond: 'Barat • 14 Dec 2026',
    suggestedTheme: 'navyGold',
    suggestedTemplate: 'elegant'
  },
  {
    id: 'mehndi',
    label: 'Mehndi Night',
    category: 'weddings',
    defaultMain: 'Zara & Ali Mehndi',
    defaultSecond: 'Celebration of Love',
    suggestedTheme: 'emeraldGreen',
    suggestedTemplate: 'elegant'
  },
  {
    id: 'restaurant',
    label: 'Restaurant / Cafe',
    category: 'restaurants',
    defaultMain: 'Karachi Biryani House',
    defaultSecond: 'Authentic Taste Since 1998',
    suggestedTheme: 'royalBlue',
    suggestedTemplate: 'modern'
  },
  {
    id: 'corporate',
    label: 'Corporate / Summit',
    category: 'corporate',
    defaultMain: 'TechVision 2026',
    defaultSecond: 'Annual Leadership Summit',
    suggestedTheme: 'classicWhite',
    suggestedTemplate: 'modern'
  },
  {
    id: 'birthday',
    label: 'Birthday / Aqiqah',
    category: 'family',
    defaultMain: 'Happy 1st Birthday Rayan',
    defaultSecond: 'Little Prince Celebration',
    suggestedTheme: 'rosePink',
    suggestedTemplate: 'elegant'
  },
  {
    id: 'sports',
    label: 'Sports / School',
    category: 'corporate',
    defaultMain: 'Gujar Khan Sports Gala',
    defaultSecond: 'Champions Championship',
    suggestedTheme: 'royalBlue',
    suggestedTemplate: 'modern'
  }
];

export interface PricingTier {
  id: string;
  name: string;
  rangeLabel: string;
  minBottles: number;
  maxBottles: number | null;
  badge?: string;
  highlighted?: boolean;
  prices: {
    '330ml': number; // MOCK PRICE: confirm with client
    '500ml': number; // MOCK PRICE: confirm with client
    '1500ml': number; // MOCK PRICE: confirm with client
  };
  features: string[];
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter Order',
    rangeLabel: '100 – 299 Bottles',
    minBottles: 100,
    maxBottles: 299,
    prices: {
      // MOCK PRICE: confirm with client
      '330ml': 65,
      // MOCK PRICE: confirm with client
      '500ml': 75,
      // MOCK PRICE: confirm with client
      '1500ml': 140
    },
    features: [
      'Full-color waterproof laminated labels',
      'Free 2D digital design mockup in 24 hrs',
      'Food-grade sealed Decent RO & UV water',
      'Delivery across Gujar Khan & Mandrah'
    ]
  },
  {
    id: 'event',
    name: 'Event Pack',
    rangeLabel: '300 – 999 Bottles',
    minBottles: 300,
    maxBottles: 999,
    badge: 'Most Popular',
    highlighted: true,
    prices: {
      // MOCK PRICE: confirm with client
      '330ml': 58,
      // MOCK PRICE: confirm with client
      '500ml': 68,
      // MOCK PRICE: confirm with client
      '1500ml': 125
    },
    features: [
      'Save up to Rs. 7 per bottle vs starter',
      'Priority printing queue (2-3 days turnaround)',
      'Free venue delivery to Gujar Khan & Rawalpindi',
      'Direct WhatsApp coordination with plant manager'
    ]
  },
  {
    id: 'bulk',
    name: 'Bulk / Business',
    rangeLabel: '1,000+ Bottles',
    minBottles: 1000,
    maxBottles: null,
    badge: 'Best Value',
    prices: {
      // MOCK PRICE: confirm with client
      '330ml': 50,
      // MOCK PRICE: confirm with client
      '500ml': 60,
      // MOCK PRICE: confirm with client
      '1500ml': 110
    },
    features: [
      'Maximum volume discount (Save Rs. 15/bottle)',
      'Scheduled recurring batches for restaurants',
      'Free sample bottle printed before batch run',
      'Corporate invoicing & tax receipts available'
    ]
  }
];

export const MINIMUM_ORDER_BOTTLES = 100; // MOCK: confirm with client

export function calculateCustomQuote(size: BottleSizeId, quantity: number) {
  let tier = PRICING_TIERS[0];
  if (quantity >= 1000) {
    tier = PRICING_TIERS[2];
  } else if (quantity >= 300) {
    tier = PRICING_TIERS[1];
  }

  const unitPrice = tier.prices[size];
  const totalPrice = unitPrice * quantity;
  const basePrice = PRICING_TIERS[0].prices[size];
  const totalBase = basePrice * quantity;
  const savings = Math.max(0, totalBase - totalPrice);

  return {
    tier,
    unitPrice,
    totalPrice,
    savings,
    sizeName: BOTTLE_SIZES.find(s => s.id === size)?.name || size
  };
}

export interface UseCaseCard {
  id: string;
  title: string;
  subtitle: string;
  useCase: string;
  imageUrl: string;
  iconName: string;
  labelTheme: LabelThemeId;
  labelTemplate: LabelTemplateId;
  bottleSize: BottleSizeId;
  sampleMain: string;
  sampleSecond: string;
}

export const USE_CASE_CARDS: UseCaseCard[] = [
  {
    id: 'weddings',
    title: 'Weddings & Mehndi',
    subtitle: 'Barat, Walima & Nikah',
    useCase: 'Elegant custom bottles on every banquet table, matching your wedding floral decor and invitation theme.',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    iconName: 'HeartHandshake',
    labelTheme: 'maroon',
    labelTemplate: 'elegant',
    bottleSize: '330ml',
    sampleMain: 'Ayesha & Hamza',
    sampleSecond: 'Barat • 14 Dec 2026'
  },
  {
    id: 'restaurants',
    title: 'Restaurants & Cafes',
    subtitle: 'Branded Table Service',
    useCase: 'Replace generic bottles with your restaurant’s own logo, menu QR code, and signature branding.',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Utensils',
    labelTheme: 'royalBlue',
    labelTemplate: 'modern',
    bottleSize: '500ml',
    sampleMain: 'Karachi Biryani',
    sampleSecond: 'Authentic Taste Since 1998'
  },
  {
    id: 'corporate',
    title: 'Corporate & Summits',
    subtitle: 'Seminars & Conferences',
    useCase: 'Keep executives and foreign guests hydrated with bottles bearing your corporate brand and sponsor badges.',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Building2',
    labelTheme: 'navyGold',
    labelTemplate: 'modern',
    bottleSize: '500ml',
    sampleMain: 'TechVision 2026',
    sampleSecond: 'Gujar Khan Leadership Summit'
  },
  {
    id: 'family',
    title: 'Birthdays & Family Events',
    subtitle: 'Aqiqah, Anniversaries & Parties',
    useCase: 'Delight guests with cheerful custom labels featuring your child’s milestone photo, name, and date.',
    imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Cake',
    labelTheme: 'rosePink',
    labelTemplate: 'elegant',
    bottleSize: '330ml',
    sampleMain: 'Happy 1st Birthday Rayan',
    sampleSecond: 'Celebration of Life'
  },
  {
    id: 'sports',
    title: 'Schools & Sports Galas',
    subtitle: 'Tournaments & Marathons',
    useCase: 'Hydrate school sports teams and athletic meets with energetic school emblems and tournament logos.',
    imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Trophy',
    labelTheme: 'emeraldGreen',
    labelTemplate: 'modern',
    bottleSize: '500ml',
    sampleMain: 'Pak Sports Gala',
    sampleSecond: 'Annual Champions Meet'
  },
  {
    id: 'commercial',
    title: 'Shops & Brand Launches',
    subtitle: 'Clinics, Gyms & Real Estate',
    useCase: 'Offer premium branded refreshments at customer service counters, dental clinics, and model apartment lounges.',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Sparkles',
    labelTheme: 'classicWhite',
    labelTemplate: 'classic',
    bottleSize: '500ml',
    sampleMain: 'Al-Madina Marquee',
    sampleSecond: 'Luxury Event Venue'
  }
];

export interface GalleryItem {
  id: string;
  category: OccasionCategoryId;
  title: string;
  size: BottleSizeId;
  labelData: CustomLabelData;
  tag: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    category: 'weddings',
    title: 'Ayesha & Hamza Wedding',
    size: '330ml',
    tag: 'Barat Table Set',
    labelData: {
      occasion: 'Wedding',
      mainText: 'Ayesha weds Hamza',
      secondLine: '14 December 2026',
      theme: 'maroon',
      template: 'elegant'
    }
  },
  {
    id: 'gal-2',
    category: 'weddings',
    title: 'Zara & Ali Mehndi Night',
    size: '330ml',
    tag: 'Mehndi Garden',
    labelData: {
      occasion: 'Mehndi',
      mainText: 'Mehndi Night',
      secondLine: 'Zara & Ali • Festive Vibez',
      theme: 'emeraldGreen',
      template: 'elegant'
    }
  },
  {
    id: 'gal-3',
    category: 'restaurants',
    title: 'Karachi Biryani House',
    size: '500ml',
    tag: 'Restaurant Table',
    labelData: {
      occasion: 'Restaurant',
      mainText: 'Karachi Biryani House',
      secondLine: 'Pure Water • Since 1998',
      theme: 'royalBlue',
      template: 'modern'
    }
  },
  {
    id: 'gal-4',
    category: 'restaurants',
    title: 'Al-Madina Marquee & Hall',
    size: '1500ml',
    tag: 'Banquet Table',
    labelData: {
      occasion: 'Banquet',
      mainText: 'Al-Madina Marquee',
      secondLine: 'Luxury Dining & Events',
      theme: 'navyGold',
      template: 'classic'
    }
  },
  {
    id: 'gal-5',
    category: 'corporate',
    title: 'TechVision Leadership Summit',
    size: '500ml',
    tag: 'Tech Summit',
    labelData: {
      occasion: 'Corporate',
      mainText: 'TechVision Seminar 2026',
      secondLine: 'Empowering Pakistan',
      theme: 'classicWhite',
      template: 'modern'
    }
  },
  {
    id: 'gal-6',
    category: 'family',
    title: 'Rayan 1st Birthday',
    size: '330ml',
    tag: 'Kids Party',
    labelData: {
      occasion: 'Birthday',
      mainText: 'Happy 1st Birthday Rayan',
      secondLine: '12 October • Love Forever',
      theme: 'rosePink',
      template: 'elegant'
    }
  },
  {
    id: 'gal-7',
    category: 'family',
    title: 'Aqiqah Mubarak Ceremony',
    size: '330ml',
    tag: 'Aqiqah',
    labelData: {
      occasion: 'Aqiqah',
      mainText: 'عقیقہ مبارک • محمد علی',
      secondLine: 'دعاؤں کا طلبگار',
      theme: 'emeraldGreen',
      template: 'classic',
      isUrdu: true
    }
  },
  {
    id: 'gal-8',
    category: 'corporate',
    title: 'Gujar Khan Sports Gala',
    size: '500ml',
    tag: 'Sports Event',
    labelData: {
      occasion: 'Sports',
      mainText: 'Pak Sports Gala',
      secondLine: 'Tehsil Gujar Khan 2026',
      theme: 'royalBlue',
      template: 'modern'
    }
  },
  {
    id: 'gal-9',
    category: 'weddings',
    title: 'Walima Banquet - Bilal & Hira',
    size: '1500ml',
    tag: 'Walima Centerpiece',
    labelData: {
      occasion: 'Walima',
      mainText: 'Bilal & Hira Walima',
      secondLine: 'Rawalpindi Marquee',
      theme: 'navyGold',
      template: 'elegant'
    }
  }
];

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  timeframe: string;
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: 1,
    title: 'Share Your Details',
    description: 'Tell us your occasion, preferred text or logo, bottle size, date, and venue location.',
    timeframe: '5 Minutes'
  },
  {
    step: 2,
    title: 'Free 24h Design Mockup',
    description: 'Our graphics team creates an accurate 3D bottle preview for your approval via WhatsApp.',
    timeframe: 'Within 24 Hours'
  },
  {
    step: 3,
    title: 'Review & Approve',
    description: 'Request revisions until your label is 100% perfect. We confirm exact batch quantities.',
    timeframe: 'Same Day'
  },
  {
    step: 4,
    title: 'Waterproof Print & Bottling',
    description: 'High-definition waterproof laminated labels are applied to fresh RO & UV purified bottles at Ahdi plant.',
    timeframe: '2 - 3 Days'
  },
  {
    step: 5,
    title: 'On-Time Venue Delivery',
    description: 'Sealed cartons delivered directly to your home, marquee, cafe, or corporate venue on time.',
    timeframe: 'Event Day'
  }
];

export const CUSTOM_FAQS = [
  {
    question: 'What is the minimum order quantity for custom bottles?',
    answer: 'Our minimum order quantity is 100 bottles per custom label design. You can choose 330 mL mini event bottles, 500 mL standard bottles, or 1.5 L banquet table bottles.'
  },
  {
    question: 'How long does printing and delivery take?',
    answer: 'We provide a free digital label mockup within 24 hours of receiving your details. Once you approve the artwork, your batch is printed, labeled, fresh-filled, and delivered in 3 to 5 working days. Rush orders can often be accommodated on request.'
  },
  {
    question: 'Can I print my own business logo or wedding motif?',
    answer: 'Yes! Send your PNG, JPG, PDF, or vector logo to our WhatsApp (+92 310 7956354) after submitting your request. We will integrate it with crisp resolution onto your label design.'
  },
  {
    question: 'Can I print labels in Urdu text or Islamic calligraphy?',
    answer: 'Absolutely! We fully support Urdu calligraphy (Nastaliq script) for Nikah, Mehndi, Aqiqah, and Quran Khwani events, including Arabic Bismillah and personalized prayers.'
  },
  {
    question: 'Which bottle sizes are available for custom labeling?',
    answer: 'We offer three dedicated sizes: 330 mL (petite, perfect for wedding guest tables and seminar handouts), 500 mL (our standard personal bottle for dining and restaurants), and 1.5 Liter (large centerpiece bottles for VIP tables and cafes).'
  },
  {
    question: 'Do you deliver to marquees outside Gujar Khan?',
    answer: 'Yes, our dispatch van delivers to marquees, banquet halls, and venues across Ahdi, Gujar Khan City, Mandrah, Sohawa, Jhelum, Rawalpindi Cantt, and Islamabad.'
  },
  {
    question: 'What is the payment terms and advance policy?',
    answer: 'We require a 50% advance upon approving the digital artwork proof to initiate custom label printing. The remaining 50% balance is settled upon cash-on-delivery or bank transfer at your venue.'
  },
  {
    question: 'Can I see a proof of the label before it goes to print?',
    answer: 'Yes! Nothing goes to print without your 100% written approval on WhatsApp. You receive a full 3D bottle preview and flat label template to inspect every spelling, date, and color shade.'
  }
];

export const CUSTOM_TESTIMONIALS = [
  // PLACEHOLDER REVIEWS: representative of Pakistani wedding, restaurant, and corporate clients
  {
    id: 'rev-1',
    name: 'Chaudhry Naveed Akhtar',
    role: 'Father of the Groom',
    occasion: 'Barat Banquet (600 bottles)',
    city: 'Gujar Khan Marquee',
    initials: 'CN',
    rating: 5,
    comment:
      'We ordered 600 bottles of 330 mL with our son Hamza’s wedding monogram in navy and gold. Every single guest complimented the table presentation. Bottles arrived cold and sealed directly at the marquee!'
  },
  {
    id: 'rev-2',
    name: 'Chef Tariq Mehmood',
    role: 'Owner, Royal Shinwari & BBQ',
    occasion: 'Weekly Cafe Supply (1,500 bottles)',
    city: 'GT Road Gujar Khan',
    initials: 'TM',
    rating: 5,
    comment:
      'Decent Water prints our restaurant logo and QR code menu on every 500 mL bottle. The print is completely waterproof with zero ink smudging in our ice chillers. Elevated our restaurant brand immediately.'
  },
  {
    id: 'rev-3',
    name: 'Syeda Maryam Zahra',
    role: 'Event Director, Punjab Youth Summit',
    occasion: 'Corporate Conference (450 bottles)',
    city: 'Rawalpindi',
    initials: 'SM',
    rating: 5,
    comment:
      'Decent Water delivered 450 conference bottles within 72 hours of approval. The team was responsive on WhatsApp, proofing the summit logo accurately. Outstanding local service.'
  }
];
