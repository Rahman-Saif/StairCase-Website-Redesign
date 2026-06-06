const footerLinks = ["Projects", "Materials", "Process", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/[0.06] px-[8vw] py-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <span className="text-[14px] font-semibold tracking-[0.22em] uppercase bg-gradient-to-r from-white to-[#D4AF37] bg-clip-text text-transparent">
        Aerostep
      </span>

      <div className="flex gap-7">
        {footerLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="text-[10px] tracking-[0.12em] uppercase text-white/28 hover:text-white/65 transition-colors duration-200 no-underline"
          >
            {link}
          </a>
        ))}
      </div>

      <p className="text-[10px] text-white/18 tracking-[0.05em]">
        © 2025 Aerostep. All rights reserved.
      </p>
    </footer>
  );
}
