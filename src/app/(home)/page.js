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
      <div className="flex justify-center pt-4 pb-12">
        <h1 className="text-center font-thin text-5xl">azpitik dena sutan dabil
        </h1>
      </div >
<<<<<<< HEAD
      <div className="grid grid-cols-4 gap-4 px-4 pb-12">
        <div className="bg-red-200">01</div>
        <div className="bg-blue-200">02</div>
        <div className="bg-orange-200">03</div>
        <div className="bg-yellow-200">04</div>

      </div>


=======
>>>>>>> 307fe7fc36eff6d05f598c98a5488b593859a44e
    </>
  );
}
