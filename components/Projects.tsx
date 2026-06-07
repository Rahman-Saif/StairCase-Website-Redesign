"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "Villa Noir",
    location: "Geneva, Switzerland",
    tag: "Steel · Glass",
    image: "/project1.png",
  },
  {
    name: "Penthouse Oslo",
    location: "Oslo, Norway",
    tag: "Floating · Walnut",
    image: "/minimal-project-2.png",
  },
  {
    name: "Maison Blanc",
    location: "Paris, France",
    tag: "Spiral · Marble",
    image: "/project3.png",
  },
];

export default function Projects() {
  return (
    <section className="pb-[120px] bg-[#0F0F0F]">
      <div className="px-[8vw] mb-12">
        <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] mb-5">
          Selected Work
        </p>

        <h2 className="text-[clamp(28px,3.5vw,48px)] font-light leading-[1.15] tracking-[-0.02em] text-white">
          Recent Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] px-[8vw]">
        {projects.map((p, i) => (
          <div
            key={p.name}
            className="relative overflow-hidden cursor-pointer group aspect-[3/4]"
          >
            {/* IMAGE BACKGROUND */}
            <div
              className="absolute inset-0 scale-100 group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                backgroundImage: `url(${p.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* DARK CINEMATIC OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

            {/* subtle vignette glow */}
            <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500 bg-radial-gradient" />

            {/* decorative lines (your original style kept) */}
            <svg
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.10]"
              width="260"
              height="260"
              viewBox="0 0 260 260"
              fill="none"
            >
              <line x1="30" y1="230" x2="230" y2="230" stroke="#D4AF37" strokeWidth="0.7" />
              <line x1="30" y1="230" x2="30" y2="170" stroke="#D4AF37" strokeWidth="0.7" />
              <line x1="30" y1="170" x2="90" y2="170" stroke="#D4AF37" strokeWidth="0.7" />
              <line x1="90" y1="170" x2="90" y2="110" stroke="#D4AF37" strokeWidth="0.7" />
              <line x1="90" y1="110" x2="150" y2="110" stroke="#D4AF37" strokeWidth="0.7" />
              <line x1="150" y1="110" x2="150" y2="50" stroke="#D4AF37" strokeWidth="0.7" />
              <line x1="150" y1="50" x2="230" y2="50" stroke="#D4AF37" strokeWidth="0.7" />
              <line
                x1="230"
                y1="50"
                x2="230"
                y2="230"
                stroke="#D4AF37"
                strokeWidth="0.3"
                strokeDasharray="4 4"
              />
            </svg>

            {/* CONTENT */}
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-[9px] tracking-[0.22em] uppercase text-[#D4AF37] mb-2">
                {p.tag}
              </p>

              <p className="text-[18px] font-normal text-white tracking-[0.01em] group-hover:translate-x-1 transition-transform duration-500">
                {p.name}
              </p>

              <p className="text-[11px] text-white/40 mt-1 tracking-[0.05em]">
                {p.location}
              </p>
            </div>

            {/* VIEW BUTTON */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px]">
              <span className="text-[10px] tracking-[0.25em] uppercase text-white border border-white/20 px-6 py-2.5 bg-black/30">
                View Project
              </span>
            </div>

            {/* subtle edge glow on hover */}
            <div className="absolute inset-0 ring-1 ring-white/0 group-hover:ring-white/10 transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
