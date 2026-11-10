import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Flame, Sparkles, CheckCircle2, RotateCcw } from 'lucide-react';
import { siteConfig } from '../../data/navigation';

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollCupExperience.jsx
 * PERFECT MOBILE & DESKTOP RESPONSIVE SCROLL EXPERIENCE
 * - Centered, properly scaled cup on mobile (no overflow or disappearing off screen)
 * - Clear sticky presentation with synced phase pills, fill meters, and narrative
 * - Interactive fill test buttons so mobile users can test filling immediately
 */

export default function ScrollCupExperience() {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0); // 0 to 1
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [manualFill, setManualFill] = useState(null); // Allows mobile tap to fill directly

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
        onUpdate: (self) => {
          const p = Math.max(0, Math.min(1, self.progress));
          setProgress(p);
          if (manualFill === null) {
            if (p < 0.20) setPhaseIndex(0);
            else if (p < 0.45) setPhaseIndex(1);
            else if (p < 0.70) setPhaseIndex(2);
            else if (p < 0.88) setPhaseIndex(3);
            else setPhaseIndex(4);
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReduced, manualFill]);

  // Active Fill fraction (scroll or manual tap)
  const effectiveProgress = manualFill !== null ? manualFill : progress;
  const fillFraction = prefersReduced 
    ? 0.82 
    : manualFill !== null 
      ? manualFill 
      : Math.max(0, Math.min(1, (effectiveProgress - 0.12) / 0.75));

  // Physical cup geometry in SVG space (ViewBox: 400 x 500)
  const cupTopY = 140;
  const cupBottomY = 425;
  const cupHeight = cupBottomY - cupTopY;

  // Current liquid level Y coordinate
  const liquidY = cupBottomY - (fillFraction * (cupHeight - 20));
  const currentHeightFraction = (cupBottomY - liquidY) / cupHeight;
  const liquidHalfWidth = 75 + (currentHeightFraction * 40);

  // Phases narration
  const phases = [
    {
      badge: '01 • THE EDIBLE CUP',
      title: 'NOT JUST A CUP. AN EXPERIENCE.',
      desc: 'Crafted from wholesome baked grains with the iconic CUP2EAT seal. Crisp, sturdy, and ready for hot drinks.',
      tagline: '100% Edible • Zero Waste'
    },
    {
      badge: '02 • POURING BEGINS',
      title: 'POUR YOUR HOT KADAK CHAI.',
      desc: 'Steaming hot chai enters the cup. Baked natural dough retains heat without softening or leaking.',
      tagline: 'Holds Piping Hot Drinks'
    },
    {
      badge: '03 • FILLING CRUST',
      title: 'AROMA INFUSION IN PROGRESS.',
      desc: 'Cardamom and roasted wheat aroma fills the air as chai embraces the interior biscuit walls.',
      tagline: 'Natural Biscuit Grain Texture'
    },
    {
      badge: '04 • FULL & STEAMING',
      title: 'POUR. SIP. ENJOY. EAT.',
      desc: 'Steaming hot and brimming to perfection. Sip your favourite tea, then bite directly into the delicious cup!',
      tagline: 'Eat Your Drink!'
    },
    {
      badge: '05 • WHOLESALE READY',
      title: 'CHOOSE YOUR FLAVOUR.',
      desc: 'Available in Chocolate, Vanilla, Elaichi, and Chocolate Dipped for cafes and events pan-India.',
      tagline: '₹3,999/- for 396 Cups'
    }
  ];

  const activePhase = manualFill !== null
    ? (fillFraction < 0.2 ? phases[0] : fillFraction < 0.45 ? phases[1] : fillFraction < 0.75 ? phases[2] : phases[3])
    : (phases[phaseIndex] || phases[0]);

  return (
    <section
      id="cup-experience"
      ref={containerRef}
      className="relative bg-[#073D2D]"
      style={{ height: prefersReduced ? 'auto' : '350vh' }}
      aria-label="Interactive scroll-driven cup filling experience"
    >
      {/* Sticky Fullscreen Presentation */}
      <div className={`${prefersReduced ? 'relative py-16' : 'sticky top-0'} h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#073D2D] z-20`}>
        
        {/* Ambient Backlights */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] rounded-full bg-[#F5C342]/12 blur-[100px]" />
          <div 
            className="absolute inset-0 opacity-[0.035]" 
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, #F5C342 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }}
          />
        </div>

        {/* Responsive Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-4 lg:py-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-center my-auto">
            
            {/* CUP VISUALIZATION (Desktop 6 Cols, Mobile Top 50vh centered) */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
              
              {/* Radial glow */}
              <motion.div 
                className="absolute w-56 sm:w-80 h-56 sm:h-80 rounded-full bg-gradient-to-tr from-[#F5C342]/20 via-[#B98246]/30 to-transparent blur-3xl pointer-events-none"
                animate={{
                  scale: [1, 1.06, 1],
                  opacity: 0.35 + (fillFraction * 0.45)
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Responsive SVG Stage — Perfectly sized for both mobile & desktop */}
              <div className="relative w-[230px] sm:w-[320px] md:w-[380px] lg:w-[420px] max-h-[46vh] sm:max-h-[52vh] lg:max-h-none aspect-[400/500] filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.65)] mx-auto">
                <svg
                  viewBox="0 0 400 500"
                  className="w-full h-full overflow-visible"
                  role="img"
                  aria-label="CUP2EAT edible cup filling with hot chai"
                >
                  <defs>
                    {/* Inner Boundary Clip */}
                    <clipPath id="cup-inner-clip-path">
                      <path d="M 92 142 L 308 142 L 270 425 Q 200 435 130 425 Z" />
                    </clipPath>

                    {/* Biscuit Dough Gradient */}
                    <linearGradient id="biscuit-dough-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8A5128" />
                      <stop offset="25%" stopColor="#C48446" />
                      <stop offset="50%" stopColor="#DE9E59" />
                      <stop offset="75%" stopColor="#C48446" />
                      <stop offset="100%" stopColor="#78401C" />
                    </linearGradient>

                    {/* Debossed Logo Gradient */}
                    <linearGradient id="deboss-stamp-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#5A2E10" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#87471E" stopOpacity="0.6" />
                    </linearGradient>

                    {/* Chai Liquid Gradient */}
                    <linearGradient id="hot-chai-liquid-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#F7B267" />
                      <stop offset="20%" stopColor="#D97A2E" />
                      <stop offset="65%" stopColor="#9C4B18" />
                      <stop offset="100%" stopColor="#5E2B0C" />
                    </linearGradient>

                    {/* Tea Foam Gradient */}
                    <radialGradient id="tea-surface-foam" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FFE0B2" stopOpacity="0.9" />
                      <stop offset="70%" stopColor="#D97A2E" stopOpacity="0.92" />
                      <stop offset="100%" stopColor="#8A3E10" stopOpacity="0.95" />
                    </radialGradient>

                    {/* Biscuit Rim Gradient */}
                    <linearGradient id="biscuit-rim-highlight" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7A3D16" />
                      <stop offset="20%" stopColor="#D99B57" />
                      <stop offset="50%" stopColor="#FADB9E" />
                      <stop offset="80%" stopColor="#D99B57" />
                      <stop offset="100%" stopColor="#69300F" />
                    </linearGradient>
                  </defs>

                  {/* 1. STEAM ANIMATION */}
                  {fillFraction > 0.25 && (
                    <g className="transition-opacity duration-700" style={{ opacity: Math.min(1, fillFraction * 1.3) }}>
                      <path
                        d="M 170 120 Q 150 70 180 30 T 160 -10"
                        fill="none"
                        stroke="#FFF3D8"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeOpacity="0.3"
                        className="animate-steam"
                      />
                      <path
                        d="M 200 115 Q 225 65 195 25 T 215 -15"
                        fill="none"
                        stroke="#F5C342"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeOpacity="0.35"
                        className="animate-steam-delay-1"
                      />
                      <path
                        d="M 230 120 Q 255 75 220 35 T 240 -5"
                        fill="none"
                        stroke="#FFF3D8"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeOpacity="0.25"
                        className="animate-steam-delay-2"
                      />
                    </g>
                  )}

                  {/* 2. CHAI POURING STREAM */}
                  {fillFraction > 0.05 && fillFraction < 0.90 && (
                    <g>
                      <path
                        d={`M 200 -20 Q 200 60 200 ${liquidY}`}
                        stroke="url(#hot-chai-liquid-grad)"
                        strokeWidth="11"
                        strokeLinecap="round"
                        fill="none"
                        filter="drop-shadow(0 0 6px #F5C342)"
                      />
                      <circle cx="197" cy={liquidY - 4} r="4" fill="#FFE0B2" opacity="0.9" />
                      <circle cx="203" cy={liquidY - 8} r="3" fill="#D97A2E" opacity="0.8" />
                    </g>
                  )}

                  {/* 3. CUP DROP SHADOW */}
                  <ellipse cx="200" cy="455" rx="85" ry="16" fill="#000000" opacity="0.5" filter="blur(8px)" />

                  {/* 4. EDIBLE CUP BODY */}
                  <path
                    d="
                      M 85 140 
                      C 85 140, 120 425, 122 430
                      C 125 438, 275 438, 278 430
                      C 280 425, 315 140, 315 140
                      Z
                    "
                    fill="url(#biscuit-dough-grad)"
                    stroke="#5C2D0C"
                    strokeWidth="2.5"
                  />

                  {/* Biscuit texture ribs */}
                  <g opacity="0.18" stroke="#421E07" strokeWidth="2" strokeDasharray="3 4">
                    <line x1="120" y1="160" x2="145" y2="420" />
                    <line x1="150" y1="160" x2="165" y2="425" />
                    <line x1="180" y1="160" x2="185" y2="428" />
                    <line x1="220" y1="160" x2="215" y2="428" />
                    <line x1="250" y1="160" x2="235" y2="425" />
                    <line x1="280" y1="160" x2="255" y2="420" />
                    <ellipse cx="200" cy="200" rx="100" ry="10" fill="none" />
                    <ellipse cx="200" cy="260" rx="90" ry="9" fill="none" />
                    <ellipse cx="200" cy="320" rx="80" ry="8" fill="none" />
                    <ellipse cx="200" cy="380" rx="72" ry="7" fill="none" />
                  </g>

                  {/* 5. INTERIOR LIQUID WITH CLIPPING */}
                  <g clipPath="url(#cup-inner-clip-path)">
                    {/* Dark empty interior */}
                    <rect x="70" y="120" width="260" height="320" fill="#4A250E" opacity="0.45" />

                    {/* Rising Chai Liquid */}
                    {fillFraction > 0 && (
                      <g>
                        <rect
                          x="70"
                          y={liquidY}
                          width="260"
                          height={500 - liquidY}
                          fill="url(#hot-chai-liquid-grad)"
                        />

                        {/* Liquid wave surface */}
                        <path
                          d={`
                            M ${200 - liquidHalfWidth - 10} ${liquidY}
                            Q ${200 - liquidHalfWidth / 2} ${liquidY - 5} 200 ${liquidY}
                            Q ${200 + liquidHalfWidth / 2} ${liquidY + 5} ${200 + liquidHalfWidth + 10} ${liquidY}
                            L ${200 + liquidHalfWidth + 10} 500
                            L ${200 - liquidHalfWidth - 10} 500
                            Z
                          `}
                          fill="#D97A2E"
                          opacity="0.85"
                        />

                        {/* Tea Foam Surface */}
                        <ellipse
                          cx="200"
                          cy={liquidY}
                          rx={liquidHalfWidth}
                          ry={liquidHalfWidth * 0.18}
                          fill="url(#tea-surface-foam)"
                          stroke="#FFE0B2"
                          strokeWidth="1.5"
                        />

                        {/* Cream bubbles */}
                        <ellipse cx={200 - 25} cy={liquidY - 1} rx="8" ry="3" fill="#FFF3D8" opacity="0.65" />
                        <ellipse cx={200 + 35} cy={liquidY + 1} rx="6" ry="2" fill="#F5C342" opacity="0.75" />
                        <circle cx="200" cy={liquidY - 2} r="2.5" fill="#FFF" opacity="0.8" />
                      </g>
                    )}
                  </g>

                  {/* 6. CUP-2-EAT EMBOSSED 3D LOGO */}
                  <g transform="translate(155, 245)">
                    {/* Clean Vector 3D Emblem Stamp */}
                    <image
                      href="/logo/cup2eat_logo.svg"
                      x="0"
                      y="0"
                      width="90"
                      height="90"
                      preserveAspectRatio="xMidYMid meet"
                      style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))' }}
                    />
                  </g>

                  {/* 7. FRONT BEVELED RIM */}
                  <ellipse
                    cx="200"
                    cy="140"
                    rx="115"
                    ry="24"
                    fill="none"
                    stroke="url(#biscuit-rim-highlight)"
                    strokeWidth="8"
                  />
                  <ellipse
                    cx="200"
                    cy="141"
                    rx="108"
                    ry="21"
                    fill="none"
                    stroke="#381E0C"
                    strokeWidth="2"
                    opacity="0.6"
                  />
                </svg>
              </div>

              {/* Live Fill Indicator Pill */}
              <div className="mt-2 sm:mt-4 flex items-center gap-3 bg-[#092C20]/90 border border-[#F5C342]/40 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full backdrop-blur-md shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F5C342] animate-pulse" />
                <span className="text-[11px] sm:text-xs font-black text-[#FFF3D8] uppercase tracking-wider">
                  {fillFraction === 0 ? 'Empty Edible Cup (0%)' : fillFraction < 0.9 ? `Filling Chai: ${Math.round(fillFraction * 100)}%` : 'Cup Brimming Full (100%)'}
                </span>
              </div>
            </div>

            {/* NARRATIVE PANEL & QUICK TAP CONTROLS (Desktop 6 Cols, Mobile Bottom) */}
            <div className="lg:col-span-6 flex flex-col justify-center gap-3 sm:gap-5 text-center lg:text-left mt-2 lg:mt-0">
              
              {/* Badge & Title */}
              <div>
                <span className="inline-flex items-center gap-1.5 bg-[#F5C342]/15 border border-[#F5C342]/40 text-[#F5C342] text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-2">
                  <Sparkles size={12} />
                  {activePhase.badge}
                </span>

                <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-[#FFF3D8] leading-tight">
                  {activePhase.title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-[#FFF3D8]/75 text-xs sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0 font-light line-clamp-3 sm:line-clamp-none">
                {activePhase.desc}
              </p>

              {/* Mobile Quick Tap Selector Buttons (Ensures mobile users can see it fill instantly!) */}
              <div className="flex flex-col gap-2 pt-1 sm:pt-2">
                <div className="flex items-center justify-between text-[11px] font-bold text-[#F5C342] uppercase tracking-wider">
                  <span className="flex items-center gap-1">
                    <Flame size={12} /> Tap to Test Fill Level:
                  </span>
                  {manualFill !== null && (
                    <button
                      onClick={() => setManualFill(null)}
                      className="text-[10px] text-[#FFF3D8]/60 hover:text-[#F5C342] underline flex items-center gap-1"
                    >
                      <RotateCcw size={10} /> Auto Scroll
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                  {[
                    { label: 'Empty (0%)', val: 0 },
                    { label: 'Pour (35%)', val: 0.35 },
                    { label: 'Half (65%)', val: 0.65 },
                    { label: 'Full (100%)', val: 1.0 },
                  ].map((btn) => (
                    <button
                      key={btn.label}
                      onClick={() => setManualFill(btn.val)}
                      className={`py-1.5 sm:py-2 px-1 rounded-xl text-[10px] sm:text-xs font-bold transition-all border ${
                        Math.abs(fillFraction - btn.val) < 0.15
                          ? 'bg-[#F5C342] text-[#092C20] border-[#F5C342] shadow-md scale-105'
                          : 'bg-[#092C20] text-[#FFF3D8]/80 border-[#F5C342]/20 hover:border-[#F5C342]/50'
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Progress Bar */}
              <div className="w-full h-2 bg-[#092C20] rounded-full overflow-hidden border border-[#F5C342]/20 p-0.5 mt-1">
                <div
                  className="h-full bg-gradient-to-r from-[#B98246] via-[#F5C342] to-[#FFF3D8] rounded-full transition-all duration-200"
                  style={{ width: `${Math.max(4, fillFraction * 100)}%` }}
                />
              </div>

              {/* Quick Standee Credential Pill */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-[11px] text-[#FFF3D8]/80 pt-1">
                <span className="inline-flex items-center gap-1 text-[#F5C342]">
                  <CheckCircle2 size={13} /> 100% Edible &amp; Pure Veg
                </span>
                <span>•</span>
                <span>Crisp for 30+ Mins</span>
                <span>•</span>
                <span>Zero Disposable Waste</span>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Scroll Hint */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-[#F5C342]/60 uppercase tracking-widest hidden sm:flex items-center gap-1.5 animate-pulse">
          <ArrowDown size={12} /> Scroll to animate cup or use buttons above
        </div>

      </div>
    </section>
  );
}
