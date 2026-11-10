import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { products } from '../../data/products';
import { brandConfig } from '../../data/brandConfig';

/**
 * ProductShowcase.jsx
 * Showcases the authentic 4 flavours seen on the official CUP2EAT materials:
 * 1. Chocolate Dipped (Signature)
 * 2. Chocolate
 * 3. Vanilla
 * 4. Elaichi (Cardamom)
 */

export default function ProductShowcase() {
  const { wholesale } = brandConfig;

  return (
    <section id="products" className="py-24 lg:py-32 bg-[#073D2D] text-[#FFF3D8] relative">
      <Container>
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <SectionHeading
            label="Our Flavour Collection"
            heading="DELICIOUS CUPS FOR EVERY SIP & BITE"
            subheading="Available in three signature core flavours plus gourmet specialty chocolate-dipped rims for cafes and catering."
            light
          />
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#092C20] border border-[#F5C342]/25 rounded-3xl p-6 flex flex-col justify-between hover:border-[#F5C342] hover:shadow-2xl hover:shadow-[#F5C342]/10 transition-all duration-300 group"
            >
              <div>
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest bg-[#F5C342] text-[#092C20] px-3 py-1 rounded-full">
                    {p.badge}
                  </span>
                  <span className="text-xs font-mono text-[#F5C342] font-semibold">{p.capacity}</span>
                </div>

                {/* Cup Thumbnail Area */}
                <div className="relative rounded-2xl overflow-hidden aspect-square mb-6 bg-[#073D2D] border border-[#F5C342]/10 flex items-center justify-center p-4">
                  <div className="w-24 h-32 rounded-b-2xl border-2 border-[#B98246] flex flex-col items-center justify-center relative shadow-inner overflow-hidden"
                       style={{ backgroundColor: p.accentColor }}>
                    {/* Chocolate dipped rim simulation */}
                    {p.id === 'chocolate-dipped' && (
                      <div className="absolute top-0 left-0 right-0 h-6 bg-[#261107] border-b-2 border-[#1A0A04] shadow-md" />
                    )}
                    <span className="font-serif font-black text-xs text-[#FFF3D8] tracking-widest z-10">C2E</span>
                    <span className="text-[9px] text-[#F5C342] font-bold uppercase mt-1 z-10">{p.flavor}</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-serif text-xl font-bold text-[#FFF3D8] group-hover:text-[#F5C342] transition-colors mb-1">
                  {p.name}
                </h3>
                <p className="text-xs font-semibold text-[#F5C342] uppercase tracking-wider mb-3">
                  {p.tagline}
                </p>

                {/* Description */}
                <p className="text-xs text-[#FFF3D8]/70 leading-relaxed mb-4">
                  {p.shortDescription}
                </p>

                {/* Bullet highlights */}
                <ul className="space-y-1.5 mb-6 text-[11px] text-[#FFF3D8]/80">
                  {p.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F5C342]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Order / Enquire CTA */}
              <div className="pt-4 border-t border-[#F5C342]/15">
                <a
                  href={wholesale.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#F5C342] text-[#092C20] font-bold text-xs py-3 rounded-full hover:bg-[#FFF3D8] transition-colors shadow-md"
                >
                  <MessageCircle size={14} />
                  Enquire Wholesale
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner linking to Wholesale Deal */}
        <div className="bg-gradient-to-r from-[#B98246]/30 via-[#F5C342]/20 to-[#B98246]/30 border border-[#F5C342]/40 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-2xl font-bold text-[#F5C342] mb-1">
              Want all flavours in bulk for your outlet?
            </h4>
            <p className="text-sm text-[#FFF3D8]/80">
              Get the official Wholesale Box: <strong className="text-white">396 Cups for only ₹3,999/-</strong> with pan-India delivery!
            </p>
          </div>
          <a
            href="#wholesale"
            className="inline-flex items-center gap-2 bg-[#F5C342] text-[#092C20] font-black text-sm px-6 py-3.5 rounded-full hover:bg-white transition-all duration-300 shrink-0"
          >
            <span>View Wholesale Deal</span>
            <ArrowRight size={16} />
          </a>
        </div>

      </Container>
    </section>
  );
}
