"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface TeamMember {
  id: number;
  name: string;
  designation: string;
  imageGradient: string; // Used as placeholder — replace with real image src
  imageSrc?: string;     // Optional real image path
  initials: string;
}

interface TeamCardProps {
  member: TeamMember;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}

export default function TeamCard({
  member,
  isActive,
  onHover,
  onLeave,
  onClick,
}: TeamCardProps) {
  return (
    <motion.div
      layout
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      animate={{
        flex: isActive ? 2.6 : 1,
        opacity: isActive ? 1 : 0.72,
      }}
      transition={{
        flex: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: 0.3 },
      }}
      className="relative overflow-hidden rounded-2xl cursor-pointer min-w-0 shrink-0"
      style={{ minWidth: 90 }}
    >
      {/* Image / Placeholder */}
      <div className="absolute inset-0" style={{ minHeight: 460 }}>
        {member.imageSrc ? (
          <Image src={member.imageSrc} alt={member.name} fill className="object-cover" />
        ) : (
          <div className={`w-full h-full ${member.imageGradient}`} />
        )}
      </div>

      {/* Initials placeholder — remove once real images are added */}
      <motion.div
        animate={{ opacity: isActive ? 0 : 0.45 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <span className="text-[40px] font-light text-white/60 tracking-wider select-none">
          {member.initials}
        </span>
      </motion.div>

      {/* Gradient overlay — always present */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

      {/* Bottom info — fades/slides in when active */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <motion.div
          animate={{
            y: isActive ? 0 : 6,
            opacity: isActive ? 1 : 0.5,
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Designation chip */}
          <motion.p
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 8 }}
            transition={{ duration: 0.3, delay: isActive ? 0.08 : 0 }}
            className="text-[9px] tracking-[0.22em] uppercase text-[#D4AF37] mb-2 font-medium"
          >
            {member.designation}
          </motion.p>

          <p className="text-white font-normal text-[17px] tracking-[0.01em] leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
            {member.name}
          </p>

          {/* Expand indicator */}
          <motion.div
            animate={{ width: isActive ? 28 : 0, opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="h-[1.5px] bg-[#D4AF37] mt-3 origin-left"
          />
        </motion.div>
      </div>

      {/* Subtle top-right label when collapsed */}
      <motion.div
        animate={{ opacity: isActive ? 0 : 0.55 }}
        transition={{ duration: 0.25 }}
        className="absolute top-4 left-0 right-0 flex justify-center"
      >
        <div
          className="writing-mode-vertical text-[9px] tracking-[0.15em] uppercase text-white/60 font-light"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          {member.name.split(" ")[0]}
        </div>
      </motion.div>

      {/* Active ring */}
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 rounded-2xl ring-1 ring-[#D4AF37]/30 pointer-events-none"
        />
      )}
    </motion.div>
  );
}
