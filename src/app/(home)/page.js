import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen">
      <Image
        src="https://res.cloudinary.com/dxkxg2ivb/image/upload/v1675546550/gaizka.me/index/itx_1_v2dzog.webp"
        alt="Itzina"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
