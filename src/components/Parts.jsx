import { HiOutlineCube, HiOutlineRefresh, HiOutlineShieldCheck, HiOutlineSparkles } from "react-icons/hi";
import { businessContent, siteConfig } from "../config/site";

const partGroups = [
  {
    title: "Estruturais",
    items: ["Pistão", "Flange Relax", "Flange Universal", "Backsystem", "Alongador"],
  },
  {
    title: "Mobilidade",
    items: ["Rodízios", "Base estrela fixa", "Base estrela giratória"],
  },
  {
    title: "Apoio e montagem",
    items: ["Apoio de braço", "Braços botão", "Braços corsa", "Assento e encosto", "Lâmina", "Canoa", "Volante"],
  },
];

const highlights = [
  {
    icon: HiOutlineShieldCheck,
    title: "Compatibilidade",
    text: "Peças selecionadas para manter o conjunto funcional e reduzir trocas desnecessarias.",
  },
  {
    icon: HiOutlineRefresh,
    title: "Reposição rápida",
    text: "Estrutura pensada para agilidade em paradas de operação e atendimento recorrente.",
  },
  {
    icon: HiOutlineSparkles,
    title: "Acabamento",
    text: "Componentes adequados para preservação do conforto, da ergonomia e da apresentação visual.",
  },
];

export default function Parts() {
  return (
    <section id="parts" className="relative px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 text-center">
          <div className="section-kicker mx-auto">Peças para cadeiras</div>
          <h2 className="section-title mt-4">Reposição técnica para reduzir paradas</h2>
          <p className="section-subtitle">
            Pisões, bases, braços, assentos e demais componentes para manter cadeiras corporativas com melhor desempenho.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="premium-panel p-5 sm:p-6 lg:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#f0b4bf]">
                <HiOutlineCube className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Componentes disponiveis</h3>
                <p className="text-sm text-white/65">Linha completa para cadeiras de uso corporativo.</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-[#a21f3b]/10 text-[#f0b4bf]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="text-base font-semibold text-white">{item.title}</h4>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[#e5e7eb]/84">{item.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#a21f3b] px-7 py-3.5 font-semibold text-white shadow-[0_18px_40px_rgba(162,31,59,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#bb2a4b]"
              >
                Solicitar pecas
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white/90 backdrop-blur-md transition-all duration-300 hover:bg-white/10"
              >
                Falar com a equipe
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {partGroups.map((group) => (
              <div key={group.title} className="premium-card premium-card-hover p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">Peças</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white/82"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div className="rounded-3xl border border-[#f0b4bf]/20 bg-[linear-gradient(180deg,rgba(162,31,59,0.12),rgba(255,255,255,0.03))] p-5 sm:p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f0b4bf]">Catalogo tecnico</p>
              <p className="mt-3 text-sm leading-7 text-[#e5e7eb]/84">
                {businessContent.parts.length} itens essenciais para reposicao e manutencao de cadeiras corporativas.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {businessContent.parts.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/75"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
