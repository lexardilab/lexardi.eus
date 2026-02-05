import GallerySlider from "@/components/GallerySlider";

export default function ExperimentalWorks() {
  const trialImages = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600",
    "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1600",
    "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1600",
  ];

  return (
    <main className="bg-[#C5B5B8] min-h-screen relative text-black overflow-x-hidden">
      
      {/* 1. LÍNEA VERTICAL INFINITA (Eje Estructural) */}
      <div className="fixed left-8 md:left-16 top-0 bottom-0 w-px bg-black/10 z-0" />

      {/* 2. NÚMERO DE PÁGINA O SECCIÓN (Detalle estético arriba a la izquierda) */}
      <div className="fixed left-0 w-8 md:w-16 pt-10 text-center text-[10px] font-mono uppercase tracking-widest z-20">
        Index 01
      </div>

      {/* 3. CONTENIDO (Desplazado para respetar la línea) */}
      <div className="relative z-10 pl-16 md:pl-32 pr-6 md:pr-12 pt-24 pb-40">
        
        {/* CABECERA: Tipografía estilo Synt (Syne) */}
        <header className="max-w-4xl mb-32">
          <h1 className="text-4xl md:text-6xl font-syne font-bold leading-[0.9] tracking-tighter uppercase mb-8">
            Diseño <br /> Estratégico <br /> & Lab
          </h1>
          <p className="font-montserrat text-lg md:text-xl max-w-xl opacity-80 italic">
            "Agian gaur etzait nabari zauria hodeiertzan ez da ageri nahiko nukeen herria..."
          </p>
        </header>

        {/* SECCIÓN DE DATOS (Grid estructural) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          <div className="border-t border-black pt-4">
            <span className="text-[10px] uppercase tracking-widest block mb-4">Location</span>
            <p className="font-grotesk text-lg">Donostia / San Sebastián</p>
          </div>
          <div className="border-t border-black pt-4">
            <span className="text-[10px] uppercase tracking-widest block mb-4">Focus</span>
            <p className="font-grotesk text-lg">Visual Identity & Code</p>
          </div>
          <div className="border-t border-black pt-4">
            <span className="text-[10px] uppercase tracking-widest block mb-4">Year</span>
            <p className="font-grotesk text-lg">2026</p>
          </div>
        </div>

        {/* LA GALERÍA RECICLADA (Formato Panorámico) */}
        <section className="mb-32">
          <div className="w-full">
            <GallerySlider
              images={trialImages}
              aspect="aspect-[2/1]" 
              arrowSize="10rem"
              className="w-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>
          <div className="flex justify-between mt-4 text-[10px] uppercase tracking-widest opacity-60">
            <span>Scroll for more</span>
            <span>Selected Projects 01-03</span>
          </div>
        </section>

        {/* PIE DE SECCIÓN */}
        <footer className="max-w-2xl">
          <p className="font-grotesk text-3xl leading-tight">
            Creando sistemas visuales que conectan la técnica con la emoción.
          </p>
        </footer>
      </div>
    </main>
  );
}