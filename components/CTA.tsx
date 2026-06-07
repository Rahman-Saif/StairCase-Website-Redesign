"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative px-[8vw] py-[160px] text-center bg-[#0F0F0F] overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.055)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-10 h-[0.5px] bg-[#D4AF37] mx-auto mb-8"
      />

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" as const }}
        className="text-[clamp(36px,5vw,64px)] font-light leading-[1.1] tracking-[-0.02em] text-white mb-5 relative"
      >
        Ready to elevate
        <br />
        your space?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-[15px] font-light text-white/40 mb-12 relative"
      >
        Begin with a complimentary design consultation.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="flex gap-4 justify-center flex-wrap relative"
      >
        <button className="text-[11px] font-medium tracking-[0.15em] uppercase px-10 py-4 bg-[#D4AF37] text-[#0F0F0F] rounded-sm border-none cursor-pointer hover:bg-[#e8c84a] hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(212,175,55,0.3)] transition-all duration-300 active:scale-[0.98]">
          Start Your Project
        </button>
        <button className="text-[11px] font-medium tracking-[0.15em] uppercase px-10 py-4 bg-transparent text-white/70 border border-white/20 rounded-sm cursor-pointer hover:border-white/50 hover:text-white hover:-translate-y-[2px] transition-all duration-300 active:scale-[0.98]">
          View All Projects
        </button>
      </motion.div>
    </section>
  );
}
