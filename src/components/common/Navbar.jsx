import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, siteConfig } from '../../data/navigation';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import Cup2EatLogo from './Cup2EatLogo';

function scrollTo(id) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

/** CUP2EAT Navbar — gold-on-dark, transparent → solid */
export default function Navbar() {
  const scrollY = useScrollPosition();
  const [menuOpen, setMenuOpen] = useState(false);
  const isScrolled = scrollY > 60;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNav = (href) => {
    setMenuOpen(false);
    if (href === '/') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    if (href.startsWith('#')) { scrollTo(href); }
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#F5C342] text-[#092C20] text-center py-2 text-xs font-black tracking-[0.2em] uppercase z-50 relative">
        🌿 Eat Your Drink! — India's First Edible Cup Brand
      </div>

      {/* Navbar */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-40 w-full transition-all duration-500 ${
          isScrolled
            ? 'bg-[#092C20]/97 backdrop-blur-md shadow-xl shadow-black/20'
            : 'bg-[#092C20]'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); handleNav('/'); }}
              className="flex items-center group"
              aria-label="CUP2EAT – Home"
            >
              <Cup2EatLogo size={42} showText={true} />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className="text-sm font-medium text-[#FFF3D8]/75 hover:text-[#F5C342] transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#F5C342] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="#wholesale"
                onClick={(e) => { e.preventDefault(); scrollTo('#wholesale'); }}
                className="hidden lg:inline-flex items-center gap-2 bg-[#F5C342] text-[#092C20] font-bold text-sm px-5 py-2.5 rounded-full hover:bg-[#FFF3D8] transition-all duration-300 shadow-md shadow-[#F5C342]/20"
              >
                Wholesale Enquiry
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 rounded-lg text-[#FFF3D8] hover:bg-white/10 transition-colors"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-30 bg-black/70 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              key="drawer"
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 z-40 h-full w-72 bg-[#092C20] shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-16 border-b border-[#F5C342]/20">
                <Cup2EatLogo size={34} showText={true} />
                <button onClick={() => setMenuOpen(false)} className="text-[#FFF3D8]/60 hover:text-[#F5C342] p-1">
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-col px-6 py-8 gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className="text-[#FFF3D8]/75 hover:text-[#F5C342] py-3 text-base font-medium border-b border-[#F5C342]/10 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="px-6 mt-auto pb-10">
                <a
                  href="#wholesale"
                  onClick={(e) => { e.preventDefault(); handleNav('#wholesale'); }}
                  className="block w-full text-center bg-[#F5C342] text-[#092C20] font-bold py-3.5 rounded-full hover:bg-[#FFF3D8] transition-colors shadow-lg"
                >
                  Wholesale Enquiry
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
