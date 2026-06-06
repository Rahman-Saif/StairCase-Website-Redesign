"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const images = [
  {
    id: 0,
    label: "Villa Noir — Geneva",
    tag: "Steel · Glass",
    image: "/s1.png",
  },
  {
    id: 1,
    label: "Penthouse Oslo",
    tag: "Floating · Walnut",
    image: "/s2.png",
  },
  {
    id: 2,
    label: "Maison Blanc — Paris",
    tag: "Spiral · Marble",
    image: "/s3.png",
  },
  {
    id: 3,
    label: "Residence K — Tokyo",
    tag: "Minimal · Oak",
    image: "/s4.png",
  },
];

// Stacking offsets for background cards
const stackOffsets = [
  { rotate: 0, x: 0, y: 0, scale: 1 },
  { rotate: 2.5, x: 10, y: -6, scale: 0.96 },
  { rotate: -2, x: -8, y: -12, scale: 0.93 },
  { rotate: 3.5, x: 14, y: -18, scale: 0.90 },
];

export default function StackedImageGallery() {
  const [stack, setStack] = useState(images);
  const [isAnimating, setIsAnimating] = useState(false);

  const cycleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setStack((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
    setTimeout(() => setIsAnimating(false), 500);
  };

  const cyclePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setStack((prev) => {
      const last = prev[prev.length - 1];
      return [last, ...prev.slice(0, -1)];
    });
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="relative flex items-center justify-center" style={{ height: 480 }}>
      {/* Card stack */}
      <div className="relative w-full max-w-[400px] mx-auto" style={{ height: 420 }}>
        {[...stack].reverse().map((img, reversedIdx) => {
          const idx = stack.length - 1 - reversedIdx; // 0 = top
          const offset = stackOffsets[Math.min(idx, stackOffsets.length - 1)];
          const isTop = idx === 0;

          return (
            <motion.div
              key={img.id}
              animate={{
                rotate: offset.rotate,
                x: offset.x,
                y: offset.y,
                scale: offset.scale,
                zIndex: stack.length - idx,
              }}
              transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 rounded-2xl overflow-hidden cursor-pointer select-none"
              style={{
                boxShadow: isTop
                  ? "0 32px 80px rgba(0,0,0,0.45)"
                  : "0 16px 40px rgba(0,0,0,0.25)",
              }}
              onClick={isTop ? cycleNext : undefined}
            >
              <Image
                src={img.image}
                alt={img.label}
                fill
                className="object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Decorative SVG on top card */}
              {isTop && (
                <svg
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.10]"
                  width="240" height="240" viewBox="0 0 240 240" fill="none"
                >
                  <line x1="20" y1="220" x2="220" y2="220" stroke="#D4AF37" strokeWidth="0.8"/>
                  <line x1="20" y1="220" x2="20" y2="160" stroke="#D4AF37" strokeWidth="0.8"/>
                  <line x1="20" y1="160" x2="80" y2="160" stroke="#D4AF37" strokeWidth="0.8"/>
                  <line x1="80" y1="160" x2="80" y2="100" stroke="#D4AF37" strokeWidth="0.8"/>
                  <line x1="80" y1="100" x2="140" y2="100" stroke="#D4AF37" strokeWidth="0.8"/>
                  <line x1="140" y1="100" x2="140" y2="40" stroke="#D4AF37" strokeWidth="0.8"/>
                  <line x1="140" y1="40" x2="220" y2="40" stroke="#D4AF37" strokeWidth="0.8"/>
                  <line x1="220" y1="40" x2="220" y2="220" stroke="#D4AF37" strokeWidth="0.3" strokeDasharray="5 4"/>
                  <circle cx="20" cy="160" r="3" fill="#D4AF37" opacity="0.7"/>
                  <circle cx="80" cy="100" r="3" fill="#D4AF37" opacity="0.7"/>
                  <circle cx="140" cy="40" r="3" fill="#D4AF37" opacity="0.7"/>
                </svg>
              )}

              {/* Info — top card only */}
              {isTop && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="absolute bottom-0 left-0 right-0 p-6"
                >
                  <p className="text-[9px] tracking-[0.22em] uppercase text-[#D4AF37] mb-1.5 font-medium">
                    {img.tag}
                  </p>
                  <p className="text-white text-[17px] font-normal tracking-[0.01em]">
                    {img.label}
                  </p>
                  <div className="w-6 h-[1.5px] bg-[#D4AF37] mt-3" />
                </motion.div>
              )}

              {/* Click hint on top card */}
              {isTop && (
                <div className="absolute top-5 right-5">
                  <span className="text-[9px] tracking-[0.15em] uppercase text-white/30 border border-white/10 px-3 py-1.5 rounded-full">
                    Tap to browse
                  </span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={cyclePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-white/10 text-white/35 hover:border-white/30 hover:text-white/70 flex items-center justify-center transition-all duration-200 text-sm z-20"
      >
        ←
      </button>
      <button
        onClick={cycleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-white/10 text-white/35 hover:border-white/30 hover:text-white/70 flex items-center justify-center transition-all duration-200 text-sm z-20"
      >
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-1.5">
        {stack.map((img, i) => (
          <div
            key={img.id}
            className={`rounded-full transition-all duration-300 ${
              i === 0 ? "w-5 h-1.5 bg-[#D4AF37]" : "w-1.5 h-1.5 bg-white/15"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
