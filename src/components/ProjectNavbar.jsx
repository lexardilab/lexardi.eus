import Link from "next/link";
import { poppins } from "../lib/fonts";

const ProjectNavbar = () => {
  return (
    <nav className={`${poppins.variable} font-poppins`}>
      <div className="mx-auto px-24 pt-18 pb-12 flex justify-between items-center">
        {/* Logo a la izquierda */}
        <div>
          <Link href="/">          <h1 className="text-5xl font-bold">lexardi lab</h1> {/* 500 */}
</Link>
        </div>

        {/* Menú a la derecha */}
        <div className="flex space-x-8">
          <h1 className="font-light text-xl">projects</h1>
          <h1 className="font-light text-xl">cv</h1>
          <h1 className="font-light text-xl">contact</h1>
          <Link href="https://www.instagram.com/lexardi_lab/" target="_blank">
            <h1 className="font-light text-xl">instagram</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default ProjectNavbar;
