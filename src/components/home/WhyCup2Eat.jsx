import { motion } from 'framer-motion';
import { Sparkles, Coffee, Users, Award } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

const benefits = [
  {
    icon: Sparkles,
    title: 'Truly Unique Concept',
    description:
      'CUP2EAT is not just a product — it is an experience. No other cup on the market offers the same edible innovation.',
  },
  {
    icon: Coffee,
    title: 'Innovative Beverage Pairing',
    description:
      'Designed to complement hot beverages like tea and coffee, the cup adds a whole new dimension to your drinking ritual.',
  },
  {
    icon: Users,
    title: 'Perfect for Events & Hospitality',
    description:
      'Ideal for cafes, restaurants, hotels, and corporate events. Give your guests an experience they will talk about.',
  },
  {
    icon: Award,
    title: 'An Alternative Worth Choosing',
    description:
      'An inventive alternative to conventional disposable cups, making each beverage moment a memorable one.',
  },
];

/**
 * WhyCup2Eat Section
 * Premium benefits grid.
 */
export default function WhyCup2Eat() {
  return (
    <section id="why-cup2eat" className="py-24 lg:py-32 bg-[#F7F3E9]">
      <Container>
        <div className="flex flex-col items-center gap-16">
          <SectionHeading
            label="Why CUP2EAT"
            heading="THE EXPERIENCE THAT SETS US APART."
            subheading="From the first sip to the final bite, CUP2EAT delivers something entirely different."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group bg-white rounded-3xl p-7 flex flex-col gap-4 shadow-sm hover:shadow-xl hover:shadow-[#103D2E]/10 transition-all duration-400 border border-[#EAE2D2]"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#103D2E] flex items-center justify-center group-hover:bg-[#D9A441] transition-colors duration-400">
                    <Icon size={22} className="text-[#F7F3E9] group-hover:text-[#092B22] transition-colors duration-400" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#103D2E] mb-2">{benefit.title}</h3>
                    <p className="text-sm text-[#103D2E]/60 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
