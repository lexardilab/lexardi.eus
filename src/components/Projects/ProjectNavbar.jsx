import Link from "next/link";

const ProjectNavbar = () => {
  return (
    <nav>
      <div className="mx-auto px-24 pt-18 pb-12 flex justify-between items-center bg-[#A7AEB1]">
        {/* Logo a la izquierda */}
        <div>
          <Link href="/">
            <h1 className="text-5xl font-grotesk text-[#1d1d1d]">LEXARDI LAB</h1> {/* 500 */}
          </Link>
        </div>

        {/* Menú a la derecha */}
        <div className="flex space-x-8">
          <Link href="/journal">
            <h1 className="font-poppins text-xl text-[#1d1d1d]">journal</h1>
          </Link>
          <Link href="/works">
            <h1 className="font-poppins text-xl text-[#1d1d1d]">works</h1>
          </Link>
          <Link href="/contact">
            <h1 className="font-poppins text-xl text-[#1d1d1d]">contact</h1>
          </Link>
          <Link href="https://www.instagram.com/lexardi_lab/" target="_blank">
            <h1 className="font-poppins text-xl text-[#1d1d1d]">instagram</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default ProjectNavbar;
