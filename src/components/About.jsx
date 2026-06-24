import { businessContent } from "../config/site";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(162,31,59,0.1),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(20,28,64,0.28),transparent_28%)]" />

      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 text-center">
          <div className="section-kicker mx-auto">{businessContent.about.kicker}</div>
          <h2 className="section-title mt-4">{businessContent.about.title}</h2>
          <p className="section-subtitle">{businessContent.about.subtitle}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-4 shadow-[0_18px_42px_rgba(0,0,0,0.2)] sm:p-5 lg:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(162,31,59,0.12),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.02),transparent_55%)]" />
            <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(7,17,31,0.65),rgba(7,17,31,0.28))] p-5 sm:p-6 lg:p-8">
              <div className="flex items-center justify-between gap-3">
                <div className="section-kicker mb-0 border-white/15 bg-black/20 text-white/80">Desde 1974</div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60">
                  Juiz de Fora
                </div>
              </div>

              <div className="flex flex-1 items-center justify-center py-8">
                <img
                  src="/images/about.png"
                  alt="Equipe RenovaJF trabalhando"
                  className="w-full max-w-[260px] object-contain drop-shadow-[0_18px_38px_rgba(0,0,0,0.22)]"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/45">Tradição</p>
                  <p className="mt-1 text-sm font-medium text-white/90">Mais de 60 anos</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/45">Atendimento</p>
                  <p className="mt-1 text-sm font-medium text-white/90">Personalizado e ágil</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/45">Qualidade</p>
                  <p className="mt-1 text-sm font-medium text-white/90">Acabamento premium</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="premium-panel overflow-hidden p-5 sm:p-6 lg:p-8">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="font-montserrat text-2xl font-semibold text-white">
                  Um pouco da nossa História
                </h3>
                <span className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-white/55 sm:inline">
                  Legado artesanal
                </span>
              </div>

              <div className="grid gap-4">
                <p className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-[#e5e7eb]/85 sm:text-base">
                  Nossa trajetória começou em 1958, quando o italiano <span className="font-semibold text-white">Antonio Concolato</span> iniciou o trabalho artesanal de reforma de sofás em sua residência. Com o domínio passado aos filhos <span className="font-semibold text-white">José</span> e <span className="font-semibold text-white">Luiz</span>, surgiu em 1974 a Renovadora de Estofados JL Ltda., onde atuaram por 20 anos na Rua Benjamin Constant.
                </p>

                <p className="rounded-2xl border border-[#f3b0bd]/20 bg-[linear-gradient(180deg,rgba(162,31,59,0.08),rgba(255,255,255,0.03))] p-4 text-sm leading-7 text-[#e5e7eb]/85 sm:text-base">
                  Anos depois, nasceu a <span className="font-semibold text-[#f3b0bd]">Renovadora de Estofados JF</span>, fundada por José Concolato e seus filhos na Rua Vitar Maria de Oliveira, 536 - Progresso. Hoje, sob a gestão de <span className="font-semibold text-white">Walmer Ribeiro Concolato</span> e <span className="font-semibold text-white">Wesley Ribeiro Concolato</span>, seguimos oferecendo qualidade e confiança que atravessam gerações.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="premium-card premium-card-hover relative overflow-hidden p-5 text-left">
                <div className="absolute inset-x-0 top-0 h-1 bg-[#a21f3b]" />
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#a21f3b]/10 text-[#f0b4bf]">
                    <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9-7-9-7-9 7 9 7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white">Missão</h4>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#e5e7eb]/84 sm:text-base">
                  Entregar soluções em reforma de móveis e estofados com excelência, combinando qualidade, cuidado artesanal e atendimento comprometido, para garantir a total satisfação dos nossos clientes.
                </p>
              </div>

              <div className="premium-card premium-card-hover relative overflow-hidden p-5 text-left">
                <div className="absolute inset-x-0 top-0 h-1 bg-[#141c40]" />
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#a21f3b]/10 text-[#f0b4bf]">
                    <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5c2.485 0 4.5 2.015 4.5 4.5s-2.015 4.5-4.5 4.5-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12c2.25-4.5 6.75-7.5 9.75-7.5s7.5 3 9.75 7.5c-2.25 4.5-6.75 7.5-9.75 7.5s-7.5-3-9.75-7.5z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white">Visão</h4>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#e5e7eb]/84 sm:text-base">
                  Tornar-se uma empresa reconhecida como referência em estofamento e reforma de móveis, destacando-se pela inovação, qualidade e confiança no atendimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
