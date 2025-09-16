"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HorizontalGallery({ images }) {
  const galleryRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [cursorDir, setCursorDir] = useState(null);

  const visibleCount = 2; // número de imágenes visibles
  const gap = 2; // px de separación

  useEffect(() => {
    setIsDesktop(window.innerWidth > 768);
  }, []);

  // Scroll según currentIndex
  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const containerWidth = gallery.offsetWidth;
    const imageWidth = containerWidth / visibleCount;
    gallery.scrollTo({ left: currentIndex * imageWidth, behavior: "smooth" });
  }, [currentIndex]);

  const handleMouseMove = (e) => {
    if (!isDesktop) return;
    const gallery = galleryRef.current;
    if (!gallery) return;

    const rect = gallery.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursorX(x);
    setCursorY(y);
    setCursorDir(x < rect.width / 2 ? "left" : "right");
  };

  const handleClick = () => {
    if (!cursorDir) return;
    const maxIndex = images.length - visibleCount;
    if (cursorDir === "right") {
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    } else if (cursorDir === "left") {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <div
      className="relative w-screen h-screen overflow-hidden cursor-none"
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      <div
        ref={galleryRef}
        className="flex h-full gap-[2px]"
        style={{ overflowX: "hidden", scrollSnapType: "x mandatory" }}
      >
        {images.map((img) => (
          <div
            key={img._id}
            className="flex-shrink-0 h-full relative snap-start"
            style={{ flexBasis: `calc(50% - ${gap / 2}px)` }}
          >
            <Image
              src={img.url}
              alt={img.alt || "Gallery image"}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        ))}
      </div>

      {/* Cursor flecha clásica */}
      {isDesktop && cursorDir && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: cursorX,
            top: cursorY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20ncu0"
            height="200"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
          >
            {cursorDir === "right" ? (
              <path d="M5 12h14M13 6l6 6-6 6" />
            ) : (
              <path d="M19 12H5m6-6L5 12l6 6" />
            )}
          </svg>
        </motion.div>
      )}
    </div>
  );
}
