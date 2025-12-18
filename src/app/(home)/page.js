import ImageSlideshow from "@/components/ImageSlideshow";
import HeroTwo from "@/components/Home/HeroTwo";
import HeroThree from "@/components/Home/HeroThree";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center ">
        <ImageSlideshow />
      </div>
      <HeroTwo />
      <HeroThree />
    </>
  );
}
