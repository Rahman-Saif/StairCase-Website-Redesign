"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative h-[70vh] min-h-[650px] overflow-hidden">
      <img
        src="/s8.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <p className="mb-5 tracking-[0.35em] text-[#C8B08A] text-sm">
              CONTACT US
            </p>

            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
              Lets Create Something Exceptional Together
            </h1>

            <p className="mt-8 text-lg text-neutral-200 leading-relaxed max-w-2xl">
              Whether youre planning a residential transformation,
              commercial project, or custom furnishing solution,
              our team is ready to bring your vision to life.
            </p>

            <button className="mt-10 rounded-full border border-[#C8B08A] px-8 py-4 text-white transition-all duration-500 hover:bg-[#C8B08A] hover:text-black">
              Schedule a Consultation
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}