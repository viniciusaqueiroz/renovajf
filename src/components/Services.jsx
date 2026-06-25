import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { siteConfig } from "../config/site";

const services = [
  {
    icon: "/images/office-chair.png",
    title: "Manutenção de Cadeiras",
    text: "Ajustes, troca de componentes, recuperação de assentos e reparos para cadeiras de escritório, operação e trabalho.",
  },
  {
    icon: "/images/armchair.png",
    title: "Revenda de Cadeiras",
    text: "Cadeiras novas para escritórios, recepções e ambientes corporativos, com foco em conforto, durabilidade e apresentação.",
  },
  {
    icon: "/images/wrench.png",
    title: "Peças para Cadeiras",
    text: "Reposição de pistões, bases, rodízios, braços, assentos, encostos e componentes para ampliar a vida útil das cadeiras.",
  },
  {
    icon: "/images/couch.png",
    title: "Estofados Técnicos e Sofás",
    text: "Manutenção de estofados em aparelhos de academia e, de forma secundária, renovação de sofás, poltronas e estofados residenciais.",
  },
];

const partners = [
  { src: "/images/parceiro1.png", alt: "Prefeitura de Juiz de Fora", className: "h-16" },
  { src: "/images/parceiro2.png", alt: "Cesama Água é Vida", className: "h-20" },
  { src: "/images/parceiro3.png", alt: "Bahamas", className: "h-16" },
  { src: "/images/parceiro5.svg", alt: "BD", className: "h-16" },
  { src: "/images/parceiro6.svg", alt: "Smart Fit", className: "h-16" },
  { src: "/images/parceiros/araujo.svg", alt: "Drogaria Araujo", className: "h-14" },
  { src: "/images/parceiros/bluefit.png", alt: "Academia Bluefit", className: "h-14" },
  { src: "/images/parceiros/baldi.svg", alt: "Baldi Manufatura JF", className: "h-14" },
];

export default function Services() {
  return (
    <section id="services" className="relative px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 text-center">
          <div id="services-kicker" className="section-kicker mx-auto" style={{ scrollMarginTop: "6.5rem" }}>
            Soluções
          </div>
          <h2 className="section-title mt-4">Serviços</h2>
          <p className="section-subtitle">
            Soluções para cadeiras de trabalho, reposição de peças e manutenção de estofados técnicos com acabamento profissional.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="premium-card premium-card-hover h-full p-5 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <img src={service.icon} alt={service.title} className="h-8 w-8 object-contain filter invert brightness-0" />
              </div>
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#e5e7eb]/85 sm:text-base">{service.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={siteConfig.catalogPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#a21f3b] px-7 py-3.5 font-semibold text-white shadow-[0_18px_40px_rgba(162,31,59,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#bb2a4b]"
          >
            Catálogo de Cadeiras
          </a>
        </div>

        <div className="mt-14">
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-semibold text-white">Nossos Parceiros</h3>
          </div>

          <div className="premium-panel p-4 sm:p-5">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              spaceBetween={20}
              slidesPerView={2}
              breakpoints={{
                480: { slidesPerView: 2.2 },
                640: { slidesPerView: 3 },
                900: { slidesPerView: 4 },
                1200: { slidesPerView: 5 },
              }}
            >
              {partners.map((partner) => (
                <SwiperSlide key={partner.alt}>
                  <div className="flex h-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-md">
                    <img src={partner.src} alt={partner.alt} className={`${partner.className} object-contain ${partner.src.endsWith('.png') ? 'filter invert brightness-0' : ''}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
