"use client";
import Image from "next/image";
import "../globals.css";
import { montserrat, roboto_mono } from "../utils/fonts";
export default function JournalDetails({ journal }) {
  return (
    <>
      <div className="flex items-center justify-center pt-24">
        <h1 className={`${roboto_mono.className} text-4xl`}>
          {journal?.title}
        </h1>
      </div>
      <div className="flex justify-center pt-12">
        <h1 className={`${montserrat.className} text-xl font-semibold`}>
          {journal?.subtitle}
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="pt-12 w-[600px]">
          <h1 className={`${montserrat.className} text-sm text-center `}>
            {journal?.description}
          </h1>
        </div>
      </div>
      <div className="pt-12 ">
        <Image
          src={journal?.introimage}
          width="1000"
          height="600"
          alt="Intro Image Lexardi"
          className="w-full"
        />
      </div>
      <div className="grid grid-cols-3 gap-6 px-6 pt-12 pb-6">
        <div>
          <h1 className={`${montserrat.className} text-sm `}>
            {journal?.descriptionOne}
          </h1>
        </div>
        <div>
          <Image
            src={journal?.firstimage}
            width="1000"
            height="600"
            alt="Intro Image Lexardi"
            className=""
          />
          <h1 className={`${roboto_mono.className} text-sm`}>
            {journal?.title}
          </h1>
        </div>
        <div>
          <Image
            src={journal?.secondimage}
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
