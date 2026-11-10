import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { navLinks, siteConfig } from '../../data/navigation';
import Container from './Container';

// Custom Instagram SVG (Lucide removed this icon in recent versions)
function InstagramIcon({ size = 16, className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * Footer
 * Premium footer with brand description, navigation, contact, and legal.
 */
export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#092B22] text-[#EAE2D2]">
      {/* Divider stripe */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#D9A441] to-transparent opacity-50" />

      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[#D9A441] flex items-center justify-center">
                <span className="text-[#092B22] font-black text-xs">C2E</span>
              </div>
              <span className="font-serif text-2xl font-bold text-[#F7F3E9]">CUP2EAT</span>
            </div>
            <p className="text-sm text-[#EAE2D2]/70 leading-relaxed max-w-sm">
              Innovating the beverage experience with edible cups that you sip from and savour.
              A sustainable, delicious alternative for cafes, events, and everyday moments.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#D9A441]/40 flex items-center justify-center text-[#D9A441] hover:bg-[#D9A441] hover:text-[#092B22] transition-all duration-300"
                aria-label="CUP2EAT on Instagram"
              >
                <InstagramIcon size={16} />
              </a>
            </div>
            <p className="text-xs text-[#EAE2D2]/40 italic mt-1">
              {siteConfig.instagramHandle}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-sm font-semibold text-[#F7F3E9] uppercase tracking-widest mb-5">
              Navigate
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#EAE2D2]/60 hover:text-[#D9A441] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-sm font-semibold text-[#F7F3E9] uppercase tracking-widest mb-5">
              Get In Touch
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm text-[#EAE2D2]/60">
                <Mail size={14} className="mt-0.5 shrink-0 text-[#D9A441]" />
                <span>{siteConfig.email || '[Email – coming soon]'}</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-[#EAE2D2]/60">
                <Phone size={14} className="mt-0.5 shrink-0 text-[#D9A441]" />
                <span>{siteConfig.phone || '[Phone – coming soon]'}</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-[#EAE2D2]/60">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#D9A441]" />
                <span>{siteConfig.address || '[Address – coming soon]'}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#EAE2D2]/40">
            © {year} CUP2EAT. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-[#EAE2D2]/40 hover:text-[#D9A441] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-[#EAE2D2]/40 hover:text-[#D9A441] transition-colors">
              Terms & Conditions
            </a>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-[#D9A441]/20 hover:bg-[#D9A441] flex items-center justify-center text-[#D9A441] hover:text-[#092B22] transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
