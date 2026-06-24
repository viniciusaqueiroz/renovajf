import { HiOutlineOfficeBuilding, HiOutlineCalendar, HiOutlineClock, HiOutlineUserGroup } from "react-icons/hi";
import { businessContent, siteConfig } from "../config/site";

const audience = [
  "Escritorios",
  "Empresas",
  "Coworkings",
  "Escolas",
  "Clinicas",
  "Academias",
];

const stats = [
  { label: "Desde", value: "1974" },
  { label: "Atendimento", value: "Empresarial" },
  { label: "Regiao", value: "Juiz de Fora" },
  { label: "Foco", value: "Agilidade" },
];

const icons = [HiOutlineOfficeBuilding, HiOutlineUserGroup, HiOutlineCalendar, HiOutlineClock];

export default function Corporate() {
  return (
    <section id="corporate" className="relative px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 text-center">
          <div className="section-kicker mx-auto">Atendimento empresarial</div>
          <h2 className="section-title mt-4">{businessContent.corporate.title}</h2>
          <p className="section-subtitle">{businessContent.corporate.text}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="premium-panel p-5 sm:p-6 lg:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#f0b4bf]">
                <HiOutlineOfficeBuilding className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Estrutura para contratos e demandas recorrentes</h3>
                <p className="text-sm text-white/65">Organizacao para atender volume, reposicao e manutencao preventiva.</p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {stats.map((item, index) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-[#a21f3b]/10 text-[#f0b4bf]">
                      {(() => {
                        const Icon = icons[index];
                        return <Icon className="h-5 w-5" />;
                      })()}
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-white/45">{item.label}</p>
                      <p className="mt-1 text-base font-semibold text-white">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {businessContent.corporate.highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/84">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6">
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#a21f3b] px-7 py-3.5 font-semibold text-white shadow-[0_18px_40px_rgba(162,31,59,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#bb2a4b]"
              >
                Solicitar atendimento empresarial
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5 shadow-[0_14px_36px_rgba(0,0,0,0.18)] sm:p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f0b4bf]">Atuacao</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {audience.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="premium-card premium-card-hover p-5">
                <p className="text-[10px] uppercase tracking-[0.28em] text-white/45">Beneficio</p>
                <p className="mt-3 text-lg font-semibold text-white">Padronizacao do parque</p>
                <p className="mt-2 text-sm leading-7 text-[#e5e7eb]/84">
                  Equipe e ambiente com o mesmo nivel de acabamento e especificacao.
                </p>
              </div>
              <div className="premium-card premium-card-hover p-5">
                <p className="text-[10px] uppercase tracking-[0.28em] text-white/45">Beneficio</p>
                <p className="mt-3 text-lg font-semibold text-white">Menos paradas</p>
                <p className="mt-2 text-sm leading-7 text-[#e5e7eb]/84">
                  Reposicao rapida para reduzir interrupcoes e manter a operação ativa.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-[#f0b4bf]/20 bg-[linear-gradient(180deg,rgba(162,31,59,0.14),rgba(255,255,255,0.03))] p-5 sm:p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f0b4bf]">Foco da marca</p>
              <p className="mt-3 text-base leading-7 text-[#e5e7eb]/86">
                Manutencao, venda de cadeiras, pecas e estofados tecnicos para empresas que precisam de atendimento confiavel e recorrente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
