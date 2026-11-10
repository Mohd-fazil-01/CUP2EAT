import Hero from '../components/home/Hero';
import BrandIntro from '../components/home/BrandIntro';
import ProductShowcase from '../components/home/ProductShowcase';
import HowItWorks from '../components/home/HowItWorks';
import WhyCup2Eat from '../components/home/WhyCup2Eat';
import BrandStory from '../components/home/BrandStory';
import Sustainability from '../components/home/Sustainability';
import BulkOrders from '../components/home/BulkOrders';
import Testimonials from '../components/home/Testimonials';
import InstagramGallery from '../components/home/InstagramGallery';
import FinalCTA from '../components/home/FinalCTA';

/**
 * Home Page
 * Assembles all homepage sections in order.
 */
export default function Home() {
  return (
    <main>
      <Hero />
      <BrandIntro />
      <ProductShowcase />
      <HowItWorks />
      <WhyCup2Eat />
      <BrandStory />
      <Sustainability />
      <BulkOrders />
      <Testimonials />
      <InstagramGallery />
      <FinalCTA />
    </main>
  );
}
