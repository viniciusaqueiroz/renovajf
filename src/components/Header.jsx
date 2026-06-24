import { useState, useEffect } from "react";

const navItems = [
  { href: "#hero", label: "Início" },
  { href: "#about", label: "Sobre" },
  { href: "#gallery", label: "Galeria" },
  { href: "#services", label: "Serviços" },
  { href: "#contact", label: "Contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-3 pt-3 sm:px-4 sm:pt-4">
      <div
        className={`mx-auto max-w-7xl rounded-2xl border border-white/10 px-4 py-3 text-[#eef2ff] shadow-2xl shadow-black/25 backdrop-blur-xl transition-all duration-300 sm:px-6 ${
          isScrolled
            ? "bg-[#07111f]/85"
            : "bg-gradient-to-r from-[#081321]/85 via-[#101c33]/80 to-[#0b1525]/85"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <a href="#hero" className="inline-flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]">
            <img
              src="/images/logo-branca.png"
              alt="Logo RenovaJF"
              className={`w-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.25)] transition-all duration-300 ${
                isScrolled ? "h-9 sm:h-10" : "h-11 sm:h-12"
              }`}
            />
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-200/90 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-white/10 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Abrir menu"
          >
            <svg className={`h-6 w-6 transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`grid overflow-hidden transition-all duration-300 md:hidden ${
            isOpen ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <nav className="grid gap-2 rounded-2xl border border-white/10 bg-black/15 p-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-100 transition-all duration-300 hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
