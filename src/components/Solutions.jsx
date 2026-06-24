import {
  HiOutlineCog,
  HiOutlineOfficeBuilding,
  HiOutlineShoppingBag,
  HiOutlinePuzzle,
  HiOutlineSparkles,
  HiOutlineAcademicCap,
} from "react-icons/hi";
import { businessContent, siteConfig } from "../config/site";

const icons = [
  HiOutlineCog,
  HiOutlineOfficeBuilding,
  HiOutlinePuzzle,
  HiOutlineSparkles,
  HiOutlineAcademicCap,
  HiOutlineShoppingBag,
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 text-center">
          <div className="section-kicker mx-auto">Solucoes</div>
          <h2 className="section-title mt-4">Servicos principais para empresas e ambientes tecnicos</h2>
          <p className="section-subtitle">
            Estrutura comercial focada em cadeiras, pecas, estofados tecnicos e atendimento empresarial em Juiz de Fora e regiao.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {businessContent.solutions.map((item, index) => {
            const Icon = icons[index];

            return (
              <div key={item.title} className="premium-card premium-card-hover h-full p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#f0b4bf]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#e5e7eb]/85 sm:text-base">{item.text}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-3xl border border-[#f0b4bf]/20 bg-[linear-gradient(180deg,rgba(162,31,59,0.14),rgba(255,255,255,0.03))] px-5 py-5 text-center sm:flex-row sm:justify-between sm:px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f0b4bf]">WhatsApp como prioridade</p>
            <p className="mt-2 text-sm leading-7 text-[#e5e7eb]/82">
              Solicite orcamento rapido para cadeiras, pecas, reformas tecnicas e atendimento empresarial.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#a21f3b] px-7 py-3.5 font-semibold text-white shadow-[0_18px_40px_rgba(162,31,59,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#bb2a4b]"
            >
              Falar no WhatsApp
            </a>
            <a
              href="#chairs"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#chairs")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white/90 backdrop-blur-md transition-all duration-300 hover:bg-white/10"
            >
              Ver cadeiras
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
