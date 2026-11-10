import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

/**
 * Sustainability Section
 * Impact section — no unverified environmental claims.
 */
export default function Sustainability() {
  return (
    <section id="sustainability" className="py-24 lg:py-32 bg-[#092B22] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border-[60px] border-[#103D2E] opacity-40" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full border-[40px] border-[#103D2E] opacity-30" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="rounded-[2.5rem] overflow-hidden aspect-square shadow-2xl shadow-black/40">
              <img
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=85"
                alt="Sustainability concept — placeholder image"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#103D2E]/40 to-transparent" />
            </div>
            {/* Stat overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-4 bg-[#D9A441] rounded-2xl px-6 py-5 shadow-xl"
            >
              <p className="font-serif text-2xl font-black text-[#092B22]">0 Cup Waste</p>
              <p className="text-[#092B22]/70 text-xs mt-0.5">When you eat the cup</p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <div className="flex flex-col gap-7 order-1 lg:order-2">
            <SectionHeading
              label="Sustainability"
              heading="LESS WASTE. MORE EXPERIENCE."
              align="left"
              light
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-4 text-[#EAE2D2]/70 leading-relaxed"
            >
              <p>
                Every year, billions of disposable cups are discarded worldwide.
                CUP2EAT presents an edible alternative — when you eat the cup,
                there is no cup to throw away.
              </p>
              <p>
                We believe that innovation and experience can go hand in hand.
                CUP2EAT is our contribution to rethinking single-use culture,
                one delicious cup at a time.
              </p>
              <p className="text-[10px] text-[#EAE2D2]/30 italic">
                * No specific environmental impact claims are made without verified data.
              </p>
            </motion.div>

            {/* Points */}
            <div className="flex flex-col gap-3 mt-2">
              {[
                'Edible cup = no cup to dispose of',
                'An innovative alternative to conventional disposable cups',
                'Suitable for cafes, events, and hospitality venues',
                'A unique concept that naturally reduces cup waste',
              ].map((point, i) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-5 h-5 rounded-full bg-[#D9A441]/20 border border-[#D9A441]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9A441]" />
                  </span>
                  <span className="text-sm text-[#EAE2D2]/75">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
