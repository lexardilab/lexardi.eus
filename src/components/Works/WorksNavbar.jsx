import { poppins } from "@/lib/fonts";
import Link from "next/link";

const WorksNavbar = () => {
  return (
    <nav className={`${poppins.variable} font-poppins`}>
      <div className="pt-12 pl-6">
        <Link href="/">
          <h1 className="text-xl font-bold">lexardi lab</h1>
        </Link>
      </div>
      <div className="pt-12 pl-6">
        <h1 className="text-xl font-bold">Works</h1>{" "}
        <Link href="/works/errari">
          <h1>Errari</h1>
        </Link>
        <Link href="/works/emak-bakia">
          <h1>Emak Bakia!</h1>
        </Link>
        <Link href="/works/nebra">
          <h1>Nebra</h1>
        </Link>
        <Link href="/works/gu">
          <h1>Gu</h1>
        </Link>
      </div>
      <div className="pt-24 pl-6">
        <Link href="/journal">
            <h1 className="font-bold text-xl">journal</h1>
          </Link>
          <Link href="/contact">
            <h1 className="font-bold text-xl">contact</h1>
          </Link>
          <Link href="https://www.instagram.com/lexardi_lab/" target="_blank">
            <h1 className="font-bold text-xl">instagram</h1>
          </Link>

      </div>
    </nav>
  );
};

export default WorksNavbar;
