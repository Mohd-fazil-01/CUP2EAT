import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Flame, CheckCircle, Truck, Phone } from 'lucide-react';
import { brandConfig } from '../../data/brandConfig';

function scrollTo(id) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

/**
 * Hero.jsx — High-Energy Dynamic & Animated Hero
 * - Live animated steam rising from biscuit cup
 * - Floating interactive badges with gentle hover/floating physics
 * - Real brand details (₹3,999/- for 396 cups, Chocolate & Vanilla cups)
 * - Mobile-first layout with high visual impact on first load
 */

export default function Hero() {
  const { wholesale } = brandConfig;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen bg-[#073D2D] flex items-center overflow-hidden pt-4 pb-16 lg:py-0"
      aria-label="Hero – CUP2EAT"
    >
      {/* 1. Dynamic Moving Ambient Particles & Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-[10%] w-[400px] sm:w-[650px] h-[400px] sm:h-[650px] rounded-full bg-gradient-to-tr from-[#F5C342]/15 via-[#B98246]/20 to-transparent blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -25, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-10 left-[5%] w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] rounded-full bg-[#B98246]/15 blur-[100px]"
        />
        
        {/* Subtle dot matrix */}
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #F5C342 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* ── LEFT COLUMN: High Impact Typography & CTAs (7 Cols) ── */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 text-center lg:text-left items-center lg:items-start">
            
            {/* Top Official Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-[#F5C342]/15 border border-[#F5C342]/40 text-[#F5C342] text-xs font-black tracking-[0.2em] uppercase px-4 sm:px-5 py-2 rounded-full shadow-lg"
            >
              <Sparkles size={13} className="text-[#F5C342] animate-spin" style={{ animationDuration: '6s' }} />
              <span>India's First Edible Cup Brand</span>
            </motion.div>

            {/* Giant Brand Headline with Shimmer Effect */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="font-serif leading-[1.02] text-balance">
                <span className="block text-5xl sm:text-7xl lg:text-8xl font-black text-[#FFF3D8] tracking-tight">
                  EAT YOUR
                </span>
                <span className="block text-5xl sm:text-7xl lg:text-8xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-[#F5C342] via-[#FFF3D8] to-[#F5C342] drop-shadow-[0_4px_25px_rgba(245,195,66,0.4)]">
                  DRINK!
                </span>
              </h1>
            </motion.div>

            {/* Supporting Headline from Brand Poster */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-[#FFF3D8]/80 text-base sm:text-xl leading-relaxed max-w-xl font-light"
            >
              <strong className="text-[#F5C342] font-semibold">A Delicious &amp; Sustainable Innovation.</strong>
              {' '}Fill with hot Kadak Chai, Coffee, or Ice Cream — sip the drink and crunch the cup!
            </motion.p>

            {/* Mobile Animated Interactive Cup Preview Banner (Visible on mobile right above buttons) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:hidden w-full bg-[#092C20]/90 border border-[#F5C342]/30 rounded-2xl p-4 flex items-center justify-between shadow-xl my-2"
            >
              <div className="flex items-center gap-3 text-left">
                <div className="w-12 h-12 rounded-xl bg-[#073D2D] border border-[#F5C342] flex items-center justify-center text-xl shrink-0">
                  ☕
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase text-[#F5C342] tracking-wider block">Signature Experience</span>
                  <span className="text-xs font-bold text-[#FFF3D8]">Interactive Chai Fill Animation</span>
                </div>
              </div>
              <button
                onClick={() => scrollTo('#cup-experience')}
                className="bg-[#F5C342] text-[#092C20] text-xs font-black uppercase px-3.5 py-2 rounded-full shrink-0 shadow-md animate-pulse"
              >
                Watch Now ↓
              </button>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto mt-1"
            >
              <motion.button
                onClick={() => scrollTo('#cup-experience')}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-2 bg-[#F5C342] text-[#092C20] font-black text-sm px-8 py-4 rounded-full shadow-2xl shadow-[#F5C342]/30 hover:bg-[#FFF3D8] transition-all duration-300"
              >
                <span>WATCH CHAI FILL ANIMATION</span>
                <span className="text-base">☕</span>
              </motion.button>

              <motion.a
                href="#wholesale"
                onClick={(e) => { e.preventDefault(); scrollTo('#wholesale'); }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#F5C342] text-[#FFF3D8] font-bold text-sm px-7 py-3.5 rounded-full hover:bg-[#F5C342] hover:text-[#092C20] transition-all duration-300"
              >
                <span>WHOLESALE DEAL (₹3,999)</span>
              </motion.a>
            </motion.div>

            {/* Key Trust Signals from Standee */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-3 gap-2 sm:gap-6 pt-4 border-t border-[#F5C342]/20 w-full max-w-lg"
            >
              <div className="text-center lg:text-left">
                <p className="font-serif text-lg sm:text-2xl font-bold text-[#F5C342]">100%</p>
                <p className="text-[10px] text-[#FFF3D8]/60 uppercase tracking-widest">Edible Biscuit</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-serif text-lg sm:text-2xl font-bold text-[#F5C342]">FSSAI</p>
                <p className="text-[10px] text-[#FFF3D8]/60 uppercase tracking-widest">Certified Pure Veg</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-serif text-lg sm:text-2xl font-bold text-[#F5C342]">396 Cups</p>
                <p className="text-[10px] text-[#FFF3D8]/60 uppercase tracking-widest">Wholesale Pack</p>
              </div>
            </motion.div>

          </div>

          {/* ── RIGHT COLUMN: Dynamic 3D Product Stage with Floating Badges (5 Cols) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Outer Decorative Ring */}
            <div className="absolute w-[320px] sm:w-[440px] aspect-square rounded-full border-2 border-dashed border-[#F5C342]/30 animate-spin pointer-events-none" style={{ animationDuration: '30s' }} />

            {/* Main Showcase Poster/Product Card */}
            <div className="relative w-full max-w-[320px] sm:max-w-[390px] aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.7)] border-4 border-[#F5C342]/40 bg-[#092C20]">
              <img
                src="/images/wholesale_poster.png"
                alt="CUP2EAT Eat Your Drink edible cups"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#073D2D] via-transparent to-transparent opacity-40" />

              {/* Live Shimmer Overlay */}
              <div className="absolute top-4 left-4 bg-[#092C20]/90 backdrop-blur-md border border-[#F5C342]/40 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-ping" />
                <span className="text-[10px] font-black uppercase tracking-wider text-[#F5C342]">
                  Authentic CUP2EAT Cups
                </span>
              </div>
            </div>

            {/* Floating Pill 1: Top Right (Wholesale Deal) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-2 sm:-right-6 bg-[#F5C342] text-[#092C20] px-4 py-2.5 rounded-2xl shadow-xl border border-white/40 flex items-center gap-2"
            >
              <span className="text-lg">📦</span>
              <div>
                <p className="text-[10px] font-black uppercase leading-tight">Wholesale Deal</p>
                <p className="font-bold text-xs">₹3,999 for 396 Cups</p>
              </div>
            </motion.div>

            {/* Floating Pill 2: Bottom Left (Pan India Delivery) */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-5 -left-2 sm:-left-6 bg-[#092C20] text-[#FFF3D8] border-2 border-[#F5C342] px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5"
            >
              <Truck size={18} className="text-[#F5C342]" />
              <div>
                <p className="text-[10px] font-black uppercase text-[#F5C342] leading-tight">Free Shipping</p>
                <p className="font-bold text-xs">All Over India 🇮🇳</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
