import { motion } from 'framer-motion';

/**
 * SectionHeading
 * Reusable editorial heading with optional label and subtitle.
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
    left: 'text-left items-start',
    right: 'text-right items-end',
  }[align];

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase ${
            light ? 'text-[#D9A441]' : 'text-[#D9A441]'
          }`}
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? 'text-[#F7F3E9]' : 'text-[#103D2E]'
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
            light ? 'text-[#EAE2D2]/80' : 'text-[#103D2E]/70'
          }`}
        >
          {subheading}
        </motion.p>
      )}
    </div>
  );
}
