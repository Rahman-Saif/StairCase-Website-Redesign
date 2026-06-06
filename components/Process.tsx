"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Consultation",
    text: "We visit your site, study the architecture, and align on vision, materials, and budget.",
  },
  {
    num: "02",
    title: "3D Design",
    text: "Our designers produce detailed renders and engineering models for your approval.",
  },
  {
    num: "03",
    title: "Manufacturing",
    text: "Each component is fabricated in our European workshop to exact tolerances.",
  },
  {
    num: "04",
    title: "Installation",
    text: "Our specialist team installs and finishes on-site, leaving your space immaculate.",
  },
];

export default function Process() {
  return (
    <section className="px-[8vw] py-[120px] bg-[#181818] border-t border-b border-white/[0.05]">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] mb-5"
      >
        How We Work
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-[clamp(28px,3.5vw,48px)] font-light leading-[1.15] tracking-[-0.02em] text-white max-w-[400px] mb-16"
      >
        From concept to installation
      </motion.h2>

      <div className="relative flex flex-col md:flex-row gap-0">
        {/* Gold connector line (desktop) */}
        <div className="hidden md:block absolute top-6 left-6 right-6 h-[0.5px] bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.35)] to-transparent" />

        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            className="flex-1 px-8 text-center"
          >
            {/* Dot */}
            <div className="w-12 h-12 rounded-full border border-[rgba(212,175,55,0.4)] bg-[rgba(212,175,55,0.06)] flex items-center justify-center mx-auto mb-7 relative z-10">
              <span className="text-[11px] text-[#D4AF37] tracking-[0.08em]">{s.num}</span>
            </div>
            <h3 className="text-[14px] font-medium text-white mb-2.5">{s.title}</h3>
            <p className="text-[12px] font-light leading-[1.85] text-white/38">{s.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
