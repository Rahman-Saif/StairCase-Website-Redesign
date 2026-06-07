"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "2008", label: "Founded" },
  { value: "340+", label: "Projects" },
  { value: "24", label: "Countries" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.75, ease: "easeOut" as const, delay },
});

export default function HistorySection() {
  return (
    <section className="bg-[#F7F6F3] px-6 md:px-[8vw] py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* LEFT — Text */}
        <div>
          <motion.p
            {...fadeUp(0)}
            className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] mb-5"
          >
            Who We Are
          </motion.p>

          <motion.h2
            {...fadeUp(0.1)}
            className="text-[clamp(36px,4vw,56px)] font-light leading-[1.1] tracking-[-0.025em] text-[#0F0F0F] mb-8"
          >
            Our{" "}
            <span className="font-semibold italic">History</span>
          </motion.h2>

          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-10 h-[1.5px] bg-[#D4AF37] mb-8"
          />

          <motion.p
            {...fadeUp(0.25)}
            className="text-[15px] font-light leading-[1.9] text-[#555] mb-5"
          >
            Founded in 2008 by a collective of architects and structural
            engineers, Aerostep began with a singular conviction: that a
            staircase should be the most considered element of any interior.
          </motion.p>
          <motion.p
            {...fadeUp(0.35)}
            className="text-[15px] font-light leading-[1.9] text-[#555] mb-12"
          >
            Over sixteen years, we have grown from a small Geneva atelier into
            an internationally recognised studio, delivering bespoke staircases
            to private residences, flagship retail spaces, and cultural
            institutions across 24 countries.
          </motion.p>

          {/* Stats */}
          <motion.div
            {...fadeUp(0.45)}
            className="flex gap-10 border-t border-[#E0DDD8] pt-8"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-[26px] font-light tracking-[-0.03em] text-[#0F0F0F]">
                  {s.value}
                </p>
                <p className="text-[10px] tracking-[0.18em] uppercase text-[#999] mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" as const, delay: 0.15 }}
          className="relative"
        >
          {/* Decorative offset frame */}
          <div className="absolute -top-4 -right-4 w-full h-full border border-[#D4AF37]/20 rounded-2xl pointer-events-none" />

          <div className="relative overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-[3/4] bg-[#E8E4DC] shadow-[0_32px_80px_rgba(0,0,0,0.1)]">
            {/*
              Replace the src below with a real image path, e.g. /images/about-history.jpg
              The gradient below is the placeholder.
            */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4c9b0] via-[#c4b896] to-[#a89870]" />

            {/* SVG stair illustration as placeholder art */}
            <svg
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
              width="280"
              height="280"
              viewBox="0 0 280 280"
              fill="none"
            >
              <line x1="30" y1="250" x2="250" y2="250" stroke="#0F0F0F" strokeWidth="1.2" />
              <line x1="30" y1="250" x2="30" y2="185" stroke="#0F0F0F" strokeWidth="1.2" />
              <line x1="30" y1="185" x2="108" y2="185" stroke="#0F0F0F" strokeWidth="1.2" />
              <line x1="108" y1="185" x2="108" y2="120" stroke="#0F0F0F" strokeWidth="1.2" />
              <line x1="108" y1="120" x2="185" y2="120" stroke="#0F0F0F" strokeWidth="1.2" />
              <line x1="185" y1="120" x2="185" y2="55" stroke="#0F0F0F" strokeWidth="1.2" />
              <line x1="185" y1="55" x2="250" y2="55" stroke="#0F0F0F" strokeWidth="1.2" />
              <line x1="250" y1="55" x2="250" y2="250" stroke="#0F0F0F" strokeWidth="0.5" strokeDasharray="5 5" />
              <circle cx="30" cy="185" r="4" fill="#0F0F0F" opacity="0.6" />
              <circle cx="108" cy="120" r="4" fill="#0F0F0F" opacity="0.6" />
              <circle cx="185" cy="55" r="4" fill="#0F0F0F" opacity="0.6" />
            </svg>

            {/* Caption tag */}
            <div className="absolute bottom-5 left-5 bg-white/80 backdrop-blur-md px-4 py-2 rounded-lg">
              <p className="text-[10px] tracking-[0.15em] uppercase text-[#666]">
                Geneva Atelier — 2008
              </p>
            </div>
          </div>

         
            <Image
              src="/s9.png"
              alt="Our history — Aerostep atelier"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          
        </motion.div>
      </div>
    </section>
  );
}
