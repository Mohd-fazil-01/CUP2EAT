import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

const highlights = [
  {
    icon: '☕',
    title: 'Your Favourite Beverages',
    description:
      'Fill your edible cup with tea, coffee, chai, or any beverage of your choice — the cup holds your drink perfectly.',
  },
  {
    icon: '✨',
    title: 'A Unique Edible Experience',
    description:
      'Once your drink is done, the experience continues. The cup itself is part of the experience — crafted to be enjoyed.',
  },
  {
    icon: '🌿',
    title: 'An Innovative Alternative',
    description:
      'An inventive concept that rethinks conventional disposable cups with an edible, enjoyable alternative.',
  },
];

/**
 * BrandIntro Section
 * Editorial split layout introducing the CUP2EAT concept.
 */
export default function BrandIntro() {
  return (
    <section id="brand-intro" className="py-24 lg:py-32 bg-[#F7F3E9]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#103D2E]/15 aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=85"
                alt="Edible cup concept — placeholder, replace with official CUP2EAT imagery"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#092B22]/30 to-transparent" />
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-[#092B22] rounded-2xl px-6 py-5 shadow-xl max-w-[180px]"
            >
              <p className="font-serif text-3xl font-bold text-[#D9A441]">100%</p>
              <p className="text-[#EAE2D2]/70 text-xs mt-1 leading-snug">Edible. Enjoyable. Innovative.</p>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <div className="flex flex-col gap-8">
            <SectionHeading
              label="The Concept"
              heading="NOT JUST A CUP. A WHOLE NEW EXPERIENCE."
              align="left"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#103D2E]/70 text-lg leading-relaxed"
            >
              CUP2EAT is redefining the way we enjoy beverages. Imagine sipping your
              favourite drink and then eating the cup it came in. That is the CUP2EAT
              experience — innovative, delicious, and unlike anything you have tried before.
            </motion.p>

            {/* Highlight list */}
            <div className="flex flex-col gap-5 mt-2">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
                  className="flex items-start gap-4"
                >
                  <span className="text-2xl mt-0.5 shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-[#103D2E]">{item.title}</h3>
                    <p className="text-sm text-[#103D2E]/65 mt-1 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
