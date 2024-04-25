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
      <div className="grid grid-cols-3 px-4 py-4 pb-12">
        <div className="flex items-center">
          <h1
            className={`${roboto_mono.className} pr-12 text-3xl font-bold uppercase`}
          >
            {product?.name}
          </h1>
          <span className={`${roboto_mono.className} px-4  text-3xl`}>
            {product?.price} €
          </span>
        </div>
        <div className="flex items-center justify-start space-x-3">
          <h1 className="text-xs ">Color:</h1>
          {product?.colors?.map((color) => {
            switch (color) {
              case "Opal":
                return (
                  <div
                    key={color._id}
                    color={color}
                    onClick={() => {
                      setSelectedColor(color);
                    }}
                    className={`${
                      color == selectedColor ? "border-2 border-black" : ""
                    } w-10 h-10 rounded-full bg-[#a09e9c] cursor-pointer`}
                  ></div>
                );
              case "Black":
                return (
                  <div
                    key={color._id}
                    color={color}
                    onClick={() => {
                      setSelectedColor(color);
                    }}
                    className={`${
                      color == selectedColor ? "border-2 border-black" : ""
                    } w-10 h-10 rounded-full bg-[#2a2b2d] cursor-pointer `}
                  ></div>
                );
              case "Blue":
                return (
                  <div
                    key={color._id}
                    color={color}
                    onClick={() => {
                      setSelectedColor(color);
                    }}
                    className={`${
                      color == selectedColor ? "border-2 border-black" : ""
                    } w-10 h-10 rounded-full bg-blue-800 cursor-pointer `}
                  ></div>
                );
              default:
                return (
                  <div
                    key={color._id}
                    color={color}
                    onClick={() => {
                      setSelectedColor(color);
                    }}
                    className={`${
                      color == selectedColor ? "border-2 border-black" : ""
                    } w-10 h-10 rounded-full bg-gray-300 cursor-pointer  border-black`}
                  ></div>
                );
            }
          })}
          <div className="flex items-center pl-4 space-x-3">
            <h1 className="text-xs text-center ">Tallas:</h1>
            {product?.sizes?.map((size) => {
              switch (size) {
                case "S":
                  return (
                    <div
                      key={size._id}
                      size={size}
                      onClick={() => {
                        setSelectedSize(size);
                      }}
                      className={`${
                        size == selectedSize
                          ? "border-2 border-black flex items-center justify-center "
                          : ""
                      } w-10 h-10 rounded-full cursor-pointer  border-2 flex items-center justify-center`}
                    >
                      <h1 className="text-center">S</h1>
                    </div>
                  );
                case "M":
                  return (
                    <div
                      key={size._id}
                      size={size}
                      onClick={() => {
                        setSelectedSize(size);
                      }}
                      className={`${
                        size == selectedSize
                          ? "border-2 border-black flex items-center justify-center"
                          : ""
                      } w-10 h-10 rounded-full cursor-pointer  border-2 flex items-center justify-center`}
                    >
                      <h1>M</h1>
                    </div>
                  );
                case "L":
                  return (
                    <div
                      key={size._id}
                      size={size}
                      onClick={() => {
                        setSelectedSize(size);
                      }}
                      className={`${
                        size == selectedSize
                          ? "border-2 border-black flex items-center justify-center"
                          : ""
                      } w-10 h-10 rounded-full cursor-pointer  border-2 flex items-center justify-center`}
                    >
                      <h1>L</h1>
                    </div>
                  );
                case "XL":
                  return (
                    <div
                      key={size._id}
                      size={size}
                      onClick={() => {
                        setSelectedSize(size);
                      }}
                      className={`${
                        size == selectedSize
                          ? "border-2 border-black flex items-center justify-center"
                          : ""
                      } w-10 h-10 rounded-full cursor-pointer  border-2 flex items-center justify-center`}
                    >
                      <h1>XL</h1>
                    </div>
                  );
                case "XXL":
                  return (
                    <div
                      key={size._id}
                      size={size}
                      onClick={() => {
                        setSelectedSize(size);
                      }}
                      className={`${
                        size == selectedSize
                          ? "border-2 border-black flex items-center justify-center"
                          : ""
                      } w-10 h-10 rounded-full cursor-pointer  border-2 flex items-center justify-center`}
                    >
                      <h1>XXL</h1>
                    </div>
                  );
                case "Unica":
                  return (
                    <div
                      key={size._id}
                      size={size}
                      onClick={() => {
                        setSelectedSize(size);
                      }}
                      className={`${
                        size == selectedSize
                          ? "border-2 border-black flex items-center justify-center"
                          : ""
                      } w-10 h-10 rounded-full cursor-pointer  border-2 flex items-center justify-center`}
                    >
                      <h1>XXL</h1>
                    </div>
                  );
                default:
                  return (
                    <div
                      key={size._id}
                      size={size}
                      onClick={() => {
                        setSelectedSize(size);
                      }}
                      className={`${
                        size == selectedSize
                          ? "border-2 border-black flex items-center justify-center"
                          : ""
                      } w-10 h-10 rounded-full cursor-pointer  border-2 flex items-center justify-center`}
                    ></div>
                  );
              }
            })}
            <label className="text-xs" htmlFor="">
              Cantidad:
            </label>
            <input
              type="number"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              className="w-20 h-10 px-4 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="flex items-center justify-end ">
          <div className="flex items-center justify-center pl-6 space-x-3"></div>
          <button className="text-2xl " onClick={handleAddToCart}>
            Añadir a la cesta
          </button>
        </div>
      </div>
    </>
  );
}
