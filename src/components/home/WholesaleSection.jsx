import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Truck, ShieldCheck, Check, Sparkles, Building2 } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { brandConfig } from '../../data/brandConfig';

/**
 * WholesaleSection.jsx
 * Dedicated B2B & Wholesale section featuring real offer from the reference poster:
 * - ₹3,999/- for 396 Cups (~₹10/cup)
 * - Free Delivery All Over India 🇮🇳
 * - Official contact: 9818192575
 * - Direct WhatsApp and phone order triggers
 */

export default function WholesaleSection() {
  const { wholesale, perfectFor } = brandConfig;

  return (
    <section id="wholesale" className="py-24 lg:py-32 bg-[#092C20] relative overflow-hidden">
      
      {/* Background glow & decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#F5C342]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#B98246]/15 rounded-full blur-[120px]" />
      </div>

      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <SectionHeading
            label="Special Wholesale Deal"
            heading="GOOD TASTE. SMARTER SERVING."
            subheading="Bring the revolutionary edible cup experience to your café, restaurant, catering or special event with our official wholesale pack."
            light
          />
        </div>

        {/* Main Wholesale Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* LEFT: Official Poster Visual (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 bg-[#073D2D] border-2 border-[#F5C342]/40 rounded-3xl p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden group"
          >
            {/* Corner Badge */}
            <div className="absolute top-4 right-4 z-10 bg-[#F5C342] text-[#092C20] font-black text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md">
              Official Offer
            </div>

            {/* Poster Snapshot */}
            <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[3/4] bg-[#382316]/50">
              <img
                src={wholesale.posterImage}
                alt="CUP2EAT Wholesale Offer — Rs 3,999 for 396 Cups"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#073D2D] via-transparent to-transparent opacity-60" />
            </div>

            {/* Direct caption */}
            <div className="flex items-center justify-between pt-2 border-t border-[#F5C342]/20 text-xs text-[#FFF3D8]/70">
              <span>Authentic Brand Poster</span>
              <span className="text-[#F5C342] font-semibold">Available Pan-India</span>
            </div>
          </motion.div>

          {/* RIGHT: Offer Details, Price Breakdown & CTAs (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-[#FFF3D8] text-[#073D2D] rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative border-4 border-[#F5C342]"
          >
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#073D2D] text-[#F5C342] px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-6">
                <Sparkles size={14} />
                {wholesale.badge}
              </div>

              {/* Huge Price Callout */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-6 mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-5xl sm:text-6xl font-black text-[#073D2D] tracking-tight">
                    {wholesale.price}
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-[#8A5128]">
                    for {wholesale.quantity} {wholesale.unit}
                  </span>
                </div>
              </div>

              {/* Breakdown Metric Pill */}
              <div className="inline-block bg-[#073D2D]/10 border border-[#073D2D]/20 px-4 py-2 rounded-xl mb-8">
                <span className="text-sm font-bold text-[#073D2D]">
                  ⚡ Unit Economics: <strong className="text-[#8A5128] underline">{wholesale.pricePerCup}</strong> only!
                </span>
              </div>

              {/* Value Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { text: 'Includes Delivery All Over India 🇮🇳', strong: true },
                  { text: 'Choice of Chocolate, Vanilla & Elaichi', strong: false },
                  { text: 'Holds Boiling Hot Chai & Coffee', strong: false },
                  { text: '100% Pure Veg & FSSAI Certified', strong: true },
                  { text: 'Zero Cup Waste for Your Business', strong: false },
                  { text: 'Crunchy Edible Biscuit Experience', strong: false },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#073D2D] text-[#F5C342] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className={`text-sm ${item.strong ? 'font-bold text-[#073D2D]' : 'text-[#073D2D]/80'}`}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Action Hub */}
            <div className="pt-6 border-t border-[#073D2D]/15 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              
              {/* WhatsApp CTA */}
              <a
                href={wholesale.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white font-black text-sm px-6 py-4 rounded-full shadow-lg shadow-[#25D366]/30 hover:bg-[#1db853] transition-all duration-300 hover:scale-[1.02]"
              >
                <MessageCircle size={20} />
                Order on WhatsApp
              </a>

              {/* Call CTA with Real Number */}
              <a
                href={`tel:${wholesale.phone}`}
                className="flex-1 inline-flex items-center justify-center gap-2.5 bg-[#073D2D] text-[#FFF3D8] font-bold text-sm px-6 py-4 rounded-full shadow-lg hover:bg-[#F5C342] hover:text-[#092C20] transition-all duration-300 hover:scale-[1.02]"
              >
                <Phone size={18} />
                Call: {wholesale.phone}
              </a>
            </div>

            {/* Fine print */}
            <p className="text-[11px] text-[#073D2D]/60 italic mt-4 text-center sm:text-left">
              {wholesale.note} Orders dispatched nationwide directly from official CUP2EAT facilities.
            </p>
          </motion.div>
        </div>

        {/* Perfect For: Applications Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {perfectFor.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#073D2D]/90 border border-[#F5C342]/20 rounded-2xl p-6 text-center sm:text-left flex flex-col gap-2 hover:border-[#F5C342]/50 transition-colors"
            >
              <h3 className="font-serif text-lg font-bold text-[#F5C342]">{item.name}</h3>
              <p className="text-sm text-[#FFF3D8]/70">{item.desc}</p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
