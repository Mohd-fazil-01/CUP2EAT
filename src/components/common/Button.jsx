import { motion } from 'framer-motion';

/**
 * Button
 * Premium CTA button with variants: primary | secondary | ghost | golden.
 */
export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  as: Tag = 'button',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold text-sm tracking-wide transition-all duration-300 cursor-pointer select-none';

  const variants = {
    primary:
      'bg-[#103D2E] text-[#F7F3E9] px-7 py-3.5 rounded-full hover:bg-[#D9A441] hover:text-[#092B22] shadow-lg hover:shadow-xl',
    secondary:
      'border-2 border-[#103D2E] text-[#103D2E] px-7 py-3 rounded-full hover:bg-[#103D2E] hover:text-[#F7F3E9]',
    ghost:
      'border-2 border-[#F7F3E9]/50 text-[#F7F3E9] px-7 py-3 rounded-full hover:border-[#F7F3E9] hover:bg-[#F7F3E9]/10',
    golden:
      'bg-[#D9A441] text-[#092B22] px-7 py-3.5 rounded-full hover:bg-[#F7F3E9] hover:text-[#103D2E] shadow-lg hover:shadow-xl',
    'golden-outline':
      'border-2 border-[#D9A441] text-[#D9A441] px-7 py-3 rounded-full hover:bg-[#D9A441] hover:text-[#092B22]',
  };

  const Element = href ? 'a' : Tag;

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      <Element
        href={href}
        onClick={onClick}
        className={`${base} ${variants[variant] || variants.primary} ${className}`}
        {...props}
      >
        {children}
      </Element>
    </motion.div>
  );
}
