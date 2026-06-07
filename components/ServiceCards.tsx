"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "End-to-End Solutions",
    desc: "From structural engineering and material sourcing to on-site installation and finish — managed entirely in-house.",
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7 stroke-[#D4AF37] fill-none" strokeWidth={1.2}>
        <circle cx="16" cy="16" r="12" />
        <path d="M10 16h12M16 10v12" />
      </svg>
    ),
    highlight: false,
  },
  {
    title: "Custom Material Selection",
    desc: "Access to the world's finest steel, glass, stone, solid hardwoods, and specialist alloys — curated for each project.",
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7 stroke-[#D4AF37] fill-none" strokeWidth={1.2}>
        <rect x="4" y="4" width="24" height="24" rx="3" />
        <line x1="4" y1="16" x2="28" y2="16" />
        <line x1="16" y1="4" x2="16" y2="28" />
      </svg>
    ),
    highlight: true,
  },
  {
    title: "3D Rendering & Approval",
    desc: "Photo-real renders and structural models are produced before any material is cut — zero surprises on install day.",
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7 stroke-[#D4AF37] fill-none" strokeWidth={1.2}>
        <polygon points="16,4 28,28 4,28" />
        <circle cx="16" cy="20" r="3" />
      </svg>
    ),
    highlight: false,
  },
  {
    title: "Global Installation",
    desc: "Our specialist fit-out teams operate across Europe, the Middle East, and Asia — delivering to 24 countries.",
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7 stroke-[#D4AF37] fill-none" strokeWidth={1.2}>
        <circle cx="16" cy="16" r="12" />
        <ellipse cx="16" cy="16" rx="5" ry="12" />
        <line x1="4" y1="16" x2="28" y2="16" />
      </svg>
    ),
    highlight: false,
  },
];

export default function ServiceCards() {
  return (
    <section className="bg-[#F7F6F3] px-[8vw] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] mb-5"
        >
          What We Offer
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="text-[clamp(28px,3.5vw,44px)] font-light leading-[1.12] tracking-[-0.02em] text-[#0F0F0F] max-w-[440px] mb-14"
        >
          A complete service
          <br />
          <strong className="font-semibold">for every project</strong>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" as const, delay: i * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className={`relative rounded-2xl p-8 cursor-default transition-shadow duration-300
                ${card.highlight
                  ? "bg-[#0F0F0F] text-white shadow-[0_24px_60px_rgba(0,0,0,0.18)]"
                  : "bg-white border border-[#E8E5E0] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)]"
                }`}
            >
              {card.highlight && (
                <div className="absolute top-4 right-4 text-[8px] tracking-[0.2em] uppercase text-[#D4AF37] border border-[rgba(212,175,55,0.3)] px-2.5 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">{card.icon}</div>

              <h3 className={`text-[14px] font-medium mb-3 tracking-[0.01em] ${
                card.highlight ? "text-white" : "text-[#0F0F0F]"
              }`}>
                {card.title}
              </h3>

              <p className={`text-[12px] font-light leading-[1.85] ${
                card.highlight ? "text-white/45" : "text-[#888]"
              }`}>
                {card.desc}
              </p>

              <div className="w-5 h-[1px] bg-[#D4AF37] mt-6 opacity-60" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
