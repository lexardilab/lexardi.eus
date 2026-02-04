"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { urlFor } from "@/lib/sanityClient";

export default function GallerySlider({ images }) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isRight, setIsRight] = useState(true);
  const [showCursor, setShowCursor] = useState(false);
  const swiperRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Actualizamos posición
    setCursorPos({ x, y });
    
    // Si el ratón está pasado el 50% del ancho, apunta a la derecha. Si no, a la izquierda.
    setIsRight(x > rect.width / 2);
  };

  const handleClick = () => {
    if (isRight) {
      swiperRef.current?.swiper.slideNext();
    } else {
      swiperRef.current?.swiper.slidePrev();
    }
  };

  return (
    <div 
      className="relative my-8 overflow-hidden group"
      style={{ cursor: 'none' }} // Oculta el puntero estándar
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setShowCursor(true)}
      onMouseLeave={() => setShowCursor(false)}
      onClick={handleClick}
    >
      {/* Flecha Flotante Personalizada */}
      {showCursor && (
        <div 
          className="pointer-events-none absolute z-50 flex items-center justify-center text-white transition-transform duration-150 ease-out"
          style={{ 
            left: cursorPos.x, 
            top: cursorPos.y,
            transform: `translate(-50%, -50%) rotate(${isRight ? 0 : 180}deg)`,
            filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.3))" // Sombra para verla sobre blanco
          }}
        >
          {/* Flecha más grande y blanca */}
          <span className="text-[12rem] font-thin select-none" style={{ lineHeight: 0, marginBottom: '8px' }}>›</span>
        </div>
      )}

      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        grabCursor={false}
        className="w-full"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <Image
              src={urlFor(img).width(1200).url()}
              alt={img.alt || "Lexardi Lab Project"}
              width={1200}
              height={800}
              className="w-full h-auto rounded-sm select-none"
              priority={i === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}