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
      <div className="pt-6 pl-6">
        <Link href="/works/errari"><h1>Errari</h1></Link>
        <Link href="/works/emak-bakia"><h1>Emak Bakia</h1></Link>
        <Link href="/works/nebra"><h1>Nebra</h1></Link>
      </div>
    </nav>
  );
};

export default WorksNavbar;
