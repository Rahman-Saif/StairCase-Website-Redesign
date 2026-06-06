"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Each item defines aspect ratio and image source
const galleryItems = [
  {
    id: 0,
    label: "Villa Noir",
    tag: "Steel · Glass",
    aspect: "portrait",
    image: "/s1.png",
  },
  {
    id: 1,
    label: "Penthouse Oslo",
    tag: "Floating · Walnut",
    aspect: "landscape",
    image: "/s2.png",
  },
  {
    id: 2,
    label: "Maison Blanc",
    tag: "Spiral · Marble",
    aspect: "square",
    image: "/s3.png",
  },
  {
    id: 3,
    label: "Residence K",
    tag: "Minimal · Oak",
    aspect: "portrait",
    image: "/s4.png",
  },
  {
    id: 4,
    label: "Casa Bruna",
    tag: "Floating · Stone",
    aspect: "landscape",
    image: "/s5.png",
  },
  {
    id: 5,
    label: "Studio Alp",
    tag: "Glass · Steel",
    aspect: "square",
    image: "/s6.png",
  },
  {
    id: 6,
    label: "West End",
    tag: "Timber · Brass",
    aspect: "landscape",
    image: "/s7.png",
  },
  {
    id: 7,
    label: "The Lodge",
    tag: "Stone · Oak",
    aspect: "portrait",
    image: "/s8.png",
  },
];

const aspectClasses: Record<string, string> = {
  portrait:  "row-span-2",
  landscape: "col-span-2",
  square:    "",
};

const aspectRatioStyles: Record<string, string> = {
  portrait:  "aspect-[2/3]",
  landscape: "aspect-[16/7]",
  square:    "aspect-square",
};

export default function MasonryGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const open  = useCallback((id: number) => setLightbox(id), []);
  const close = useCallback(() => setLightbox(null), []);
  const prev  = useCallback(() => setLightbox((id) =>
    id !== null ? (id - 1 + galleryItems.length) % galleryItems.length : null), []);
  const next  = useCallback(() => setLightbox((id) =>
    id !== null ? (id + 1) % galleryItems.length : null), []);

  const active = lightbox !== null ? galleryItems[lightbox] : null;

  return (
    <section className="bg-[#0F0F0F] px-[8vw] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] mb-5"
        >
          Selected Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="text-[clamp(28px,3.5vw,44px)] font-light leading-[1.12] tracking-[-0.02em] text-white max-w-[440px] mb-14"
        >
          The Portfolio
          <br />
          <strong className="font-semibold">Gallery</strong>
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[160px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: (i % 4) * 0.07 }}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${aspectClasses[item.aspect]}`}
              onClick={() => open(item.id)}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
              </div>

              {/* SVG Stair deco */}
              <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.10] w-3/4 h-3/4" viewBox="0 0 200 200" fill="none">
                <line x1="20" y1="180" x2="180" y2="180" stroke="#D4AF37" strokeWidth="0.8"/>
                <line x1="20" y1="180" x2="20" y2="120" stroke="#D4AF37" strokeWidth="0.8"/>
                <line x1="20" y1="120" x2="80" y2="120" stroke="#D4AF37" strokeWidth="0.8"/>
                <line x1="80" y1="120" x2="80" y2="60" stroke="#D4AF37" strokeWidth="0.8"/>
                <line x1="80" y1="60" x2="140" y2="60" stroke="#D4AF37" strokeWidth="0.8"/>
                <line x1="140" y1="60" x2="140" y2="20" stroke="#D4AF37" strokeWidth="0.8"/>
                <line x1="140" y1="20" x2="180" y2="20" stroke="#D4AF37" strokeWidth="0.8"/>
              </svg>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-400" />

              {/* Bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-350">
                <p className="text-[8px] tracking-[0.2em] uppercase text-[#D4AF37] mb-1">{item.tag}</p>
                <p className="text-[13px] font-normal text-white">{item.label}</p>
              </div>

              {/* Expand icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 1h4M1 1v4M11 11H7M11 11V7M1 11h4M1 11V7M11 1H7M11 1V5" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─── LIGHTBOX ─── */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm px-4"
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-2xl rounded-2xl overflow-hidden"
              style={{ aspectRatio: "16/10" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={active.image}
                  alt={active.label}
                  fill
                  sizes="(min-width: 1024px) 50vw, 80vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-[9px] tracking-[0.22em] uppercase text-[#D4AF37] mb-2">{active.tag}</p>
                <p className="text-white text-[22px] font-light">{active.label}</p>
                <div className="w-7 h-[1.5px] bg-[#D4AF37] mt-3" />
              </div>

              {/* Close */}
              <button
                onClick={close}
                className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/40 flex items-center justify-center transition-all text-lg"
              >
                ×
              </button>

              {/* Counter */}
              <div className="absolute top-4 left-4 text-[10px] tracking-[0.15em] text-white/35">
                {(lightbox! + 1).toString().padStart(2, "0")} / {galleryItems.length.toString().padStart(2, "0")}
              </div>
            </motion.div>

            {/* Prev / Next */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/15 text-white/40 hover:border-white/35 hover:text-white flex items-center justify-center transition-all"
            >←</button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/15 text-white/40 hover:border-white/35 hover:text-white flex items-center justify-center transition-all"
            >→</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
