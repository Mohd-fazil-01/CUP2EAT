import { motion } from 'framer-motion';
import { ArrowDown, Leaf } from 'lucide-react';
import Button from '../common/Button';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] } }),
};

/**
 * Hero Section
 * Full-viewport cinematic hero with product image, headline, and CTAs.
 */
export default function Hero() {
  const scrollDown = () => {
    document.querySelector('#brand-intro')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#092B22] flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=85"
          alt="Warm beverage in a cup — decorative background"
          className="w-full h-full object-cover object-center opacity-20"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#092B22] via-[#092B22]/90 to-[#092B22]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#092B22] via-transparent to-transparent" />
      </div>

      {/* Decorative golden ring */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.08 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border-[40px] border-[#D9A441] hidden lg:block"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-10 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">

          {/* Text Column */}
          <div className="flex flex-col gap-7">
            {/* Badge */}
            <motion.div
              initial="hidden"
              animate="show"
              custom={0.1}
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-[#D9A441]/15 border border-[#D9A441]/30 text-[#D9A441] text-xs font-semibold tracking-[0.18em] uppercase px-4 py-2 rounded-full w-fit"
            >
              <Leaf size={12} />
              Eat Your Drink!
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial="hidden"
              animate="show"
              custom={0.2}
              variants={fadeUp}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#F7F3E9] leading-[1.05] text-balance"
            >
              THE CUP
              <br />
              <span className="text-[#D9A441] italic">YOU CAN</span>
              <br />
              EAT.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial="hidden"
              animate="show"
              custom={0.35}
              variants={fadeUp}
              className="text-[#EAE2D2]/75 text-lg sm:text-xl leading-relaxed max-w-lg"
            >
              Enjoy your favourite beverages with a delicious twist. Sip your drink,
              savour the experience, and eat the cup.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial="hidden"
              animate="show"
              custom={0.5}
              variants={fadeUp}
              className="flex flex-wrap gap-4 mt-2"
            >
              <Button
                variant="golden"
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Our Cups
              </Button>
              <Button
                variant="ghost"
                href="#story"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Discover Our Story
              </Button>
            </motion.div>

            {/* Stat strip */}
            <motion.div
              initial="hidden"
              animate="show"
              custom={0.65}
              variants={fadeUp}
              className="flex flex-wrap gap-8 mt-4 pt-6 border-t border-white/10"
            >
              {[
                { label: 'Innovative', value: 'Concept' },
                { label: 'Edible', value: 'Cups' },
                { label: 'Zero', value: 'Cup Waste' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-2xl font-bold text-[#D9A441]">{stat.value}</p>
                  <p className="text-xs text-[#EAE2D2]/50 uppercase tracking-widest mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Product Image */}
            <div className="relative w-[420px] h-[520px] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/40">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=85"
                alt="Edible cup product — placeholder image, replace with official CUP2EAT photography"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#092B22]/60 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="absolute -bottom-6 -left-8 bg-[#F7F3E9] rounded-2xl px-5 py-4 shadow-xl"
            >
              <p className="text-[#103D2E] font-serif text-sm font-bold">Sip. Savour. Eat.</p>
              <p className="text-[#103D2E]/60 text-xs mt-0.5">The edible cup experience</p>
            </motion.div>

            {/* Floating label top-right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="absolute -top-4 -right-4 bg-[#D9A441] rounded-xl px-4 py-3 shadow-lg"
            >
              <p className="text-[#092B22] text-xs font-black uppercase tracking-wider">New Experience</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={scrollDown}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#EAE2D2]/40 hover:text-[#D9A441] transition-colors group cursor-pointer"
          aria-label="Scroll down"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
