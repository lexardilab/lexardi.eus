"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://res.cloudinary.com/dxkxg2ivb/image/upload/v1675546550/gaizka.me/index/itx_1_v2dzog.webp",
  "https://res.cloudinary.com/dxkxg2ivb/image/upload/v1739343501/harri.cc/Camiseta%20Azpitik/ToteBorobil_umlcdy.webp",
  "https://res.cloudinary.com/dxkxg2ivb/image/upload/v1739350386/harri.cc/Camiseta%20Azpitik/DSCF0119_vsisb3.webp",
  "https://res.cloudinary.com/dxkxg2ivb/image/upload/v1675592455/gaizka.me/landscape/GBV-TORLANDA-051-2_sujojb.webp",
  "https://res.cloudinary.com/dxkxg2ivb/image/upload/v1675546685/gaizka.me/misc/misc-8_zq8nmh.webp",
];

export default function ImageSlideshow() {
  const [index, setIndex] = useState(0);

  // Cambia de imagen automáticamente cada 10s
  useEffect(() => {
    const interval = setInterval(() => {
      // Selecciona un índice aleatorio diferente al actual
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * images.length);
      } while (nextIndex === index);
      setIndex(nextIndex);
    }, 10000);

    return () => clearInterval(interval);
  }, [index]);

  const nextImage = () => setIndex((index + 1) % images.length);
  const prevImage = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white">
      {/* Imagen de fondo */}
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`Slide ${index}`}
          className="absolute inset-0 w-full h-full object-cover object-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      </AnimatePresence>

      {/* Flechas */}
      <button
        onClick={prevImage}
        className="absolute left-6 top-1/2 -translate-y-1/2 transition"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-6 top-1/2 -translate-y-1/2 transition"
      >
        <ChevronRight size={28} />
      </button>

      {/* Texto superior izquierda */}
      <div className="absolute top-10 left-10 text-sm sm:text-base font-light tracking-wide">
        <p className="font-black text-2xl">LEXARDI LAB</p>
      </div>

      {/* Texto superior derecha */}
      <div className="absolute top-10 right-10 text-sm sm:text-base font-light tracking-wide">
        <p className="font-black text-2xl">GRAPHIC DESIGN</p>
      </div>

      {/* Texto inferior izquierda: teléfono */}
      <div className="absolute bottom-16 left-10 text-sm sm:text-base font-light tracking-wide">
        <p className="font-black">+34 688 843 213</p>
      </div>

      {/* Texto inferior derecha: email con mailto */}
      <div className="absolute bottom-16 right-10 text-sm sm:text-base font-light tracking-wide">
        <a
          href="mailto:lexardi@lexardi.eus?subject=Consulta%20desde%20la%20web&body=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20vuestros%20servicios."
          className="font-black hover:underline transition"
        >
          lexardi@lexardi.eus
        </a>
      </div>
    </div>
  );
}
