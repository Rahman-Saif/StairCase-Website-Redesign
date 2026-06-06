"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Our Story", href: "/story" },
];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 h-[72px] transition-all duration-500 border-b
        ${scrolled
          ? "bg-[rgba(10,10,10,0.88)] border-[rgba(212,175,55,0.2)] backdrop-blur-2xl"
          : "bg-[rgba(15,15,15,0.35)] border-[rgba(212,175,55,0.1)] backdrop-blur-xl"
        }`}
    >
      {/* Logo */}
      <span className="text-[17px] font-semibold tracking-[0.22em] uppercase bg-gradient-to-r from-white via-white to-[#D4AF37] bg-clip-text text-transparent select-none">
        Aerostep
      </span>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-9 list-none">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-[11px] font-normal tracking-[0.1em] uppercase text-white/50 hover:text-white transition-colors duration-200 no-underline"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button className="hidden md:block text-[11px] font-medium tracking-[0.14em] uppercase px-6 py-[10px] border border-[rgba(212,175,55,0.55)] text-[#D4AF37] rounded-sm bg-transparent hover:bg-[rgba(212,175,55,0.08)] hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-300 cursor-pointer">
        Get a Quote
      </button>

      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-[1px] bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
        <span className={`block w-5 h-[1px] bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-[1px] bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute top-full left-0 right-0 bg-[rgba(10,10,10,0.97)] backdrop-blur-2xl border-b border-white/5 px-12 py-8 flex flex-col gap-6 md:hidden"
        >
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[12px] tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors no-underline"
            >
              {link}
            </a>
          ))}
          <button className="w-full text-[11px] font-medium tracking-[0.14em] uppercase px-6 py-3 border border-[rgba(212,175,55,0.55)] text-[#D4AF37] rounded-sm mt-2">
            Get a Quote
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
