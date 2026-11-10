import { motion } from 'framer-motion';

/**
 * Button — CUP2EAT Brand Edition
 * Variants: primary | secondary | ghost | gold | gold-outline
 */
export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold text-sm tracking-wide transition-all duration-300 cursor-pointer select-none';

  const variants = {
    primary:
      'bg-[#073D2D] text-[#FFF3D8] px-7 py-3.5 rounded-full hover:bg-[#F5C342] hover:text-[#092C20] shadow-lg hover:shadow-xl',
    secondary:
      'border-2 border-[#073D2D] text-[#073D2D] px-7 py-3 rounded-full hover:bg-[#073D2D] hover:text-[#FFF3D8]',
    ghost:
      'border-2 border-[#FFF3D8]/50 text-[#FFF3D8] px-7 py-3 rounded-full hover:border-[#F5C342] hover:text-[#F5C342]',
    gold:
      'bg-[#F5C342] text-[#092C20] px-7 py-3.5 rounded-full hover:bg-[#FFF3D8] hover:text-[#073D2D] shadow-lg shadow-[#F5C342]/30 hover:shadow-xl font-bold',
    'gold-outline':
      'border-2 border-[#F5C342] text-[#F5C342] px-7 py-3 rounded-full hover:bg-[#F5C342] hover:text-[#092C20]',
  };

  const Element = href ? 'a' : 'button';

  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
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
