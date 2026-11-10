import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

const steps = [
  {
    number: '01',
    label: 'POUR',
    headline: 'Fill the Cup',
    description:
      'Fill your edible cup with your favourite hot or cold beverage. Tea, coffee, chai — the choice is yours.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
    imageAlt: 'Pouring a hot beverage — placeholder image',
  },
  {
    number: '02',
    label: 'SIP',
    headline: 'Enjoy the Experience',
    description:
      'Savour your drink and appreciate the unique experience. The cup keeps your beverage at the perfect temperature.',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
    imageAlt: 'Sipping a beverage — placeholder image',
  },
  {
    number: '03',
    label: 'EAT',
    headline: 'Finish & Enjoy',
    description:
      'Once your drink is done, the experience continues. Eat the cup and savour every last bite.',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80',
    imageAlt: 'Eating the edible cup — placeholder image',
  },
];

/**
 * HowItWorks Section
 * Three-step visual walkthrough.
 */
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-[#103D2E]">
      <Container>
        <div className="flex flex-col items-center gap-16">
          <SectionHeading
            label="How It Works"
            heading="SIMPLE. DELICIOUS. REMARKABLE."
            subheading="Three steps to a whole new beverage experience."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden md:block absolute top-[120px] left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px bg-[#D9A441]/20" />

            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="flex flex-col gap-5 items-center text-center group"
              >
                {/* Image */}
                <div className="relative w-full max-w-[260px] aspect-square rounded-[2rem] overflow-hidden shadow-xl shadow-black/30">
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#092B22]/70 to-transparent" />
                  {/* Number overlay */}
                  <div className="absolute bottom-4 left-4 font-serif text-5xl font-black text-[#D9A441]/40 leading-none select-none">
                    {step.number}
                  </div>
                </div>

                {/* Step label */}
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[10px] font-black tracking-[0.3em] text-[#D9A441] uppercase">
                    {step.number} — {step.label}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#F7F3E9]">{step.headline}</h3>
                  <p className="text-sm text-[#EAE2D2]/60 leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
