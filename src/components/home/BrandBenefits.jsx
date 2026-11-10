import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Leaf, Recycle, Store, HeartHandshake } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { brandConfig } from '../../data/brandConfig';

/**
 * BrandBenefits.jsx
 * Authentic benefits extracted straight from the CUP2EAT exhibition standee and poster:
 * - 100% Edible
 * - Pure Veg (Green Dot)
 * - Vegan Friendly
 * - Eco-Friendly & Biodegradable
 * - Premium Quality & Best Quality Seals
 * - Ideal for Cafes & Restaurants
 */

export default function BrandBenefits() {
  const { standeeBadges, posterFeatures } = brandConfig;

  return (
    <section id="benefits" className="py-24 bg-[#FFF3D8] text-[#073D2D]">
      <Container>
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16">
          <SectionHeading
            label="Verified Standards"
            heading="WHY CAFES & GUESTS LOVE CUP2EAT"
            subheading="Authentic credentials and quality badges verified directly on our official production banners and packaging."
          />
        </div>

        {/* 4 Core Standee Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {standeeBadges.map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border-2 border-[#B98246]/25 rounded-3xl p-7 text-center flex flex-col items-center shadow-lg hover:border-[#F5C342] hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#073D2D] text-[#F5C342] flex items-center justify-center mb-5 shadow-md">
                {idx === 0 && <span className="text-2xl">🍪</span>}
                {idx === 1 && <Leaf size={28} className="text-[#4CAF50]" />}
                {idx === 2 && <span className="text-2xl">🌱</span>}
                {idx === 3 && <Recycle size={28} className="text-[#F5C342]" />}
              </div>
              <h3 className="font-serif text-xl font-black text-[#073D2D] mb-2">{badge.title}</h3>
              <p className="text-sm text-[#073D2D]/70">{badge.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Poster Trust Strip */}
        <div className="bg-[#073D2D] text-[#FFF3D8] rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F5C342] text-[#092C20] flex items-center justify-center shrink-0">
                <Recycle size={24} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#F5C342] uppercase tracking-wider">Eco-Friendly</h4>
                <p className="text-xs text-[#FFF3D8]/70">Zero plastic/wax cup waste</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F5C342] text-[#092C20] flex items-center justify-center shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#F5C342] uppercase tracking-wider">FSSAI Certified</h4>
                <p className="text-xs text-[#FFF3D8]/70">Govt. compliant edible standard</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F5C342] text-[#092C20] flex items-center justify-center shrink-0">
                <Award size={24} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#F5C342] uppercase tracking-wider">Best Quality</h4>
                <p className="text-xs text-[#FFF3D8]/70">Stays crisp &amp; hot for 30+ mins</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F5C342] text-[#092C20] flex items-center justify-center shrink-0">
                <Store size={24} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#F5C342] uppercase tracking-wider">Cafes &amp; Events</h4>
                <p className="text-xs text-[#FFF3D8]/70">Viral conversation starter</p>
              </div>
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
}
