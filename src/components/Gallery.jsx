import { useEffect, useMemo, useState } from "react";
import { businessContent, siteConfig } from "../config/site";

const TOTAL_IMAGES = 20;
const INITIAL_VISIBLE = 10;
const BATCH_SIZE = 10;

const buildGallery = () => {
  const models = businessContent.chairLines.flatMap((line) =>
    line.models.map((model) => ({
      line: line.title,
      model,
      summary: line.text,
    })),
  );

  return Array.from({ length: TOTAL_IMAGES }, (_, index) => {
    const num = String(index + 1).padStart(2, "0");
    const selected = models[index % models.length];

    return {
      src: `/images/gallery/gallery-${num}.jpg`,
      alt: `Cadeira ${selected.model}`,
      label: selected.line,
      title: selected.model,
      summary: selected.summary,
    };
  });
};

export default function Gallery() {
  const allImages = useMemo(() => buildGallery(), []);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const visibleImages = useMemo(() => allImages.slice(0, visibleCount), [allImages, visibleCount]);
  const hasMore = visibleCount < allImages.length;
  const activeImage = selectedIndex !== null ? allImages[selectedIndex] : null;

  const openImage = (index) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);
  const showPrevious = () =>
    setSelectedIndex((current) => (current === null ? current : (current - 1 + allImages.length) % allImages.length));
  const showNext = () => setSelectedIndex((current) => (current === null ? current : (current + 1) % allImages.length));

  useEffect(() => {
    if (selectedIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeImage();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <section id="chairs" className="relative px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 text-center">
          <div className="section-kicker mx-auto">Venda de cadeiras</div>
          <h2 className="section-title mt-4">Modelos novos para empresas e escritórios</h2>
          <p className="section-subtitle">
            Linha economica, premium e multifuncional para ambientes corporativos, recepcao, operacao e uso intenso.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {businessContent.chairLines.map((line) => (
            <div key={line.title} className="premium-card premium-card-hover p-5 text-left">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">{line.title}</h3>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">
                  Linha
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-[#e5e7eb]/84">{line.text}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {line.models.map((model) => (
                  <span
                    key={model}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {visibleImages.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => openImage(index)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left shadow-[0_12px_28px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[0_16px_36px_rgba(0,0,0,0.24)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.06),rgba(7,17,31,0.8))] opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-3 text-white">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
                        {item.label}
                      </span>
                      <p className="mt-2 text-base font-semibold leading-5 text-white">{item.title}</p>
                    </div>
                    <span className="hidden text-xs text-white/70 sm:inline">Ver</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => setVisibleCount(hasMore ? Math.min(allImages.length, visibleCount + BATCH_SIZE) : INITIAL_VISIBLE)}
            className="inline-flex items-center justify-center rounded-full bg-[#a21f3b] px-7 py-3.5 font-semibold text-white shadow-[0_18px_40px_rgba(162,31,59,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#bb2a4b]"
          >
            {hasMore ? "Ver mais cadeiras" : "Ver menos cadeiras"}
          </button>
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white/90 backdrop-blur-md transition-all duration-300 hover:bg-white/10"
          >
            Consultar no WhatsApp
          </a>
        </div>
      </div>

      {activeImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#030712]/80 px-4 py-6 backdrop-blur-xl" role="dialog" aria-modal="true">
          <div className="relative w-full max-w-5xl">
            <div className="premium-panel overflow-hidden p-2 sm:p-3">
              <div className="relative overflow-hidden rounded-2xl bg-black">
                <img src={activeImage.src} alt={activeImage.alt} className="max-h-[80vh] w-full object-contain" />
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-3 text-white sm:flex-row sm:items-center sm:justify-between">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/45">{activeImage.label}</p>
                <p className="mt-1 text-sm font-semibold text-white">{activeImage.title}</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={showPrevious}
                  className="rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold backdrop-blur-md transition-all hover:bg-white/15"
                >
                  Anterior
                </button>
                <button
                  type="button"
                  onClick={closeImage}
                  className="rounded-full border border-white/10 bg-[#a21f3b] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#bb2a4b]"
                >
                  Fechar
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold backdrop-blur-md transition-all hover:bg-white/15"
                >
                  Proxima
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
