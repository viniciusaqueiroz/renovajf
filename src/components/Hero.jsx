import { siteConfig } from "../config/site";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[100svh] flex-col overflow-hidden px-4 pt-24 sm:px-6 lg:px-10 xl:px-12">
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_28%),linear-gradient(180deg,rgba(7,17,31,0.34)_0%,rgba(7,17,31,0.74)_52%,rgba(7,17,31,0.96)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(162,31,59,0.1),transparent_44%,rgba(20,28,64,0.22))]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-1 items-center py-10 sm:py-12 lg:py-16">
        <div className="premium-panel grid w-full gap-8 overflow-hidden p-5 sm:p-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch lg:p-10 xl:p-12">
          <div className="relative flex min-h-[560px] flex-col justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(162,31,59,0.12),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 sm:p-7 lg:p-8 xl:p-10">
            <div className="absolute -left-14 top-0 h-36 w-36 rounded-full bg-[#a21f3b]/20 blur-3xl" />
            <div className="absolute -right-12 bottom-0 h-40 w-40 rounded-full bg-[#141c40]/30 blur-3xl" />

            <div className="relative">
              <div className="section-kicker animate-softFloat w-fit border-white/20 bg-black/20 text-white/80">
                Desde 1958
              </div>

              <h1
                className="mt-4 max-w-3xl font-montserrat text-[clamp(2.4rem,5vw,5.9rem)] font-bold leading-[0.95] tracking-[-0.04em] text-white"
                style={{ textShadow: "0 18px 40px rgba(0,0,0,0.35)" }}
              >
                A Renovadora de Estofados JF
              </h1>

              <p className="mt-5 max-w-2xl text-[clamp(1rem,1.15vw,1.25rem)] leading-8 text-[#ebefff]/84">
                A <span className="font-semibold text-white">{siteConfig.siteName}</span> transforma sofás, poltronas e cadeiras,
                trazendo conforto e modernidade para sua casa.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
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

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
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

          <aside className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-5 sm:p-7 lg:p-8 xl:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(162,31,59,0.14),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(20,28,64,0.3),transparent_30%)]" />
            <div className="relative flex h-full flex-col justify-between gap-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">Espaço</p>
                <h2 className="font-montserrat text-2xl font-semibold text-white sm:text-3xl">
                  Um visual mais leve para qualquer resolução
                </h2>
                <p className="max-w-md text-sm leading-7 text-white/70 sm:text-base">
                  O Hero agora usa uma imagem estática e tipografia fluida, reduzindo peso e evitando a sensação de zoom em telas menores.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-black/15 p-5 backdrop-blur-md">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">Layout</p>
                  <p className="mt-2 text-lg font-semibold text-white">Full width fluido</p>
                  <p className="mt-2 text-sm leading-7 text-white/70">Seções mais largas, com leitura confortável e menos sensação de zoom.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/15 p-5 backdrop-blur-md">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">Performance</p>
                  <p className="mt-2 text-lg font-semibold text-white">Uma imagem só</p>
                  <p className="mt-2 text-sm leading-7 text-white/70">Sem carrossel no background, sem troca periódica de imagens no topo.</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div className="relative z-10 flex justify-center pb-4 sm:pb-6 lg:pb-8">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group hero-scroll-button animate-softBounce"
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
