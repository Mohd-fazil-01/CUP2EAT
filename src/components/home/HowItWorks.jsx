import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

/**
 * HowItWorks.jsx
 * 01 POUR - 02 SIP - 03 EAT
 * Authentic 3-step ritual shown on CUP2EAT promotional displays
 */

const steps = [
  {
    step: '01',
    action: 'POUR',
    title: 'Pour Your Favourite Drink',
    description: 'Fill the edible cup with piping hot kadak chai, rich espresso, cappuccino, or cold ice cream and shakes.',
    visualEmoji: '🫖',
    sub: 'Holds warm and cold drinks effortlessly',
  },
  {
    step: '02',
    action: 'SIP',
    title: 'Enjoy The Pure Beverage',
    description: 'Savour the aroma and warmth without any plastic taint or soggy paper aftertaste. Cup retains heat and crispness.',
    visualEmoji: '☕',
    sub: 'Crisp biscuit holds for 30+ minutes',
  },
  {
    step: '03',
    action: 'EAT',
    title: 'Eat The Delicious Cup!',
    description: 'Finish your drink and crunch directly into the baked vanilla, chocolate, or cardamom cup. Zero trash left behind!',
    visualEmoji: '🍪',
    sub: '100% Edible • FSSAI Certified',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#FFF3D8] text-[#073D2D]">
      <Container>
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <SectionHeading
            label="The 3-Step Ritual"
            heading="EAT YOUR DRINK — HOW IT WORKS"
            subheading="From the moment you pour your chai to the final crunchy bite, it transforms everyday tea-time into an unforgettable treat."
          />
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white border-2 border-[#B98246]/20 rounded-3xl p-8 flex flex-col items-center text-center relative shadow-lg hover:border-[#F5C342] hover:shadow-2xl transition-all duration-300"
            >
              {/* Step Number Tag */}
              <div className="w-14 h-14 rounded-full bg-[#073D2D] text-[#F5C342] font-black text-lg flex items-center justify-center mb-6 shadow-md border-2 border-[#F5C342]">
                {s.step}
              </div>

              {/* Action Headline */}
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#B98246] mb-1">
                STEP {s.step}
              </span>
              <h3 className="font-serif text-3xl font-black text-[#073D2D] mb-3">
                {s.action}
              </h3>

              {/* Visual Icon */}
              <div className="text-4xl my-2">{s.visualEmoji}</div>

              {/* Title & Desc */}
              <h4 className="font-bold text-base text-[#073D2D] mb-2">{s.title}</h4>
              <p className="text-sm text-[#073D2D]/70 leading-relaxed mb-4">{s.description}</p>

              {/* Verification Subtext */}
              <div className="mt-auto pt-4 border-t border-[#073D2D]/10 w-full">
                <span className="text-[11px] font-semibold text-[#073D2D]/60 uppercase tracking-wider">
                  {s.sub}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}
