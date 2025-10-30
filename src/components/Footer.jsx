"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Detectar si estamos cerca del final de la página (100px antes)
      const distanceFromBottom = docHeight - (scrollTop + windowHeight);
      const isNearBottom = distanceFromBottom < 100;

      setIsExpanded(isNearBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Verificar posición inicial

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50">
      {/* Footer colapsado - barra superior */}
      <motion.div
        className="bg-white "
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="px-6 mx-auto py-4">
          <div className="flex items-center  justify-between">
            <span className="text-6xl font-montserrat font-black">LEXARDI</span>
            <span className="text-6xl font-black ">LAB</span>
          </div>

          <div className="flex items-center gap-6"></div>
        </div>
      </motion.div>

      {/* Footer expandido - contenido completo */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="bg-white"
            initial={{ height: 0, opacity: 1 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 40,
              opacity: { duration: 0.2 },
            }}
            style={{ overflow: "hidden" }}
          >
            <div className="max-w-7xl mx-auto px-6 py-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column - Brand & Info */}
                <div className="lg:col-span-5">
                  <div className="mb-6">
                    <p className="font-light leading-relaxed max-w-md text-sm">
                      Estudio de diseño gráfico especializado en identidad
                      visual, branding y estrategia creativa. Trabajamos con un
                      enfoque estratégico y una visión clara expresada a través
                      del diseño conceptual.
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className=" font-light text-sm">lexardi@lexardi.eus</p>
                  </div>
                </div>

                {/* Middle Column - Services */}
                <div className="lg:col-span-3">
                  <h3 className="text-base font-light mb-4 tracking-wide">
                    Servicios
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/servicios/identidad"
                        className=" hover:text-white transition-colors duration-300 font-light text-sm"
                      >
                        Identidad visual
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/servicios/branding"
                        className=" hover:text-white transition-colors duration-300 font-light text-sm"
                      >
                        Branding
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/servicios/editorial"
                        className=" hover:text-white transition-colors duration-300 font-light text-sm"
                      >
                        Diseño editorial
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/servicios/packaging"
                        className="0 hover:text-white transition-colors duration-300 font-light text-sm"
                      >
                        Packaging
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Right Column - Navigation */}
                <div className="lg:col-span-2">
                  <h3 className="text-base font-light mb-4 tracking-wide">
                    Navegación
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/projects"
                        className=" hover:text-white transition-colors duration-300 font-light text-sm"
                      >
                        Proyectos
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/estudio"
                        className=" hover:text-white transition-colors duration-300 font-light text-sm"
                      >
                        Estudio
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/journal"
                        className=" hover:text-white transition-colors duration-300 font-light text-sm"
                      >
                        Journal
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contacto"
                        className=" hover:text-white transition-colors duration-300 font-light text-sm"
                      >
                        Contacto
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Social Links */}
                <div className="lg:col-span-2">
                  <h3 className="text-base font-light mb-4 tracking-wide">
                    Social
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://instagram.com/lexardi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" hover:text-white transition-colors duration-300 font-light text-sm"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://behance.net/lexardi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" hover:text-white transition-colors duration-300 font-light text-sm"
                      >
                        Behance
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://linkedin.com/company/lexardi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" hover:text-white transition-colors duration-300 font-light text-sm"
                      >
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom copyright */}
              <div className="border-t border-gray-800 mt-8 pt-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <p className=" font-light text-xs mb-4 md:mb-0">
                    © 2025 Lexardi Lab. Todos los derechos reservados.
                  </p>
                  <div className="flex gap-4">
                    <Link
                      href="/privacidad"
                      className=" hover:text-gray-300 transition-colors duration-300 font-light text-xs"
                    >
                      Privacidad
                    </Link>
                    <Link
                      href="/cookies"
                      className=" hover:text-gray-300 transition-colors duration-300 font-light text-xs"
                    >
                      Cookies
                    </Link>
                    <Link
                      href="/legal"
                      className=" hover:text-gray-300 transition-colors duration-300 font-light text-xs"
                    >
                      Legal
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
