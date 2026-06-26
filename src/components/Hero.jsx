import { useEffect, useState } from "react";
import { siteConfig } from "../config/site";

const heroSlides = [
  "/images/bg hero/photosbychalo-small-office-4837892.jpg",
  "/images/bg hero/dawnfu-conference-room-386366.jpg",
  "/images/bg hero/pexels-cristian-rojas-8459996.jpg",
  "/images/lewisgoodphotos-fitness-4998981 (1).jpg",
].map((src) => encodeURI(src));

// Ajuste aqui para escurecer ou clarear a Hero sem mexer na estrutura.
const HERO_BASE_OVERLAY_OPACITY = 0.10;
const HERO_LINEAR_OVERLAY =
  "linear-gradient(90deg, rgba(3,8,16,0.78) 0%, rgba(3,8,16,0.72) 38%, rgba(3,8,16,0.62) 68%, rgba(3,8,16,0.48) 100%)";

const HERO_RADIAL_OVERLAY =
  "radial-gradient(circle at center, rgba(3,8,16,0.04) 0%, rgba(3,8,16,0.22) 55%, rgba(3,8,16,0.42) 100%)";

const slideStyle = (isActive) => ({
  opacity: isActive ? 1 : 0,
  transition: "opacity 900ms ease-out",
});

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const preloadedImages = heroSlides.map((src) => {
      const image = new Image();
      image.src = src;
      return image;
    });

    let timeoutId;
    const scheduleNext = () => {
      timeoutId = window.setTimeout(() => {
        setActiveSlide((current) => (current + 1) % heroSlides.length);
        scheduleNext();
      }, 1800);
    };

    scheduleNext();

    return () => {
      window.clearTimeout(timeoutId);
      preloadedImages.forEach((image) => {
        image.onload = null;
        image.onerror = null;
      });
    };
  }, []);

  return (
    <section id="hero" className="relative flex min-h-[100svh] overflow-hidden px-4 pt-24 sm:px-6 lg:px-10 xl:px-12">
      <div className="absolute inset-0">
        {heroSlides.map((src, index) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
            style={slideStyle(index === activeSlide)}
            loading="eager"
            fetchPriority={index === 0 ? "high" : "auto"}
          />
        ))}

        <div className="absolute inset-0" style={{ background: HERO_LINEAR_OVERLAY }} />
        <div className="absolute inset-0" style={{ background: HERO_RADIAL_OVERLAY }} />
        <div className="absolute inset-0 bg-[#030712]" style={{ opacity: HERO_BASE_OVERLAY_OPACITY }} />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#07111f] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-center pb-20 pt-8 text-center sm:pb-24 lg:pb-28">
        <div className="mx-auto max-w-3xl">
          <div
            id="hero-kicker"
            className="section-kicker mx-auto w-fit border-white/20 bg-black/20 text-white/80"
            style={{ scrollMarginTop: "6.5rem" }}
          >
            Desde 1974
          </div>

          <h1
            className="mt-4 max-w-3xl font-montserrat text-4xl font-bold leading-none text-white sm:text-5xl lg:text-6xl 2xl:text-[4.25rem]"
            style={{ textShadow: "0 18px 40px rgba(0,0,0,0.58)" }}
          >
            A Renovadora JF
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#ebefff]/90 sm:text-lg lg:text-xl">
            A <span className="font-semibold text-white">{siteConfig.siteName}</span> atende escritórios, empresas e academias
            com manutenção, revenda e reposição de peças para cadeiras e estofados técnicos.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#a21f3b] px-7 py-3.5 font-semibold text-white shadow-[0_18px_40px_rgba(162,31,59,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#bb2a4b]"
            >
              Solicitar atendimento
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white/90 backdrop-blur-md transition-all duration-300 hover:bg-white/10"
            >
              Ver soluções
            </a>
          </div>

          <div className="mx-auto mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
            <div className="border-t border-white/20 pt-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">Cadeiras</p>
              <p className="mt-1 text-sm font-medium text-white/90">Manutenção e revenda</p>
            </div>
            <div className="border-t border-white/20 pt-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">Peças</p>
              <p className="mt-1 text-sm font-medium text-white/90">Reposição técnica</p>
            </div>
            <div className="border-t border-white/20 pt-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">Academias</p>
              <p className="mt-1 text-sm font-medium text-white/90">Estofados técnicos</p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about-kicker"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#about-kicker")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="hero-scroll-button absolute bottom-2 left-1/2 z-10 -translate-x-1/2 sm:bottom-3 lg:bottom-4"
        aria-label="Ir para a próxima seção"
      >
        <svg className="h-6 w-6 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0 6-6m-6 6-6-6" />
        </svg>
      </a>
    </section>
  );
}
