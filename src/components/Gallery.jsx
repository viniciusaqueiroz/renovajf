import { useEffect, useMemo, useState } from "react";

const TOTAL_IMAGES = 20;
const INITIAL_VISIBLE = 10;
const BATCH_SIZE = 10;

const buildGallery = () =>
  Array.from({ length: TOTAL_IMAGES }, (_, index) => {
    const num = String(index + 1).padStart(2, "0");
    const labels = ["Sofá", "Poltrona", "Sofá", "Cadeira", "Cadeira", "Poltrona", "Cadeira", "Sofá", "Sofá", "Cadeira"];

    return {
      src: `/images/gallery/gallery-${num}.jpg`,
      alt: `Imagem de mobiliário ${index + 1}`,
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

  useEffect(() => {
    const preload = allImages.slice(0, Math.min(allImages.length, visibleCount + 4));
    preload.forEach((item) => {
      const img = new Image();
      img.src = item.src;
    });
  }, [allImages, visibleCount]);

  return (
    <section id="gallery" className="relative px-4 py-20 sm:px-6 lg:px-10 xl:px-12">
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="mb-12 text-center">
          <div className="section-kicker mx-auto">Galeria</div>
          <h2 className="section-title mt-4">Nossos Trabalhos</h2>
          <p className="section-subtitle">
            A galeria usa arquivos locais numerados para facilitar a troca por fotos reais no futuro, sem mexer no componente.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5 lg:gap-6">
          {visibleImages.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => openImage(index)}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left shadow-[0_18px_40px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_26px_60px_rgba(0,0,0,0.32)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.05),rgba(7,17,31,0.78))] opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                      {item.label}
                    </span>
                    <span className="text-xs text-white/70">Ver detalhes</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
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
