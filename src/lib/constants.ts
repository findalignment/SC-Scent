// Brand constants
export const BRANDS = [
  'P.F. Candle Co.',
  'Dior',
  'Chanel',
  'Tom Ford',
  'Maison Margiela',
  'Byredo',
  'Le Labo',
  'Diptyque',
  'Jo Malone',
  'Hermès',
  'Other',
] as const;

// Scent family constants
export const SCENT_FAMILIES = [
  'Floral',
  'Citrus',
  'Woody',
  'Oriental',
  'Fresh',
  'Spicy',
  'Aquatic',
  'Fruity',
  'Gourmand',
  'Green',
  'Aromatic',
  'Leather',
] as const;

// Concentration types
export const CONCENTRATIONS = [
  'EDP',
  'EDT',
  'Parfum',
  'EDC',
  'Oil',
  'Other',
] as const;

// Gender options
export const GENDERS = [
  'Unisex',
  'Feminine',
  'Masculine',
] as const;

// Site configuration
export const SITE_CONFIG = {
  name: 'Santa Cruz Scent',
  tagline: 'Premium Fragrance Decants & Candles',
  description: 'Discover luxury fragrances in travel-friendly sizes. Flight-ready decants and artisan candles.',
  email: 'hello@santacruzscent.com',
  social: {
    instagram: 'https://instagram.com/santacruzscent',
  },
} as const;

// Flight rules
export const FLIGHT_RULES = {
  maxSize: '100ml',
  containerType: 'TSA-approved travel atomizer',
  requirements: [
    'Must be in containers 3.4oz (100ml) or less',
    'All containers must fit in a single quart-sized bag',
    'One bag per passenger',
    'Bag must be removed during screening',
  ],
} as const;

// Pricing tiers (example)
export const PRICING = {
  decant: {
    '5ml': 15,
    '10ml': 25,
    '15ml': 35,
  },
  shipping: {
    standard: 5,
    priority: 15,
    free_threshold: 75,
  },
} as const;
