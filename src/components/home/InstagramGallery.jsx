import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { siteConfig } from '../../data/navigation';

/**
 * InstagramGallery.jsx
 * Authentic gallery highlighting the CUP2EAT exhibition journey, standee, and Diwali promotions
 */

const galleryItems = [
  {
    image: '/images/wholesale_poster.png',
    title: 'Official Wholesale Poster',
    desc: '₹3,999/- for 396 Cups nationwide offer',
    tag: 'B2B Offer'
  },
  {
    image: '/images/banner_standee.png',
    title: 'Exhibition Standee Display',
    desc: 'Small Sip, Big Change — Live stall & tastings',
    tag: 'Events & Expo'
  },
  {
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80',
    title: 'Chai Time Reinvented',
    desc: 'Masala Chai in baked Cardamom and Vanilla cups',
    tag: 'Tasting'
  },
  {
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80',
    title: 'Café & Restaurant Serving',
    desc: 'Zero waste serving for gourmet coffee & ice cream',
    tag: 'Hospitality'
  }
];

export default function InstagramGallery() {
  return (
    <section id="instagram" className="py-24 bg-[#092C20] text-[#FFF3D8]">
      <Container>
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <SectionHeading
            label="Join The Movement"
            heading="FOLLOW THE CUP2EAT JOURNEY"
            subheading="From bustling food festivals and catering exhibitions to daily cafe counters across the country."
            light
          />

          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 bg-[#F5C342] text-[#092C20] font-black text-xs uppercase tracking-widest px-6 py-2.5 rounded-full hover:bg-white transition-colors shadow-lg shadow-[#F5C342]/20"
          >
            <span>@cup2eat on Instagram</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#073D2D] border border-[#F5C342]/20 rounded-3xl overflow-hidden group hover:border-[#F5C342] transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden bg-[#382316]/50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-[#092C20]/80 backdrop-blur-md text-[#F5C342] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#F5C342]/30">
                  {item.tag}
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="font-serif font-bold text-base text-[#FFF3D8] group-hover:text-[#F5C342] transition-colors mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#FFF3D8]/65">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}
