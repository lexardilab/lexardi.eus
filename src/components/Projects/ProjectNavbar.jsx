import Link from "next/link";

const WorksNavbar = () => {
  return (
    /* Contenedor principal para alinear la línea y tu contenido */
    <nav className="flex min-h-screen bg-[#E0DDD4]">
      {/* 1. LA LÍNEA VERTICAL VISUAL */}
      <div className="pt-12 pb-12 pl-6 flex">
        {/* h-full hace que recorra todo el alto disponible entre el padding superior e inferior */}
        <div className="w-px h-full bg-black/20"></div>
      </div>

      {/* 2. TU CONTENIDO TAL CUAL LO MANDASTE */}
      <div className="flex flex-col">
        <div className="pt-12 pl-6">
          <Link href="/">
            <h1 className="text-4xl font-grotesk font-bold text-[#1d1d1d]">
              LEXARDI LAB
            </h1>
          </Link>
        </div>

        <div className="pt-12 pl-6">
          <h1
            className="text-3xl font-grotesk pb-2 text-[#1d1d1d]"
          >
            Works
          </h1>
          <Link href="/works/errari">
            <h1 className="font-grotesk text-xl text-[#1d1d1d]">Errari</h1>
          </Link>
          <Link href="/works/emak-bakia">
            <h1 className="font-grotesk text-xl text-[#1d1d1d]">Emak Bakia!</h1>
          </Link>
          <Link href="/works/bruma">
            <h1 className="font-grotesk text-xl text-[#1d1d1d]  ">Bruma</h1>
          </Link>
          <Link href="/works/gu">
            <h1 className="font-grotesk text-xl text-[#1d1d1d]  ">Gu</h1>
          </Link>
        </div>

        <div className="pt-24 pl-6">
          <Link href="/journal">
            <h1 className="font-space-grotesk text-xl text-[#1d1d1d]">journal</h1>
          </Link>
          <Link href="/projects">
            <h1 className="font-space-grotesk text-xl text-[#1d1d1d]">projects</h1>
          </Link>
          <Link href="/contact">
            <h1 className="font-space-grotesk text-xl text-[#1d1d1d]">contact</h1>
          </Link>
          <Link href="https://www.instagram.com/lexardi_lab/" target="_blank">
            <h1 className="font-space-grotesk text-xl">instagram</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default WorksNavbar;
