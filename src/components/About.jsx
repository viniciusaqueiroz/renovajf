export default function About() {
  return (
    <section id="about" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <div className="section-kicker mx-auto">Sobre nós</div>
          <h2 className="section-title mt-4">Nossa história e essência</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <div className="premium-panel h-full min-h-[420px] p-5 sm:p-7 lg:p-8 xl:p-9">
            <div className="relative flex h-full items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_top,rgba(162,31,59,0.12),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.018))] p-5 sm:p-6">
              <div className="absolute -right-6 top-0 h-24 w-24 rounded-full bg-[#a21f3b]/10 blur-3xl sm:h-28 sm:w-28" />
              <img
                src="/images/about.png"
                alt="Equipe RenovaJF trabalhando"
                className="mx-auto w-full max-w-[190px] object-contain drop-shadow-[0_18px_38px_rgba(0,0,0,0.2)] sm:max-w-[210px] lg:max-w-[225px]"
              />
            </div>
          </div>

          <div className="premium-panel flex h-full min-h-[420px] flex-col justify-center p-6 sm:p-8 lg:p-10">
            <h3 className="font-montserrat text-2xl font-semibold text-white sm:text-3xl">
              Um pouco da nossa História
            </h3>
            <div className="mt-6 space-y-5 text-base leading-8 text-[#e5e7eb]/85 sm:text-lg">
              <p>
                Nossa trajetória começou em 1958, quando o italiano <span className="font-semibold text-white">Antonio Concolato</span> iniciou o trabalho artesanal de reforma de sofás em sua residência. Com o domínio passado aos filhos <span className="font-semibold text-white">José</span> e <span className="font-semibold text-white">Luiz</span>, surgiu em 1974 a Renovadora de Estofados JL Ltda., onde atuaram por 20 anos na Rua Benjamin Constant.
              </p>

              <p>
                Anos depois, nasceu a <span className="font-semibold text-[#f3b0bd]">Renovadora de Estofados JF</span>, fundada por José Concolato e seus filhos na Rua Vitar Maria de Oliveira, 536 – Progresso. Hoje, sob a gestão de <span className="font-semibold text-white">Walmer Ribeiro Concolato</span> e <span className="font-semibold text-white">Wesley Ribeiro Concolato</span>, seguimos oferecendo qualidade e confiança que atravessam gerações.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12">
          <div className="premium-card premium-card-hover flex min-h-[220px] flex-col justify-center p-6 text-center">
            <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#a21f3b]/10 text-[#f0b4bf]">
              <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9-7-9-7-9 7 9 7z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white">Missão</h4>
            <p className="mx-auto mt-3 max-w-[34rem] leading-8 text-[#e5e7eb]/84">
              Entregar soluções em reforma de móveis e estofados com excelência, combinando qualidade, cuidado artesanal e atendimento comprometido, para garantir a total satisfação dos nossos clientes.
            </p>
          </div>

          <div className="premium-card premium-card-hover flex min-h-[220px] flex-col justify-center p-6 text-center">
            <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#a21f3b]/10 text-[#f0b4bf]">
              <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5c2.485 0 4.5 2.015 4.5 4.5s-2.015 4.5-4.5 4.5-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12c2.25-4.5 6.75-7.5 9.75-7.5s7.5 3 9.75 7.5c-2.25 4.5-6.75 7.5-9.75 7.5s-7.5-3-9.75-7.5z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white">Visão</h4>
            <p className="mx-auto mt-3 max-w-[34rem] leading-8 text-[#e5e7eb]/84">
              Tornar-se uma empresa reconhecida como referência em estofamento e reforma de móveis, destacando-se pela inovação, qualidade e confiança no atendimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
