import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { testimonials } from '../../data/testimonials';

/**
 * Testimonials Section
 * Premium customer testimonials — clearly marked as SAMPLE/DEMO content.
 */
export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[#EAE2D2]">
      <Container>
        <div className="flex flex-col items-center gap-16">
          <div className="flex flex-col items-center gap-3">
            <SectionHeading
              label="Customer Stories"
              heading="WHAT PEOPLE ARE SAYING."
              subheading="Real experiences from cafes, event managers, and CUP2EAT enthusiasts."
            />
            <span className="text-xs text-[#103D2E]/40 italic">
              * Sample testimonials for demo purposes — replace with verified customer reviews.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={t.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="bg-[#F7F3E9] rounded-3xl p-7 shadow-sm hover:shadow-lg hover:shadow-[#103D2E]/8 transition-all duration-400 border border-white flex flex-col gap-5"
              >
                {/* Stars */}
                <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-[#D9A441] text-[#D9A441]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-[#103D2E]/70 leading-relaxed italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-3 border-t border-[#EAE2D2]">
                  <div className="w-9 h-9 rounded-full bg-[#103D2E] flex items-center justify-center">
                    <span className="font-serif font-bold text-[#D9A441] text-sm">{t.avatar}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#103D2E]">{t.name}</p>
                    <p className="text-xs text-[#103D2E]/50">{t.role}</p>
                  </div>
                </div>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
