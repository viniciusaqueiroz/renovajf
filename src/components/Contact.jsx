import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { siteConfig } from "../config/site";

export default function Contact() {
  return (
    <section id="contact" className="relative px-4 py-16 sm:px-6 lg:px-8 min-[1440px]:py-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 text-center min-[1440px]:mb-8">
          <div id="contact-kicker" className="section-kicker mx-auto" style={{ scrollMarginTop: "6.5rem" }}>
            Contato
          </div>
          <h2 className="section-title mt-4">Solicite atendimento</h2>
          <p className="section-subtitle">
            Fale com a equipe RenovaJF para manutenção de cadeiras, compra de peças, cadeiras novas ou estofados técnicos.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] min-[1440px]:gap-5">
          <div className="premium-panel p-5 sm:p-6 min-[1440px]:p-4">
            <div className="space-y-4 text-base min-[1440px]:space-y-3">
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 min-[1440px]:p-3">
                <HiOutlineLocationMarker className="mt-0.5 h-6 w-6 shrink-0 text-[#f0b4bf]" />
                <p className="leading-7 text-[#e5e7eb]/85">{siteConfig.contactAddress}</p>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 min-[1440px]:p-3">
                <HiOutlinePhone className="mt-0.5 h-6 w-6 shrink-0 text-[#f0b4bf]" />
                <p className="leading-7 text-[#e5e7eb]/85">{siteConfig.contactPhone}</p>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 min-[1440px]:p-3">
                <HiOutlineMail className="mt-0.5 h-6 w-6 shrink-0 text-[#f0b4bf]" />
                <p className="leading-7 text-[#e5e7eb]/85">{siteConfig.contactEmail}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 min-[1440px]:mt-5 min-[1440px]:gap-2">
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-pink-500 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-pink-600"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <form className="premium-panel p-5 sm:p-6 min-[1440px]:p-4">
            <div className="grid gap-4 min-[1440px]:gap-3">
              <input type="text" placeholder="Seu nome" className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white placeholder:text-white/45 outline-none transition-all duration-300 focus:border-[#f0b4bf]/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-[#a21f3b]/30" />
              <input type="email" placeholder="Seu e-mail" className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white placeholder:text-white/45 outline-none transition-all duration-300 focus:border-[#f0b4bf]/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-[#a21f3b]/30" />
              <textarea placeholder="Conte o que precisa: cadeira, peça, academia ou sofá" rows="5" className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white placeholder:text-white/45 outline-none transition-all duration-300 focus:border-[#f0b4bf]/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-[#a21f3b]/30"></textarea>
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-[#a21f3b] px-7 py-3.5 font-semibold text-white shadow-[0_18px_40px_rgba(162,31,59,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#bb2a4b]">
                Enviar solicitação
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
