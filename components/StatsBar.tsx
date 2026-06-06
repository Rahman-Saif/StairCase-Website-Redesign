"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { num: 340, suffix: "+", label: "Projects Completed" },
  { num: 16, suffix: "+", label: "Years of Mastery" },
  { num: 24, suffix: "", label: "Countries" },
  { num: 98, suffix: "%", label: "Client Satisfaction" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-[28px] font-light text-white tracking-[-0.02em]">
      {count}
      <span className="text-[14px] text-[#D4AF37]">{suffix}</span>
    </span>
  );
}

export default function StatsBar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex justify-center bg-[#181818] border-t border-b border-[rgba(212,175,55,0.1)]"
    >
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`flex-1 max-w-[220px] py-8 px-10 text-center ${
            i < stats.length - 1 ? "border-r border-white/[0.06]" : ""
          }`}
        >
          <CountUp target={s.num} suffix={s.suffix} />
          <p className="text-[10px] font-normal tracking-[0.18em] uppercase text-white/35 mt-1.5">
            {s.label}
          </p>
        </div>
      ))}
    </motion.div>
  );
}
