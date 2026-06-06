"use client";

import { motion } from "framer-motion";

const features = [
  {
    num: "01",
    title: "Bespoke Engineering",
    text: "Every staircase is an original — designed from first principles to integrate seamlessly with your architecture and structural requirements.",
    category: "Engineering",
    icon: (
      <svg viewBox="0 0 28 28" className="w-7 h-7 stroke-[#D4AF37] fill-none" strokeWidth={1.2}>
        <polygon points="14,2 26,22 2,22" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Premium Materials",
    text: "Hand-selected steel, glass, stone, and solid hardwoods — sourced exclusively from the world's finest certified suppliers.",
    category: "Materials",
    icon: (
      <svg viewBox="0 0 28 28" className="w-7 h-7 stroke-[#D4AF37] fill-none" strokeWidth={1.2}>
        <rect x="4" y="4" width="20" height="20" rx="2" />
        <line x1="4" y1="14" x2="24" y2="14" />
        <line x1="14" y1="4" x2="14" y2="24" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Precision Finish",
    text: "Each joint, weld, and surface is finished by hand to tolerances of less than one millimeter by our master craftsmen.",
    category: "Craftsmanship",
    icon: (
      <svg viewBox="0 0 28 28" className="w-7 h-7 stroke-[#D4AF37] fill-none" strokeWidth={1.2}>
        <circle cx="14" cy="14" r="10" />
        <circle cx="14" cy="14" r="4" />
        <line x1="14" y1="4" x2="14" y2="10" />
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
};

export default function Features() {
  return (
    <section className="px-[8vw] py-[120px] bg-[#0F0F0F]">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] mb-5"
      >
        Our Principles
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-[clamp(28px,3.5vw,48px)] font-light leading-[1.15] tracking-[-0.02em] text-white max-w-[480px] mb-16"
      >
        Crafted to the highest architectural standards
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
        {features.map((f, i) => (
          <motion.div
            key={f.num}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5, borderColor: "rgba(212,175,55,0.28)" }}
            className="bg-[#181818] p-12 border border-white/[0.05] transition-colors duration-300 cursor-default"
          >
            <div className="w-9 h-9 flex items-center justify-center mb-8">
              {f.icon}
            </div>
            <h3 className="text-[16px] font-medium text-white mb-3 tracking-[0.01em]">
              {f.title}
            </h3>
            <p className="text-[13px] font-light leading-[1.85] text-white/40">
              {f.text}
            </p>
            <p className="text-[10px] tracking-[0.2em] text-[rgba(212,175,55,0.4)] mt-8 uppercase">
              {f.num} — {f.category}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
