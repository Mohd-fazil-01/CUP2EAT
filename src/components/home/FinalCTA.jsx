import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';

/**
 * FinalCTA Section
 * Full-bleed closing call-to-action section.
 */
export default function FinalCTA() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="contact" className="relative py-28 lg:py-40 bg-[#103D2E] overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=50"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[#103D2E]/85" />

      {/* Decorative shapes */}
      <motion.div
        initial={{ rotate: -15, opacity: 0 }}
        whileInView={{ rotate: 0, opacity: 0.07 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute -left-20 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full border-[50px] border-[#D9A441]"
      />
      <motion.div
        initial={{ rotate: 15, opacity: 0 }}
        whileInView={{ rotate: 0, opacity: 0.07 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-[60px] border-[#D9A441]"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-8">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-black tracking-[0.3em] text-[#D9A441] uppercase"
        >
          Ready to try it?
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#F7F3E9] leading-tight text-balance"
        >
          READY TO{' '}
          <span className="text-[#D9A441] italic">EAT YOUR</span>{' '}
          DRINK?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#EAE2D2]/75 text-lg sm:text-xl max-w-xl leading-relaxed"
        >
          Experience something different with CUP2EAT.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button
            variant="golden"
            onClick={() => scrollTo('#products')}
          >
            Explore Products
            <ArrowRight size={16} />
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollTo('#bulk-orders')}
          >
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
