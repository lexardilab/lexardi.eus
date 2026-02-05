"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { urlFor } from "@/lib/sanityClient";

export default function GallerySlider({ 
  images, 
  arrowSize = "12rem", 
  aspect = "aspect-video", // Puede ser aspect-square, aspect-auto, etc.
  className = "" 
}) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isRight, setIsRight] = useState(true);
  const [showCursor, setShowCursor] = useState(false);
  const swiperRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursorPos({ x, y });
    setIsRight(x > rect.width / 2);
  };

  const handleClick = () => {
    isRight ? swiperRef.current?.swiper.slideNext() : swiperRef.current?.swiper.slidePrev();
  };

  return (
    <div 
      className={`relative overflow-hidden group ${className}`} 
      style={{ cursor: 'none' }} 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setShowCursor(true)}
      onMouseLeave={() => setShowCursor(false)}
      onClick={handleClick}
    >
      {/* Flecha Flotante */}
      {showCursor && (
        <div 
          className="pointer-events-none absolute z-50 flex items-center justify-center text-white transition-transform duration-150 ease-out"
          style={{ 
            left: cursorPos.x, 
            top: cursorPos.y,
            transform: `translate(-50%, -50%) rotate(${isRight ? 0 : 180}deg)`,
            filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.3))" 
          }}
        >
          <span className="font-thin select-none" style={{ fontSize: arrowSize, lineHeight: 0 }}>
            ›
          </span>
        </div>
      )}

      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        className="w-full h-full"
      >
        {images?.map((img, i) => {
          // Detecta si es Sanity (objeto) o URL directa (string)
          const src = img.asset ? urlFor(img).width(1600).url() : img;
          
          return (
            <SwiperSlide key={i}>
              <div className={`relative w-full ${aspect}`}>
                <Image
                  src={src}
                  alt={img.alt || "Lexardi Gallery"}
                  fill
                  className="object-cover rounded-sm select-none"
                  priority={i === 0}
                  sizes="(max-width: 1200px) 100vw, 80vw"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}