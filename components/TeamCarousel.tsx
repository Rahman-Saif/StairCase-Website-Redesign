"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";
import TeamCard, { type TeamMember } from "./TeamCard";

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Nicolas Hurst",
    designation: "Founder & CEO",
    imageGradient: "bg-gradient-to-br from-[#2a2218] via-[#1a1610] to-[#0f0e0c]",
    imageSrc: "/man1.png",
    initials: "NH",
  },
  {
    id: 2,
    name: "Léa Fontaine",
    designation: "Head of Design",
    imageGradient: "bg-gradient-to-br from-[#1c2228] via-[#141a20] to-[#0c1016]",
    imageSrc: "/man2.png",
    initials: "LF",
  },
  {
    id: 3,
    name: "Marco Beretti",
    designation: "Lead Engineer",
    imageGradient: "bg-gradient-to-br from-[#1a1c2a] via-[#12141e] to-[#0e0f18]",
    imageSrc: "/man3.png",
    initials: "MB",
  },
  {
    id: 4,
    name: "Sofie Andersen",
    designation: "Project Director",
    imageGradient: "bg-gradient-to-br from-[#1e1a14] via-[#16130e] to-[#100e0a]",
    imageSrc: "/man4.png",
    initials: "SA",
  },
];

export default function TeamCarousel() {
  const [activeId, setActiveId] = useState<number>(1);

  // Mobile swipe state
  const [mobileIndex, setMobileIndex] = useState(0);
  const dragX = useMotionValue(0);

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    const threshold = 60;
    if (info.offset.x < -threshold && mobileIndex < teamMembers.length - 1) {
      setMobileIndex((i) => i + 1);
    } else if (info.offset.x > threshold && mobileIndex > 0) {
      setMobileIndex((i) => i - 1);
    }
    dragX.set(0);
  };

  return (
    <section className="bg-[#0F0F0F] px-6 md:px-[8vw] py-24 md:py-36 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] mb-4"
            >
              The People Behind It
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="text-[clamp(32px,4vw,52px)] font-light leading-[1.1] tracking-[-0.02em] text-white"
            >
              Meet the{" "}
              <span className="font-semibold italic">Team</span>
            </motion.h2>
          </div>

          {/* Mobile dot indicators */}
          <div className="flex gap-2 md:hidden">
            {teamMembers.map((_, i) => (
              <button
                key={i}
                onClick={() => setMobileIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === mobileIndex ? "bg-[#D4AF37] w-5" : "bg-white/20"
                }`}
              />
            ))}
          </div>

          {/* Desktop: active name label */}
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="hidden md:flex items-center gap-3"
          >
            <span className="text-[10px] tracking-[0.15em] uppercase text-white/30">
              Currently viewing
            </span>
            <span className="text-[13px] font-medium text-white tracking-[0.04em]">
              {teamMembers.find((m) => m.id === activeId)?.name}
            </span>
          </motion.div>
        </div>

        {/* ─── DESKTOP CAROUSEL ─── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="hidden md:flex gap-3 h-[480px]"
        >
          {teamMembers.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
              isActive={activeId === member.id}
              onHover={() => setActiveId(member.id)}
              onLeave={() => {}}
              onClick={() => setActiveId(member.id)}
            />
          ))}
        </motion.div>

        {/* ─── MOBILE SWIPEABLE CAROUSEL ─── */}
        <div className="md:hidden relative overflow-hidden rounded-2xl">
          <motion.div
            className="flex"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={handleDragEnd}
            animate={{ x: -mobileIndex * 100 + "%" }}
            transition={{ type: "spring", stiffness: 300, damping: 38 }}
            style={{ touchAction: "pan-y" }}
          >
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="min-w-full relative rounded-2xl overflow-hidden"
                style={{ height: 440 }}
              >
                {member.imageSrc ? (
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className={`absolute inset-0 ${member.imageGradient}`} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                {/* Initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[56px] font-light text-white/30 tracking-wider">
                    {member.initials}
                  </span>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-[9px] tracking-[0.22em] uppercase text-[#D4AF37] mb-2 font-medium">
                    {member.designation}
                  </p>
                  <p className="text-white font-normal text-[20px] tracking-[0.01em]">
                    {member.name}
                  </p>
                  <div className="h-[1.5px] w-7 bg-[#D4AF37] mt-3" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Desktop navigation row */}
        <div className="hidden md:flex items-center justify-between mt-8">
          <div className="flex gap-2">
            {teamMembers.map((m) => (
              <button
                key={m.id}
                onClick={() => setActiveId(m.id)}
                className={`h-[2px] rounded-full transition-all duration-400 ${
                  m.id === activeId ? "w-8 bg-[#D4AF37]" : "w-4 bg-white/15 hover:bg-white/30"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                const idx = teamMembers.findIndex((m) => m.id === activeId);
                const prev = teamMembers[(idx - 1 + teamMembers.length) % teamMembers.length];
                setActiveId(prev.id);
              }}
              className="w-9 h-9 rounded-full border border-white/10 text-white/40 hover:border-white/30 hover:text-white/70 flex items-center justify-center transition-all duration-200 text-sm"
            >
              ←
            </button>
            <button
              onClick={() => {
                const idx = teamMembers.findIndex((m) => m.id === activeId);
                const next = teamMembers[(idx + 1) % teamMembers.length];
                setActiveId(next.id);
              }}
              className="w-9 h-9 rounded-full border border-white/10 text-white/40 hover:border-white/30 hover:text-white/70 flex items-center justify-center transition-all duration-200 text-sm"
            >
              →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
