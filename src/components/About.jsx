import {
  HiOutlineCalendar,
  HiOutlineCube,
  HiOutlineLocationMarker,
  HiOutlineStar,
} from "react-icons/hi";
import { FaChair, FaTools } from "react-icons/fa";
import { MdOutlineAdsClick, MdOutlineVisibility } from "react-icons/md";

const timelineItems = [
  {
    year: "1974",
    text: (
      <>
        O italiano <span className="font-semibold text-white">Antônio Concolato</span> inicia o trabalho artesanal de reforma
        de sofás em sua residência em Juiz de Fora, com atenção minuciosa ao acabamento.
      </>
    ),
  },
  {
    year: "Hoje",
    text: (
      <>
        A <span className="font-semibold text-white">Renovadora de Estofados JF</span> concentra sua atuação em manutenção,
        revenda e peças para cadeiras de escritório e trabalho, aparelhos de academia e renovação pontual de sofás.
      </>
    ),
  },
];

const quickStats = [
  {
    icon: FaChair,
    title: "Cadeiras",
    text: "Reparo e revenda",
  },
  {
    icon: HiOutlineCube,
    title: "Peças",
    text: "Reposição ágil",
  },
  {
    icon: FaTools,
    title: "Técnico",
    text: "Uso intenso",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(162,31,59,0.12),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(20,28,64,0.32),transparent_30%)]" />

      <div className="mx-auto w-full max-w-6xl">
        <div id="about-kicker" className="section-kicker mx-auto mb-8" style={{ scrollMarginTop: "6.5rem" }}>
          Sobre nós
        </div>

        <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[1.45fr_0.85fr] lg:items-start">
          <div>
            <h2 className="font-montserrat text-4xl font-bold leading-[1.05] tracking-0 text-white sm:text-5xl lg:text-[3.35rem]">
              Tradição em manutenção
              <span className="block text-[#f0b4bf]">técnica e conforto</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-[#cbcbcb]/82 lg:ml-auto lg:pt-10">
            Atendimento cuidadoso para cadeiras de trabalho, peças, estofados de academia e renovação pontual de sofás.
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-white/90">
          <div className="inline-flex items-center gap-2">
            <HiOutlineCalendar className="h-4 w-4 text-[#f0b4bf]" />
            <span>Desde 1974</span>
            <span className="font-normal text-[#cbcbcb]/65">+50 anos de experiência</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <HiOutlineLocationMarker className="h-4 w-4 text-[#f0b4bf]" />
            <span>Juiz de Fora, MG</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <HiOutlineStar className="h-4 w-4 text-[#f0b4bf]" />
            <span>Tradição técnica</span>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.45fr_0.85fr]">
          <div>
            <p className="mb-8 font-poppins text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f0b4bf]">
              Um pouco da nossa história
            </p>

            <div className="relative space-y-10 pl-7 before:absolute before:left-1 before:top-[0.5625rem] before:h-[6.5rem] before:w-px before:bg-[linear-gradient(180deg,rgba(240,180,191,0.95)_0%,rgba(240,180,191,0.8)_58%,rgba(240,180,191,0.34)_88%,rgba(240,180,191,0)_100%)] sm:before:h-[6.75rem]">
              {timelineItems.map((item) => (
                <div key={item.year} className="relative">
                  <span className="absolute -left-[1.85rem] top-1 h-2.5 w-2.5 rounded-full bg-[#f0b4bf] shadow-[0_0_18px_rgba(240,180,191,0.45)]" />
                  <span className="inline-flex rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-poppins text-[11px] font-semibold uppercase tracking-[0.12em] text-[#f0b4bf]">
                    {item.year}
                  </span>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[#e5e7eb]/82 sm:text-base">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {quickStats.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="premium-card flex items-center gap-3 px-4 py-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#f0b4bf]/15 bg-[#a21f3b]/10 text-[#f0b4bf]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="text-xs text-[#cbcbcb]/68">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="space-y-4 lg:self-start">
            <div className="premium-panel overflow-hidden p-5 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#f0b4bf]/20 bg-[#a21f3b] text-2xl font-bold text-white shadow-[0_0_32px_rgba(162,31,59,0.45)]">
                JF
              </div>
              <h3 className="mt-4 text-sm font-semibold text-white">Renovadora de Estofados JF</h3>
              <p className="mt-1 text-xs text-[#cbcbcb]/65">Juiz de Fora · Desde 1974</p>
            </div>

            <div className="premium-card premium-card-hover p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#f0b4bf]/15 bg-[#a21f3b]/10 text-[#f0b4bf]">
                  <MdOutlineAdsClick className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-lg font-semibold text-white">Missão</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-[#e5e7eb]/82">
                Entregar soluções para cadeiras, peças e estofados técnicos com excelência, combinando atendimento comprometido,
                durabilidade e acabamento profissional.
              </p>
            </div>

            <div className="premium-card premium-card-hover p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#f0b4bf]/15 bg-[#141c40]/70 text-[#f0b4bf]">
                  <MdOutlineVisibility className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-lg font-semibold text-white">Visão</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-[#e5e7eb]/82">
                Ser referência em Juiz de Fora para manutenção de cadeiras, fornecimento de peças e serviços técnicos para
                ambientes de trabalho e academias.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
