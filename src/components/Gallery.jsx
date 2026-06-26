import { useEffect, useMemo, useState } from "react";

const TOTAL_IMAGES = 20;
const INITIAL_VISIBLE = 10;
const BATCH_SIZE = 10;

const buildGallery = () =>
  Array.from({ length: TOTAL_IMAGES }, (_, index) => {
    const num = String(index + 1).padStart(2, "0");
    const labels = ["Cadeira", "Peças", "Cadeira", "Academia", "Cadeira", "Escritório", "Peças", "Estofado técnico", "Sofá", "Cadeira"];

    return {
      src: `/images/gallery/gallery-${num}.jpg`,
      alt: `Imagem de cadeira, peça ou estofado técnico ${index + 1}`,
      label: labels[index % labels.length],
    };
  });

export default function Gallery() {
  const allImages = useMemo(() => buildGallery(), []);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const visibleImages = useMemo(() => allImages.slice(0, visibleCount), [allImages, visibleCount]);
  const hasMore = visibleCount < allImages.length;
  const activeImage = selectedIndex !== null ? allImages[selectedIndex] : null;

  const openImage = (index) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);
  const showPrevious = () => setSelectedIndex((current) => (current === null ? current : (current - 1 + allImages.length) % allImages.length));
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
    <section id="gallery" className="relative px-4 py-16 sm:px-6 lg:px-8 min-[1440px]:py-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 text-center min-[1440px]:mb-8">
          <div id="gallery-kicker" className="section-kicker mx-auto" style={{ scrollMarginTop: "6.5rem" }}>
            Galeria
          </div>
          <h2 className="section-title mt-4">Cadeiras, peças e estofados técnicos</h2>
          <p className="section-subtitle">
            Confira referências de cadeiras de trabalho, componentes, estofados para academia e alguns serviços de renovação de sofás.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 min-[1440px]:gap-3">
          {visibleImages.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => openImage(index)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left shadow-[0_12px_28px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[0_16px_36px_rgba(0,0,0,0.24)] min-[1440px]:rounded-xl"
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
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.05),rgba(7,17,31,0.78))] opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-3 text-white">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
                      {item.label}
                    </span>
                    <span className="hidden text-xs text-white/70 sm:inline">Ver detalhes</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-center min-[1440px]:mt-6">
          <button
            type="button"
            onClick={() => setVisibleCount(hasMore ? Math.min(allImages.length, visibleCount + BATCH_SIZE) : INITIAL_VISIBLE)}
            className="inline-flex items-center justify-center rounded-full bg-[#a21f3b] px-7 py-3.5 font-semibold text-white shadow-[0_18px_40px_rgba(162,31,59,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#bb2a4b]"
          >
            {hasMore ? "Ver mais imagens" : "Ver menos imagens"}
          </button>
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

            <div className="mt-4 flex items-center justify-between gap-3 text-white">
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
                Próxima
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
