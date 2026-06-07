"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] min-h-[520px] mt-[200px] flex items-center overflow-hidden bg-[#0F0F0F]">

      {/* Background image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e1a14]/80 via-[#141210]/60 to-[#0a0908]/40">
        <Image
          src="/s5.png"
          alt="Background staircase"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Background placeholder / gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e1a14]/55 via-[#141210]/40 to-[#0a0908]/25" />

      {/* Decorative stair SVG */}
       <svg className="absolute right-[8%] top-1/2 -translate-y-1/2 opacity-[0.06]"
        width="420" height="420" viewBox="0 0 420 420" fill="none">
      
        <line x1="50" y1="380" x2="370" y2="380" stroke="#D4AF37" strokeWidth="1.2"/>
        <line x1="50" y1="380" x2="50" y2="295" stroke="#D4AF37" strokeWidth="1.2"/>
        <line x1="50" y1="295" x2="135" y2="295" stroke="#D4AF37" strokeWidth="1.2"/>
        <line x1="135" y1="295" x2="135" y2="210" stroke="#D4AF37" strokeWidth="1.2"/>
        <line x1="135" y1="210" x2="220" y2="210" stroke="#D4AF37" strokeWidth="1.2"/>
        <line x1="220" y1="210" x2="220" y2="125" stroke="#D4AF37" strokeWidth="1.2"/>
        <line x1="220" y1="125" x2="305" y2="125" stroke="#D4AF37" strokeWidth="1.2"/>
        <line x1="305" y1="125" x2="305" y2="50" stroke="#D4AF37" strokeWidth="1.2"/>
        <line x1="305" y1="50" x2="370" y2="50" stroke="#D4AF37" strokeWidth="1.2"/>
        <line x1="370" y1="50" x2="370" y2="380" stroke="#D4AF37" strokeWidth="0.4" strokeDasharray="6 5"/>
        <circle cx="50" cy="295" r="4" fill="#D4AF37" opacity="0.7"/>
        <circle cx="135" cy="210" r="4" fill="#D4AF37" opacity="0.7"/>
        <circle cx="220" cy="125" r="4" fill="#D4AF37" opacity="0.7"/>
        <circle cx="305" cy="50" r="4" fill="#D4AF37" opacity="0.7"/>
      </svg>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 px-[8vw] max-w-[680px]">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.1 }}
          className="text-[10px] font-medium tracking-[0.32em] uppercase text-[#D4AF37] mb-5"
        >
          Our Services
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" as const, delay: 0.25 }}
          className="text-[clamp(40px,5.5vw,72px)] font-light leading-[1.06] tracking-[-0.025em] text-white mb-6"
        >
          We Design Spaces
          <br />
          <strong className="font-semibold">That Inspire</strong>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.4 }}
          className="text-[15px] font-light leading-[1.8] text-white/50 mb-10 max-w-[420px]"
        >
          From concept to installation — every staircase is engineered for
          beauty, precision, and architectural longevity.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="text-[11px] font-medium tracking-[0.15em] uppercase px-8 py-3.5 bg-transparent text-[#D4AF37] border border-[rgba(212,175,55,0.5)] rounded-sm hover:bg-[rgba(212,175,55,0.08)] hover:border-[#D4AF37] transition-all duration-300 cursor-pointer"
        >
          Explore Services
        </motion.button>
      </div>
    </section>
  );
}
