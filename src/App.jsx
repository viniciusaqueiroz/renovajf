import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { siteConfig } from "./config/site";

import "swiper/css";
import "swiper/css/autoplay";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");

    if (!sections.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sections.forEach((section) => section.classList.add("scroll-reveal-visible"));
      return;
    }

    sections.forEach((section) => section.classList.add("scroll-reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-reveal-visible");
          }
        });
      },
      {
        root: null,
        rootMargin: "-12% 0px -18% 0px",
        threshold: 0.16,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#07111f] text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(162,31,59,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(20,28,64,0.55),transparent_35%),linear-gradient(180deg,#07111f_0%,#09192d_52%,#06101b_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:56px_56px]" />

      <Header />
      <main className="relative">
        <Hero />
        <About />
        <Gallery />
        <Services />
        <Contact />
      </main>
      <Footer />

      <a
        href={siteConfig.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-black/30 backdrop-blur-xl transition-transform duration-300 hover:scale-[1.03] hover:bg-emerald-500/90 sm:bottom-6 sm:right-6"
        aria-label="Falar com a RenovaJF no WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.12.553 4.17 1.6 5.98L0 24l6.21-1.63A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.94 0-3.82-.52-5.46-1.51l-.39-.23-3.69.97.99-3.59-.25-.37A9.94 9.94 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.27-7.73c-.29-.15-1.71-.84-1.97-.93-.26-.1-.45-.15-.64.15-.19.29-.73.93-.9 1.12-.17.19-.33.21-.62.07-.29-.15-1.23-.45-2.34-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43s1.02 2.82 1.16 3.01c.14.19 2.01 3.07 4.87 4.3.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34z" />
        </svg>
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}

export default App;
