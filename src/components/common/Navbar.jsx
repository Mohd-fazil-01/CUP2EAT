import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, siteConfig } from '../../data/navigation';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import Button from './Button';

/**
 * Navbar
 * Transparent on hero, solid on scroll. Includes mobile hamburger menu.
 */
export default function Navbar() {
  const scrollY = useScrollPosition();
  const [menuOpen, setMenuOpen] = useState(false);
  const isScrolled = scrollY > 60;

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#D9A441] text-[#092B22] text-center py-2 text-xs font-semibold tracking-widest uppercase z-50 relative">
        Discover a better way to enjoy your favourite drinks.
      </div>

      {/* Main Navbar */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-40 w-full transition-all duration-500 ${
          isScrolled
            ? 'bg-[#092B22]/95 backdrop-blur-md shadow-lg shadow-black/10'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-2 group"
              aria-label="CUP2EAT – Home"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#D9A441] group-hover:scale-105 transition-transform duration-300">
                <span className="text-[#092B22] font-black text-xs tracking-tight leading-none">C2E</span>
              </div>
              <span className="font-serif text-xl font-bold text-[#F7F3E9] tracking-wide">
                CUP2EAT
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }
                  }}
                  className="text-sm font-medium text-[#F7F3E9]/80 hover:text-[#D9A441] transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#D9A441] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <div className="hidden lg:block">
                <Button
                  variant="golden"
                  href="#products"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#products'); }}
                >
                  Order Now
                </Button>
              </div>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 rounded-lg text-[#F7F3E9] hover:bg-white/10 transition-colors"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
            />
            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 z-40 h-full w-72 bg-[#092B22] shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
                <span className="font-serif text-lg font-bold text-[#F7F3E9]">CUP2EAT</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-[#F7F3E9]/70 hover:text-[#F7F3E9]"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col px-6 py-8 gap-1" aria-label="Mobile navigation">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-[#F7F3E9]/80 hover:text-[#D9A441] py-3 text-base font-medium border-b border-white/5 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <div className="px-6 mt-auto pb-10">
                <Button
                  variant="golden"
                  href="#products"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#products'); }}
                  className="w-full justify-center"
                >
                  Order Now
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
