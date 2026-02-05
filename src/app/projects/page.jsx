import GallerySlider from "@/components/GallerySlider";
import Link from "next/link";

export default function Projects() {
  const trialImages = [
    "https://res.cloudinary.com/dxkxg2ivb/image/upload/v1675546686/blog.lexardi.xyz/misc-2_t2mpvj.webp",
    "https://res.cloudinary.com/dxkxg2ivb/image/upload/v1675546686/blog.lexardi.xyz/misc-2_t2mpvj.webp",
  ];

  return (
    <main className="bg-[#C5B5B8] pt-12 pb-12">
      <div className="grid grid-cols-5">
        <div className="px-6 col-span-1">
          <h1 className="text-xs font-mono leading-relaxed pb-12">
            Agian gaur etzait nabari zauria 
            hodeiertzan ez da ageri
            nahiko nukeen herria...
          </h1>

          <div className="border-t border-black pb-12"></div>

          <div className="">
            <Link href="/journal">
              <h1 className=" font-grotesk text-xl text-[#1d1d1d]">
                journal
              </h1>
            </Link>
            <Link href="/works">
              <h1 className="font-grotesk text-xl text-[#1d1d1d]">
                works
              </h1>
            </Link>
            <Link href="/contact">
              <h1 className="font-grotesk text-xl text-[#1d1d1d]">
                contact
              </h1>
            </Link>
            <Link href="https://www.instagram.com/lexardi_lab/" target="_blank">
              <h1 className="font-grotesk text-xl  text-[#1d1d1d]">instagram</h1>
            </Link>
          </div>
        </div>
        <div className="px-6 col-span-2">
            <div className="w-full pb-6">
              <GallerySlider
                images={trialImages}
                aspect="aspect-[4/3]"
                arrowSize="6rem"
                className="w-full"
              />
            </div>
            <div className="w-full">
              <GallerySlider
                images={trialImages}
                aspect="aspect-[4/3]"
                arrowSize="6rem"
                className="w-full"
              />
          </div>
        </div>
        <div className="px-6 col-span-1">
          <h1 className="text-2xl pb-4 font-lora">Luz y Vacío</h1>
          <h1 className="text-xs font-mono pb-6">
            This publication, “Light and emptiness. Highlands of Soria” was
            conceived in San Pedro Manrique and its surroundings during the
            summer of 2024. A personal Project by Gonzalo Fonseca, founder of
            Steve Mono.
          </h1>
          <div className="border-t border-black pb-6"></div>
          <h1 className="text-xs font-mono">
            "This small village in Soria, part of the “Empty Spain” called area,
            is the place where my mum was born and spent her early years until
            she had to move to the city to build a life. A real adventure and a
            test of strength that so many other very young women and men lived
            during a very difficult time period of time. A tribute to her, to
            that time and to so many round trips from the village to the city,
            trying not to forget her roots, and making my dad, me and my
            brothers feel part of them even when this was not easy. Since I was
            a child I fell in love with this place, this sky, this landscape,
            this people and their traditions… and in a way I am making the trip
            in the other direction; from the city to the village, trying to
            strengthen these roots."</h1>
            <h1 className="text-2xl font-grotesk py-6">18,00€ </h1>
            <h1 className="text-xs font-mono pb-6">
              Format: 110x165mm. Four-colour printing. Saddle stitching with a
              central fold-out in window format. 56 pages. Paper: Arena Bulk
              Natural 90gsm. Outer cover: 330x440mm. Two versions: blue 09 and
              chrome yellow 24 (Rapsodia).
            </h1>{" "}
            Buy
        </div>
        <div className="px-6 col-span-1">
          <Link href="/">
          <h1 className="text-4xl font-grotesk font-bold text-[#1d1d1d]">
            LEXARDI LAB
          </h1>
          </Link>
        </div>
      </div>
    </main>
  );
}
