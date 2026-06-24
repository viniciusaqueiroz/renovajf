import { HiOutlineSparkles, HiOutlineChip, HiOutlinePhotograph } from "react-icons/hi";
import { businessContent, siteConfig } from "../config/site";

const icons = [HiOutlineSparkles, HiOutlineChip, HiOutlinePhotograph];

export default function Fitness() {
  return (
    <section id="fitness" className="relative px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 text-center">
          <div className="section-kicker mx-auto">Academias e fitness</div>
          <h2 className="section-title mt-4">{businessContent.fitness.title}</h2>
          <p className="section-subtitle">{businessContent.fitness.text}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.96fr_1.04fr]">
          <div className="premium-panel p-5 sm:p-6 lg:p-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f0b4bf]">Uso intenso</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Solucoes para bancos, apoios e revestimentos</h3>
            <p className="mt-4 text-sm leading-7 text-[#e5e7eb]/84">
              Atendimento para estruturas acolchoadas de equipamentos fitness, com foco em resistencia, acabamento e manutencao pratica.
            </p>

            <div className="mt-6 grid gap-3">
              {businessContent.fitness.items.map((item, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-[#a21f3b]/10 text-[#f0b4bf]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-white">{item}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6">
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#a21f3b] px-7 py-3.5 font-semibold text-white shadow-[0_18px_40px_rgba(162,31,59,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#bb2a4b]"
              >
                Pedir avaliacao
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5 sm:p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">Servicos</p>
              <p className="mt-3 text-lg font-semibold text-white">Bancos e apoios acolchoados</p>
              <p className="mt-2 text-sm leading-7 text-[#e5e7eb]/84">
                Estruturas para musculacao e treino com reposicao de revestimentos e espumas.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5 sm:p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">Servicos</p>
              <p className="mt-3 text-lg font-semibold text-white">Revestimento tecnico</p>
              <p className="mt-2 text-sm leading-7 text-[#e5e7eb]/84">
                Materiais pensados para resistencia ao uso continuo e melhor apresentacao do equipamento.
              </p>
            </div>
            <div className="rounded-3xl border border-[#f0b4bf]/20 bg-[linear-gradient(180deg,rgba(162,31,59,0.14),rgba(255,255,255,0.03))] p-5 sm:col-span-2 sm:p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f0b4bf]">Atendimento</p>
              <p className="mt-3 text-base leading-7 text-[#e5e7eb]/86">
                Manutencao orientada para academias, studios e centros de treinamento em Juiz de Fora e regiao.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
