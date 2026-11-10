import { motion } from 'framer-motion';
import { ShoppingBag, Eye } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { products } from '../../data/products';

/**
 * ProductShowcase
 * Premium product grid with hover interactions.
 */
export default function ProductShowcase() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-[#EAE2D2]">
      <Container>
        <div className="flex flex-col items-center gap-16">
          <SectionHeading
            label="Product Collection"
            heading="MEET YOUR NEW FAVOURITE CUP."
            subheading="Each cup is crafted for an exceptional beverage experience — sip it, savour it, eat it."
          />

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          <p className="text-xs text-[#103D2E]/40 italic text-center max-w-lg">
            * Product specifications, flavours, capacities and prices are placeholder values.
            All details will be updated with verified CUP2EAT product information.
          </p>
        </div>
      </Container>
    </section>
  );
}

function ProductCard({ product, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group relative bg-[#F7F3E9] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-[#103D2E]/15 transition-all duration-500"
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10 bg-[#D9A441] text-[#092B22] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
          {product.badge}
        </div>
      )}

      {/* Product Image */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.imageAlt}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#103D2E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3">
        <h3 className="font-serif text-xl font-bold text-[#103D2E]">{product.name}</h3>
        <p className="text-sm text-[#103D2E]/65 leading-relaxed">{product.shortDescription}</p>

        {/* Meta */}
        <div className="grid grid-cols-2 gap-2 mt-1">
          <div className="bg-[#EAE2D2] rounded-xl px-3 py-2">
            <p className="text-[10px] text-[#103D2E]/50 uppercase tracking-wider font-semibold">Flavour</p>
            <p className="text-xs text-[#103D2E] font-medium mt-0.5">{product.flavor}</p>
          </div>
          <div className="bg-[#EAE2D2] rounded-xl px-3 py-2">
            <p className="text-[10px] text-[#103D2E]/50 uppercase tracking-wider font-semibold">Capacity</p>
            <p className="text-xs text-[#103D2E] font-medium mt-0.5">{product.capacity}</p>
          </div>
        </div>

        {/* Price + CTAs */}
        <div className="flex items-center justify-between mt-2 pt-3 border-t border-[#EAE2D2]">
          <div>
            <p className="text-[10px] text-[#103D2E]/40 uppercase tracking-wider">From</p>
            <p className="font-serif text-lg font-bold text-[#103D2E]">{product.price}</p>
          </div>
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-full border border-[#103D2E]/20 text-[#103D2E] hover:border-[#103D2E] transition-colors"
              aria-label={`View details for ${product.name}`}
            >
              <Eye size={15} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#bulk-orders')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-1.5 bg-[#103D2E] text-[#F7F3E9] text-xs font-semibold px-4 py-2.5 rounded-full hover:bg-[#D9A441] hover:text-[#092B22] transition-all duration-300"
              aria-label={`Order ${product.name}`}
            >
              <ShoppingBag size={12} />
              Order Now
            </motion.button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
