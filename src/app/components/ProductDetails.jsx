"use client";
import Image from "next/image";
import "../globals.css";
import { montserrat, roboto_mono } from "../utils/fonts";
import { useState } from "react";
export default function ProductDetails({ product }) {
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);
  const [qty, setQty] = useState(1);
  const handleAddToCart = () => {
    addToCart({
      product,
      quantity: qty,
      color: selectedColor,
      size: selectedSize,
    });
    toast.success("Added to cart");
  };
  return (
    <>
      <div className="flex items-center justify-center pt-20">
        <h1 className={`${roboto_mono.className} text-4xl`}>{product?.name}</h1>
      </div>
      <div className="flex justify-center pt-12">
        <h1 className={`${montserrat.className} text-xl font-semibold`}>
          {product?.subtitle}
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="pt-12 w-[600px]">
          <h1 className={`${montserrat.className} text-sm text-center `}>
            {product?.description}
          </h1>
        </div>
      </div>
      <div className="px-6 pt-12 "></div>
      <div className="grid grid-cols-3 gap-2 px-6 pt-12 pb-6">
        <div className="px-4">
          <h1 className={`${montserrat.className} text-sm`}>
            {product?.descriptionOne}
          </h1>
        </div>
        <div>
          <Image
            src={product?.firstimage}
            width="1000"
            height="600"
            alt="Intro Image Lexardi"
            className=""
          />
          <h1 className={`${roboto_mono.className} text-sm`}>
            {product?.name}
          </h1>
        </div>
        <div>
          <Image
            src={product?.secondimage}
            width="1000"
            height="600"
            alt="Intro Image Lexardi"
            className=""
          />
        </div>
      </div>
      <div className="flex justify-center py-12">
        {product?.extraImages?.map((image) => (
          <Image
            src={image}
            width="500"
            height="600"
            alt="Gallery"
            className="px-4"
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 px-4 pb-6">
        <div className="px-4">
          <h1 className={`${montserrat.className} text-sm`}>
            {product?.descriptionOne}
          </h1>
        </div>
        <div>
          <Image
            src={product?.thirdimage}
            width="1000"
            height="600"
            alt="Intro Image Lexardi"
            className=""
          />
        </div>
      </div>
    </>
  );
}
