import React from 'react';
import Hero from '../components/home/Hero';
import ScrollCupExperience from '../components/home/ScrollCupExperience';
import WholesaleSection from '../components/home/WholesaleSection';
import ProductShowcase from '../components/home/ProductShowcase';
import HowItWorks from '../components/home/HowItWorks';
import BrandBenefits from '../components/home/BrandBenefits';
import InstagramGallery from '../components/home/InstagramGallery';
import BulkOrders from '../components/home/BulkOrders';
import FinalCTA from '../components/home/FinalCTA';

/**
 * Home.jsx
 * Assembles all sections in sequence for the CUP2EAT Brand Experience
 */

export default function Home() {
  return (
    <main>
      {/* 1. Cinematic Hero with Eat Your Drink! branding */}
      <Hero />

      {/* 2. Interactive Scroll-Driven Chai Filling Experience */}
      <ScrollCupExperience />

      {/* 3. Official Wholesale Deal (₹3,999/- for 396 Cups + Free Pan-India Delivery) */}
      <WholesaleSection />

      {/* 4. Real 4-Flavour Product Lineup (Chocolate, Vanilla, Elaichi, Choco-Dipped) */}
      <ProductShowcase />

      {/* 5. 3-Step POUR - SIP - EAT Ritual */}
      <HowItWorks />

      {/* 6. Authentic Standee & Poster Verified Benefits (FSSAI, Pure Veg, Eco-Friendly) */}
      <BrandBenefits />

      {/* 7. Official Event & Exhibition Journey + Instagram Gallery */}
      <InstagramGallery />

      {/* 8. Direct Contact & Bulk Enquiry Hub (+91 9818192575) */}
      <BulkOrders />

      {/* 9. Final High-Impact Call to Action */}
      <FinalCTA />
    </main>
  );
}
