import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { siteConfig } from '../../data/navigation';

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

// Visual placeholder grid — themed beverage imagery from Unsplash.
// Replace with official CUP2EAT Instagram content before launch.
const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80',
    alt: 'Beverage in cup — placeholder for Instagram post',
  },
  {
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=80',
    alt: 'Coffee cup close-up — placeholder for Instagram post',
  },
  {
    src: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500&q=80',
    alt: 'Hot beverage — placeholder for Instagram post',
  },
  {
    src: 'https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=500&q=80',
    alt: 'Tea cup — placeholder for Instagram post',
  },
  {
    src: 'https://images.unsplash.com/photo-1534687941688-651ccaafbff8?w=500&q=80',
    alt: 'Coffee brewing — placeholder for Instagram post',
  },
  {
    src: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&q=80',
    alt: 'Food and beverage — placeholder for Instagram post',
  },
];

/**
 * InstagramGallery Section
 * Visual placeholder gallery linking to @cup2eat Instagram.
 */
export default function InstagramGallery() {
  return (
    <section id="instagram" className="py-24 lg:py-32 bg-[#F7F3E9]">
      <Container>
        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-4">
            <SectionHeading
              label="Instagram"
              heading="FOLLOW THE CUP2EAT JOURNEY."
            />
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#103D2E] hover:text-[#D9A441] transition-colors font-semibold text-sm"
            >
              <InstagramIcon size={16} />
              {siteConfig.instagramHandle}
            </a>
            <p className="text-xs text-[#103D2E]/40 italic">
              * Visual gallery below uses placeholder imagery. Replace with real Instagram content before launch.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full max-w-4xl mx-auto">
            {galleryImages.map((img, i) => (
              <motion.a
                key={i}
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative group overflow-hidden rounded-2xl aspect-square block"
                aria-label={`View on Instagram: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#092B22]/0 group-hover:bg-[#092B22]/50 transition-all duration-400 flex items-center justify-center">
                  <InstagramIcon
                    size={28}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                  />
                </div>
              </motion.a>
            ))}
          </div>

          <motion.a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 border-2 border-[#103D2E] text-[#103D2E] font-semibold text-sm px-7 py-3 rounded-full hover:bg-[#103D2E] hover:text-[#F7F3E9] transition-all duration-300"
          >
            <InstagramIcon size={16} />
            Follow on Instagram
          </motion.a>
        </div>
      </Container>
    </section>
  );
}
