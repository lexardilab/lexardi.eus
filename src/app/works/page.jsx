import GallerySlider from "@/components/GallerySlider";
import WorksNavbar from "@/components/Works/WorksNavbar";

export default function Projects() {

  const trialImages = [
     "https://res.cloudinary.com/dxkxg2ivb/image/upload/v1770310962/blog.lexardi.xyz/016_hvkwan.webp",
     "https://res.cloudinary.com/dxkxg2ivb/image/upload/v1677775091/blog.lexardi.xyz/IMG_7353_jux4bu.webp",
     "https://res.cloudinary.com/dxkxg2ivb/image/upload/v1677766304/blog.lexardi.xyz/index_photoblog_dhtfp6.webp",
     "https://res.cloudinary.com/dxkxg2ivb/image/upload/v1675546688/blog.lexardi.xyz/misc-5_swaeir.webp",
     "https://res.cloudinary.com/dxkxg2ivb/image/upload/v1675546685/blog.lexardi.xyz/misc-8_zq8nmh.webp",
     "https://res.cloudinary.com/dxkxg2ivb/image/upload/v1675546684/blog.lexardi.xyz/misc-1_cjwvpb.webp"
  ];

  return (
    <>
      <div className="grid grid-cols-3 bg-[#e0ddd4] h-screen">
        <div className="col-span-1">
          <WorksNavbar />
        </div>
        <div className=" col-span-2">
          <div className="pt-12 px-6">
            <div className="mb-32">
              <div className="w-full">
                <GallerySlider
                  images={trialImages}
                  aspect="aspect-[4/3]"
                  arrowSize="10rem"
                  className="w-full transition-all duration-700 ease-in-out"
                />
              </div>
              <div className="flex justify-between mt-4 text-[10px] uppercase tracking-widest opacity-60">
                <span>Click for more</span>
                <span>Selected Projects 01-03</span>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
