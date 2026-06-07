"use client";

import { motion } from "framer-motion";
import StackedImageGallery from "./StackedImageGallery";

const steps = [
  { num: "01", title: "Design Consultation", text: "We begin with a site visit and architectural review, aligning on vision, structural constraints, and budget." },
  { num: "02", title: "3D Engineering", text: "Detailed renders and structural models are produced and refined until every detail is perfect." },
  { num: "03", title: "Precision Manufacture", text: "Components are fabricated in our European atelier to sub-millimeter tolerances by master craftsmen." },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.75, ease: "easeOut" as const, delay },
});

export default function ServicesContent() {
  return (
    <section className="bg-[#0F0F0F] px-[8vw] py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center">

        {/* LEFT — text content */}
        <div>
          <motion.p {...fade(0)} className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] mb-5">
            How We Work
          </motion.p>

          <motion.h2 {...fade(0.1)} className="text-[clamp(32px,4vw,52px)] font-light leading-[1.1] tracking-[-0.022em] text-white mb-6">
            Architectural
            <br />
            <strong className="font-semibold">Excellence</strong>
            <br />
            <em className="font-light italic text-white/40">from first sketch</em>
          </motion.h2>

          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-10 h-[1.5px] bg-[#D4AF37] mb-8"
          />

          <motion.p {...fade(0.25)} className="text-[14px] font-light leading-[1.9] text-white/45 mb-10 max-w-[420px]">
            Every Aerostep project is managed as a singular collaboration between our engineering team and your architect. We bring structural ingenuity and artisan finish to every staircase we produce.
          </motion.p>

          {/* Steps */}
          <div className="space-y-7">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                {...fade(0.3 + i * 0.1)}
                className="flex gap-5 items-start"
              >
                <span className="text-[11px] font-light tracking-[0.1em] text-[#D4AF37] mt-0.5 min-w-[28px]">
                  {s.num}
                </span>
                <div>
                  <p className="text-[13px] font-medium text-white mb-1">{s.title}</p>
                  <p className="text-[12px] font-light leading-[1.8] text-white/38">{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT — stacked image gallery */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" as const, delay: 0.2 }}
        >
          <StackedImageGallery />
        </motion.div>
      </div>
    </section>
  );
}
