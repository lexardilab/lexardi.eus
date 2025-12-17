"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // <- versión moderna
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { urlFor } from "@/lib/sanityClient";

export default function GallerySlider({ images }) {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="my-8"
      spaceBetween={16}
      slidesPerView={1}
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <Image
            src={urlFor(img).width(600).url()}
            alt={img.alt || ""}
            width={1200}
            height={800}
            className="w-full h-auto rounded-md"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
