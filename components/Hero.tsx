"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: "easeOut" as const, delay },
});

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden bg-[#0F0F0F]">

      {/* Background video — swap src for real footage */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/hero-poster.jpg"
      >
        {/* Replace with your cinematic staircase video */}
        <source src="/home_video.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10" />

      {/* Architectural stair illustration (right side decoration) */}
      <div className="absolute right-0 top-0 bottom-0 w-[55%] z-0 hidden lg:block">
        <svg
          className="absolute top-1/2 right-[8%] -translate-y-1/2 opacity-[0.09]"
          width="480"
          height="480"
          viewBox="0 0 480 480"
          fill="none"
        >
          <line x1="60" y1="420" x2="420" y2="420" stroke="#D4AF37" strokeWidth="1" />
          <line x1="60" y1="420" x2="60" y2="330" stroke="#D4AF37" strokeWidth="1" />
          <line x1="60" y1="330" x2="150" y2="330" stroke="#D4AF37" strokeWidth="1" />
          <line x1="150" y1="330" x2="150" y2="240" stroke="#D4AF37" strokeWidth="1" />
          <line x1="150" y1="240" x2="240" y2="240" stroke="#D4AF37" strokeWidth="1" />
          <line x1="240" y1="240" x2="240" y2="150" stroke="#D4AF37" strokeWidth="1" />
          <line x1="240" y1="150" x2="330" y2="150" stroke="#D4AF37" strokeWidth="1" />
          <line x1="330" y1="150" x2="330" y2="60" stroke="#D4AF37" strokeWidth="1" />
          <line x1="330" y1="60" x2="420" y2="60" stroke="#D4AF37" strokeWidth="1" />
          <line x1="420" y1="60" x2="420" y2="420" stroke="#D4AF37" strokeWidth="0.4" strokeDasharray="6 6" />
          <circle cx="60" cy="330" r="3.5" fill="#D4AF37" opacity="0.8" />
          <circle cx="150" cy="240" r="3.5" fill="#D4AF37" opacity="0.8" />
          <circle cx="240" cy="150" r="3.5" fill="#D4AF37" opacity="0.8" />
          <circle cx="330" cy="60" r="3.5" fill="#D4AF37" opacity="0.8" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[600px] ml-[8vw] pt-[72px]">
        <motion.p
          {...fadeUp(0.2)}
          className="text-[10px] font-medium tracking-[0.32em] uppercase text-[#D4AF37] mb-7"
        >
          Architectural Staircases · Since 2008
        </motion.p>

        <motion.h1
          {...fadeUp(0.4)}
          className="text-[clamp(44px,6vw,80px)] font-light leading-[1.04] tracking-[-0.025em] text-white mb-7"
        >
          Premium Staircases
          <br />
          for{" "}
          <em className="text-[#D4AF37] not-italic font-light">Modern</em>
          <br />
          <strong className="font-semibold">Interiors</strong>
        </motion.h1>

        <motion.p
          {...fadeUp(0.6)}
          className="text-[16px] font-light leading-[1.8] text-white/50 max-w-[420px] mb-12"
        >
          We design and build architectural staircases that redefine luxury
          living spaces — where engineering meets art.
        </motion.p>

        <motion.div {...fadeUp(0.8)} className="flex flex-wrap gap-4">
          <button className="text-[11px] font-medium tracking-[0.15em] uppercase px-9 py-4 bg-[#D4AF37] text-[#0F0F0F] rounded-sm border-none cursor-pointer hover:bg-[#e8c84a] hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(212,175,55,0.3)] transition-all duration-300 active:scale-[0.98]">
            Get a Quote
          </button>
          <button className="text-[11px] font-medium tracking-[0.15em] uppercase px-9 py-4 bg-transparent text-white/75 border border-white/20 rounded-sm cursor-pointer hover:border-white/55 hover:text-white hover:-translate-y-[2px] transition-all duration-300 active:scale-[0.98]">
            View Projects
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-[8vw] z-20 flex items-center gap-3 text-[9px] tracking-[0.22em] uppercase text-white/25"
      >
        <span className="block w-10 h-[0.5px] bg-white/20" />
        Scroll to explore
      </motion.div>
    </section>
  );
}
