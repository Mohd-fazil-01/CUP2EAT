import { motion } from 'framer-motion';

/**
 * SectionHeading — CUP2EAT Brand Edition
 * Gold label, cream/green headline, with optional light/dark mode.
 */
export default function SectionHeading({
  label,
  heading,
  subheading,
  align = 'center',
  light = false,
}) {
  const alignClass = {
    center: 'text-center items-center',
    left:   'text-left items-start',
    right:  'text-right items-end',
  }[align];

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-xs font-black tracking-[0.25em] uppercase text-[#F5C342]"
        >
          — {label} —
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.1 }}
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance ${
          light ? 'text-[#FFF3D8]' : 'text-[#073D2D]'
        }`}
      >
        {heading}
      </motion.h2>
      {subheading && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`max-w-2xl text-base sm:text-lg leading-relaxed ${
            light ? 'text-[#FFF3D8]/70' : 'text-[#073D2D]/65'
          }`}
        >
          {subheading}
        </motion.p>
      )}
    </div>
  );
}
