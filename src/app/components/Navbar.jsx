import { montserrat, roboto_mono } from "../utils/fonts";
import Image from "next/image";
import Link from "next/link";

export default function BasicMenu() {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <div>
        <Link href="/">
          <Image
            src="/borobil_yellow.svg"
            width={40}
            height={100}
            alt="Lexardi Logo"
          />
        </Link>
      </div>
      <div className="flex ">
        <h1 className={`${roboto_mono.className} text-sm text-black px-2`}>
          Tienda
        </h1>
        <h1 className={`${roboto_mono.className} text-sm text-black px-2`}>
          Marca
        </h1>
        <h1 className={`${roboto_mono.className} text-sm text-black`}>
          Journal
        </h1>
      </div>
    </div>
  );
}
