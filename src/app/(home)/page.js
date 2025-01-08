import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center ">
        <Image
          width="1928"
          height="600"
          src="https://res.cloudinary.com/dxkxg2ivb/image/upload/v1675546550/gaizka.me/index/itx_1_v2dzog.webp"
          alt="Itzina"
          className="w-full h-screen"
        />
      </div>
      <div className="pt-12 flex justify-center pb-4">
        <Image
          width="600"
          height="50"
          src="/Logo_Harri.jpg"
          alt="Itzina"
          className=""
        />

      </div>
      <div className="flex justify-center pt-6 pb-12">
        <h1 className="text-center">Mollit et proident voluptate labore commodo cillum. Dolore mollit reprehenderit aliqua labore in aliquip fugiat mollit.<br />
          Eu ipsum elit velit enim tempor minim labore voluptate incididunt anim voluptate fugiat. Lorem mollit do dolor aute ad.
        </h1>
      </div >

    </>
  );
}
