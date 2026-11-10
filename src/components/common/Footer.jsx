import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { navLinks, siteConfig } from '../../data/navigation';
import Container from './Container';
import Cup2EatLogo from './Cup2EatLogo';

function InstagramIcon({ size = 16, className = '' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#092C20] text-[#FFF3D8]">
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#F5C342] to-transparent" />

      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Cup2EatLogo size={52} showText={true} />
            <p className="text-sm text-[#FFF3D8]/60 leading-relaxed max-w-sm">
              India's first edible cup brand — where every sip leads to a delicious bite.
              Bringing innovation to cafes, events, and hospitality businesses nationwide.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#F5C342]/40 flex items-center justify-center text-[#F5C342] hover:bg-[#F5C342] hover:text-[#092C20] transition-all duration-300"
                aria-label="CUP2EAT on Instagram"
              >
                <InstagramIcon size={15} />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-xs font-black tracking-[0.2em] uppercase text-[#F5C342] mb-5">Navigate</h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-[#FFF3D8]/55 hover:text-[#F5C342] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-black tracking-[0.2em] uppercase text-[#F5C342] mb-5">Get In Touch</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm text-[#FFF3D8]/55">
                <Mail size={13} className="mt-0.5 shrink-0 text-[#F5C342]" />
                {siteConfig.email || '[Email — coming soon]'}
              </li>
              <li className="flex items-start gap-2 text-sm text-[#FFF3D8]/55">
                <Phone size={13} className="mt-0.5 shrink-0 text-[#F5C342]" />
                {siteConfig.phone || '[Phone — coming soon]'}
              </li>
              <li className="flex items-start gap-2 text-sm text-[#FFF3D8]/55">
                <MapPin size={13} className="mt-0.5 shrink-0 text-[#F5C342]" />
                {siteConfig.address || '[Address — coming soon]'}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-[#F5C342]/15 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <p className="text-xs text-[#FFF3D8]/40">© {year} CUP2EAT. All rights reserved.</p>
            <span className="hidden sm:inline text-[#F5C342]/30">•</span>
            <p className="text-xs text-[#FFF3D8]/60">
              Designed &amp; Developed by{' '}
              <span className="font-semibold text-[#F5C342] hover:text-white transition-colors">
                Mohd Fazil
              </span>{' '}
              <span className="text-[10px] uppercase tracking-wider bg-[#F5C342]/15 text-[#F5C342] border border-[#F5C342]/30 px-2 py-0.5 rounded-full ml-1">
                Full Stack Developer
              </span>
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-[#FFF3D8]/40 hover:text-[#F5C342] transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-[#FFF3D8]/40 hover:text-[#F5C342] transition-colors">Terms &amp; Conditions</a>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-[#F5C342]/15 hover:bg-[#F5C342] flex items-center justify-center text-[#F5C342] hover:text-[#092C20] transition-all duration-300"
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
