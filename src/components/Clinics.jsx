import { HiOutlineHeart, HiOutlineClipboardList, HiOutlineSparkles } from "react-icons/hi";
import { businessContent, siteConfig } from "../config/site";

const icons = [HiOutlineHeart, HiOutlineClipboardList, HiOutlineSparkles];

export default function Clinics() {
  return (
    <section id="clinics" className="relative px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 text-center">
          <div className="section-kicker mx-auto">Clinicas e macas</div>
          <h2 className="section-title mt-4">{businessContent.clinics.title}</h2>
          <p className="section-subtitle">{businessContent.clinics.text}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {businessContent.clinics.items.map((item, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div key={item} className="premium-card premium-card-hover p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-[#a21f3b]/10 text-[#f0b4bf]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-base font-semibold text-white">{item}</p>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#e5e7eb]/84">
                    Solucoes com acabamento limpo e duravel para uso continuo em ambiente clinico.
                  </p>
                </div>
              );
            })}
          </div>

          <div className="premium-panel p-5 sm:p-6 lg:p-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f0b4bf]">Atendimento especializado</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Reforma e manutencao com foco tecnico</h3>
            <p className="mt-4 text-sm leading-7 text-[#e5e7eb]/84">
              Acabamento apropriado para macas, apoios e equipamentos acolchoados, com prioridade em limpeza visual, resistencia e conforto.
            </p>

            <div className="mt-6 grid gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/45">Foco</p>
                <p className="mt-1 text-base font-semibold text-white">Ambiente clinico e estetica profissional</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/45">Prioridade</p>
                <p className="mt-1 text-base font-semibold text-white">Durabilidade e funcionalidade no dia a dia</p>
              </div>
            </div>

            <div className="mt-6">
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#a21f3b] px-7 py-3.5 font-semibold text-white shadow-[0_18px_40px_rgba(162,31,59,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#bb2a4b]"
              >
                Falar sobre macas
              </a>
            </div>

            <div className="mt-6 rounded-3xl border border-[#f0b4bf]/20 bg-[linear-gradient(180deg,rgba(162,31,59,0.14),rgba(255,255,255,0.03))] p-5">
              <p className="text-sm leading-7 text-[#e5e7eb]/84">
                {businessContent.clinics.items.join(" - ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
