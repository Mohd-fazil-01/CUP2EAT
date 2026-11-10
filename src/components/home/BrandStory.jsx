import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

/**
 * BrandStory Section
 * Editorial storytelling layout with mission and vision.
 * Founder details and company history are placeholder — replace before launch.
 */
export default function BrandStory() {
  return (
    <section id="story" className="py-24 lg:py-32 bg-[#EAE2D2]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text side */}
          <div className="flex flex-col gap-8">
            <SectionHeading
              label="Our Story"
              heading="OUR STORY. OUR VISION."
              align="left"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-5 text-[#103D2E]/70 leading-relaxed"
            >
              <p>
                CUP2EAT was born from a simple but powerful idea: what if the cup itself
                was part of the experience? Our founders set out to create something that
                had never been done before — an edible cup that transforms the way people
                enjoy their favourite beverages.
              </p>
              <p className="text-xs text-[#103D2E]/40 italic">
                [Founder details and company history — to be updated with verified information]
              </p>
              <p>
                From humble beginnings to becoming a conversation starter at every event
                and cafe, CUP2EAT has grown by staying true to its core belief: every
                beverage moment should be extraordinary.
              </p>
            </motion.div>

            {/* Mission / Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
              {[
                {
                  label: 'Our Mission',
                  text: 'To create an innovative beverage experience that is memorable, delicious, and unlike anything the world has tasted before.',
                },
                {
                  label: 'Our Vision',
                  text: 'To bring the edible cup concept to cafes, events, and hospitality businesses worldwide — one cup at a time.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="bg-[#F7F3E9] rounded-2xl p-5 border border-[#EAE2D2]"
                >
                  <span className="text-[10px] font-black tracking-[0.25em] text-[#D9A441] uppercase">
                    {item.label}
                  </span>
                  <p className="text-sm text-[#103D2E]/70 mt-2 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[1.5rem] overflow-hidden aspect-[3/4] shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80"
                  alt="Brand story visual — placeholder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 pt-8">
                <div className="rounded-[1.5rem] overflow-hidden aspect-square shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80"
                    alt="Brand visual — placeholder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[#103D2E] rounded-[1.5rem] p-5 flex flex-col gap-2">
                  <p className="font-serif text-3xl font-bold text-[#D9A441]">2024</p>
                  <p className="text-xs text-[#EAE2D2]/60 leading-snug">
                    [Year founded — verify before launch]
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
