import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import Container from '../common/Container';
import { brandConfig } from '../../data/brandConfig';

/**
 * FinalCTA.jsx
 * Bold, high-energy closing call to action featuring official wholesale packaging and direct WhatsApp order button.
 */

export default function FinalCTA() {
  const { wholesale } = brandConfig;

  return (
    <section className="py-24 lg:py-32 bg-[#073D2D] text-[#FFF3D8] relative overflow-hidden">
      
      {/* Decorative Golden Rings */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full border-[30px] border-[#F5C342]/10" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full border-[50px] border-[#F5C342]/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#F5C342]/5 blur-[120px]" />
      </div>

      <Container className="relative z-10 text-center">
        
        {/* Micro Tagline */}
        <div className="inline-flex items-center gap-2 bg-[#F5C342]/15 border border-[#F5C342]/30 text-[#F5C342] text-xs font-black tracking-[0.25em] uppercase px-5 py-2 rounded-full mb-8">
          <Sparkles size={14} />
          Small Sip, Big Change.
        </div>

        {/* Big Impact Headline */}
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-black text-[#FFF3D8] leading-[1.08] mb-6 max-w-4xl mx-auto">
          READY TO <span className="text-[#F5C342] italic">EAT YOUR</span> DRINK?
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-[#FFF3D8]/75 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
          Order your trial batch or full wholesale pack of <strong>396 cups for ₹3,999/-</strong> with pan-India free delivery.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          
          <a
            href={wholesale.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white font-black text-sm px-8 py-4 rounded-full shadow-2xl hover:bg-[#1db853] transition-all duration-300 hover:scale-105"
          >
            <MessageCircle size={20} />
            Order on WhatsApp
          </a>

          <a
            href={`tel:${wholesale.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#F5C342] text-[#092C20] font-black text-sm px-8 py-4 rounded-full shadow-2xl hover:bg-white transition-all duration-300 hover:scale-105"
          >
            <Phone size={18} />
            Call: {wholesale.phone}
          </a>

        </div>

        {/* Reassurance footer */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-[#FFF3D8]/50 uppercase tracking-widest">
          <span>✓ FSSAI Certified</span>
          <span>•</span>
          <span>✓ 100% Pure Veg</span>
          <span>•</span>
          <span>✓ Includes Delivery Pan-India</span>
        </div>

      </Container>
    </section>
  );
}
