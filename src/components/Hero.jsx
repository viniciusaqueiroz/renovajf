import { businessContent, siteConfig } from "../config/site";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[100svh] overflow-hidden px-4 pt-24 sm:px-6 lg:px-10 xl:px-12">
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,11,20,0.9)_0%,rgba(5,11,20,0.68)_46%,rgba(5,11,20,0.34)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#07111f] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-center pb-28 pt-10 text-center sm:pb-32 lg:pb-36">
        <div className="mx-auto max-w-4xl">
          <div className="section-kicker mx-auto w-fit border-white/20 bg-black/20 text-white/80">Desde 1974</div>

          <h1
            className="mt-4 max-w-4xl font-montserrat text-5xl font-bold leading-none text-white sm:text-6xl lg:text-7xl"
            style={{ textShadow: "0 18px 40px rgba(0,0,0,0.38)" }}
          >
            {siteConfig.siteName}
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#ebefff]/88 sm:text-lg lg:text-xl">
            {businessContent.hero.headline}
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#ebefff]/74 sm:text-base lg:text-lg">
            {businessContent.hero.subheadline}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            {businessContent.hero.badges.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/82 backdrop-blur-md"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#a21f3b] px-7 py-3.5 font-semibold text-white shadow-[0_18px_40px_rgba(162,31,59,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#bb2a4b]"
            >
              Falar no WhatsApp
            </a>
            <a
              href="#solutions"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#solutions")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white/90 backdrop-blur-md transition-all duration-300 hover:bg-white/10"
            >
              Ver solucoes
            </a>
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
            <div className="border-t border-white/20 pt-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">Tradicao</p>
              <p className="mt-1 text-sm font-medium text-white/90">Desde 1974</p>
            </div>
            <div className="border-t border-white/20 pt-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">Atendimento</p>
              <p className="mt-1 text-sm font-medium text-white/90">Corporativo e agil</p>
            </div>
            <div className="border-t border-white/20 pt-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">Qualidade</p>
              <p className="mt-1 text-sm font-medium text-white/90">Acabamento premium</p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#solutions"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#solutions")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="hero-scroll-button group absolute bottom-4 left-1/2 z-10 -translate-x-1/2 sm:bottom-5 lg:bottom-6"
        aria-label="Ir para a proxima secao"
      >
        <svg className="h-6 w-6 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0 6-6m-6 6-6-6" />
        </svg>
      </a>
    </section>
  );
}
