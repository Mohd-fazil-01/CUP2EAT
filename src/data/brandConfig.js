/**
 * REAL CUP2EAT BRAND DATA
 * Extracted directly from official promotional poster and exhibition standee:
 * - Price: ₹3,999/- for 396 Cups
 * - Official Phone / WhatsApp: +91 9818192575
 * - Free Delivery: All Over India
 * - Certifications: FSSAI Certified, 100% Edible, Pure Veg, Vegan Friendly, Eco-Friendly
 */

export const brandConfig = {
  wholesale: {
    price: '₹3,999/-',
    rawPrice: 3999,
    quantity: 396,
    unit: 'Cups',
    pricePerCup: '₹10.09 per cup',
    badge: 'Limited Wholesale Offer',
    deliveryNotice: 'Includes Delivery All Over India 🇮🇳',
    phone: '9818192575',
    whatsappLink: 'https://wa.me/919818192575?text=Hello%20CUP2EAT!%20I%20want%20to%20order%20the%20Wholesale%20Pack%20(396%20Cups%20for%20Rs%203999).',
    posterImage: '/images/wholesale_poster.png',
  },

  // 4 Core Verified Standee Badges
  standeeBadges: [
    { title: '100% EDIBLE', subtitle: 'Eat the cup right after drinking', icon: 'cookie' },
    { title: 'PURE VEG', subtitle: '100% vegetarian ingredients', icon: 'leaf' },
    { title: 'VEGAN FRIENDLY', subtitle: 'Plant-based recipe formulation', icon: 'sparkles' },
    { title: 'ECO FRIENDLY', subtitle: 'Zero single-use paper/plastic cup waste', icon: 'recycle' },
  ],

  // 4 Official Poster Badges
  posterFeatures: [
    { label: 'Eco-Friendly & Biodegradable', icon: 'earth' },
    { label: 'Premium Quality', icon: 'shield-check' },
    { label: 'Best Quality', icon: 'award' },
    { label: 'Ideal for Cafes & Restaurants', icon: 'store' }
  ],

  // Serving applications from poster
  perfectFor: [
    { name: 'Hot Chai & Coffee', desc: 'Crisp biscuit texture retains warm drinks with rich aroma.', icon: 'coffee' },
    { name: 'Ice Cream & Sundaes', desc: 'Crunchy waffle/biscuit base replaces standard dessert cups.', icon: 'ice-cream' },
    { name: 'Desserts & Mousse', desc: 'Gourmet edible serving vessels for catering and celebrations.', icon: 'cake' }
  ]
};
