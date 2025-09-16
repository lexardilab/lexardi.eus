import Image from "next/image";

export default function HeroOne() {
  return (
    <div className="flex items-center justify-center ">
      <Image
        width="1928"
        height="600"
        src="https://res.cloudinary.com/dxkxg2ivb/image/upload/v1675546550/gaizka.me/index/itx_1_v2dzog.webp"
        alt="Itzina"
        className="w-full h-screen"
      />
    </div>
  );
}
