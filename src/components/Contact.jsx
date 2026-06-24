import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { siteConfig } from "../config/site";

export default function Contact() {
  return (
    <section id="contact" className="relative px-4 py-20 sm:px-6 lg:px-10 xl:px-12">
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="mb-12 text-center">
          <div className="section-kicker mx-auto">Contato</div>
          <h2 className="section-title mt-4">Entre em Contato</h2>
          <p className="section-subtitle">
            Fale com a equipe RenovaJF por WhatsApp, telefone, e-mail ou redes sociais. Estamos prontos para atender.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="premium-panel p-6 sm:p-8">
            <div className="space-y-6 text-base sm:text-lg">
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <HiOutlineLocationMarker className="mt-0.5 h-6 w-6 shrink-0 text-[#f0b4bf]" />
                <p className="leading-8 text-[#e5e7eb]/85">{siteConfig.contactAddress}</p>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <HiOutlinePhone className="mt-0.5 h-6 w-6 shrink-0 text-[#f0b4bf]" />
                <p className="leading-8 text-[#e5e7eb]/85">{siteConfig.contactPhone}</p>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <HiOutlineMail className="mt-0.5 h-6 w-6 shrink-0 text-[#f0b4bf]" />
                <p className="leading-8 text-[#e5e7eb]/85">{siteConfig.contactEmail}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600">
                <FaWhatsapp className="h-5 w-5" /> WhatsApp
              </a>
              <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-4 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-pink-600">
                <FaInstagram className="h-5 w-5" /> Instagram
              </a>
              <a href={siteConfig.facebookUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700">
                <FaFacebook className="h-5 w-5" /> Facebook
              </a>
            </div>
          </div>

          <form className="premium-panel p-6 sm:p-8">
            <div className="grid gap-4">
              <input type="text" placeholder="Seu nome" className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white placeholder:text-white/45 outline-none transition-all duration-300 focus:border-[#f0b4bf]/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-[#a21f3b]/30" />
              <input type="email" placeholder="Seu e-mail" className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white placeholder:text-white/45 outline-none transition-all duration-300 focus:border-[#f0b4bf]/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-[#a21f3b]/30" />
              <textarea placeholder="Sua mensagem" rows="5" className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white placeholder:text-white/45 outline-none transition-all duration-300 focus:border-[#f0b4bf]/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-[#a21f3b]/30"></textarea>
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-[#a21f3b] px-7 py-3.5 font-semibold text-white shadow-[0_18px_40px_rgba(162,31,59,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#bb2a4b]">
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
