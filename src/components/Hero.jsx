import { useEffect, useState } from "react";
import { siteConfig } from "../config/site";

export default function Hero() {
  const heroImages = [
    "/images/hero-bg.jpg",
    "/images/hero-bg2.jpg",
    "/images/hero-bg3.jpg",
    "/images/hero-bg4.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isCompactHero, setIsCompactHero] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const connection = navigator.connection;

    const updateMode = () => {
      const saveData = Boolean(connection?.saveData);
      const slowConnection = Boolean(connection && ["slow-2g", "2g"].includes(connection.effectiveType));
      setIsCompactHero(media.matches || saveData || slowConnection);
    };

    updateMode();
    media.addEventListener("change", updateMode);
    connection?.addEventListener?.("change", updateMode);

    return () => {
      media.removeEventListener("change", updateMode);
      connection?.removeEventListener?.("change", updateMode);
    };
  }, []);

  useEffect(() => {
    if (isCompactHero) return undefined;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isCompactHero]);

  const activeBackground = heroImages[isCompactHero ? 0 : currentImage];

  return (
    <section id="hero" className="relative flex min-h-screen flex-col overflow-hidden px-4 pt-24 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-[background-image] duration-1000 ease-out will-change-[background-image]"
        style={{ backgroundImage: `url(${activeBackground})` }}
      />
      <div
        className={`absolute inset-0 ${
          isCompactHero
            ? "bg-[linear-gradient(180deg,rgba(7,17,31,0.36)_0%,rgba(7,17,31,0.82)_65%,rgba(7,17,31,0.96)_100%)]"
            : "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_32%),linear-gradient(180deg,rgba(7,17,31,0.28)_0%,rgba(7,17,31,0.72)_55%,rgba(7,17,31,0.94)_100%)]"
        }`}
      />
      {!isCompactHero && (
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(162,31,59,0.08),transparent_40%,rgba(20,28,64,0.2))]" />
      )}

      <div className={`relative z-10 flex flex-1 items-center justify-center ${isCompactHero ? "py-8 sm:py-10" : "py-10 sm:py-12 lg:py-14"}`}>
        <div className="w-full max-w-5xl">
          <div className={`relative overflow-hidden premium-panel ${isCompactHero ? "p-5 sm:p-7" : "p-6 sm:p-8 lg:p-12"}`}>
            <div
              className={`absolute inset-0 ${
                isCompactHero
                  ? "bg-[radial-gradient(circle_at_top_left,rgba(162,31,59,0.1),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))]"
                  : "bg-[radial-gradient(circle_at_top_left,rgba(162,31,59,0.16),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]"
              }`}
            />
            <div className={`absolute -left-16 top-0 ${isCompactHero ? "h-28 w-28" : "h-44 w-44"} rounded-full bg-[#a21f3b]/20 blur-3xl`} />
            <div className={`absolute -right-16 bottom-0 ${isCompactHero ? "h-32 w-32" : "h-52 w-52"} rounded-full bg-[#141c40]/35 blur-3xl`} />

            <div className="relative">
              <div className="section-kicker animate-softFloat w-fit border-white/20 bg-black/20 text-white/80">
                Desde 1958
              </div>

              <h1
                className={`${isCompactHero ? "mt-4 text-3xl sm:text-4xl lg:text-6xl" : "mt-5 text-4xl sm:text-5xl lg:text-7xl"} max-w-4xl font-montserrat font-bold leading-tight text-white`}
                style={{ textShadow: "0 18px 40px rgba(0,0,0,0.35)" }}
              >
                A Renovadora de Estofados JF
              </h1>

              <p className={`${isCompactHero ? "mt-4 text-sm leading-7 sm:text-base" : "mt-6 text-base leading-8 sm:text-lg lg:text-xl"} max-w-2xl text-[#ebefff]/85`}>
                A <span className="font-semibold text-white">{siteConfig.siteName}</span> transforma sofás, poltronas e cadeiras,
                trazendo conforto e modernidade para sua casa.
              </p>

              <div className={`${isCompactHero ? "mt-6" : "mt-8"} flex flex-col gap-3 sm:flex-row sm:items-center`}>
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#a21f3b] px-7 py-3.5 font-semibold text-white shadow-[0_18px_40px_rgba(162,31,59,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#bb2a4b]"
                >
                  Fale Conosco
                </a>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white/90 backdrop-blur-md transition-all duration-300 hover:bg-white/10"
                >
                  Conhecer a história
                </a>
              </div>

              <div className={`${isCompactHero ? "mt-6 gap-2 sm:grid-cols-3 sm:gap-3" : "mt-8 gap-2 sm:grid-cols-3 sm:gap-3"} grid`}>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 backdrop-blur-sm">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">Tradição</p>
                  <p className="mt-1 text-sm font-medium text-white/90">Mais de 60 anos</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 backdrop-blur-sm">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">Atendimento</p>
                  <p className="mt-1 text-sm font-medium text-white/90">Personalizado e ágil</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 backdrop-blur-sm">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">Qualidade</p>
                  <p className="mt-1 text-sm font-medium text-white/90">Acabamento premium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`relative z-10 flex justify-center ${isCompactHero ? "pb-6 sm:pb-8" : "pb-3 sm:pb-4 lg:pb-6"}`}>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`group hero-scroll-button animate-softBounce ${isCompactHero ? "scale-95" : ""}`}
          aria-label="Ir para a próxima seção"
        >
          <svg className="h-6 w-6 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0 6-6m-6 6-6-6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
