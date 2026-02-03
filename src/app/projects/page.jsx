
export default function Projects() {
  return (
    <>
      <div className="flex justify-center pb-12">
        <div>
          <h1 className="text-center text-xl pt-24 font-montserrat text-red-200">
            Agian gaur etzait nabari zauria <br />
            hodeiertzan ez da ageri <br />
            nahiko nukeen herria...
          </h1>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="border-t border-black pt-4">
            <p className="font-grotesk text-sm mb-2 uppercase opacity-50 ">Space Grotesk (Nueva)</p>
            <p className="font-grotesk text-2xl">
              Diseño estratégico y branding con una estética geométrica.
            </p>
          </div>

          <div className="border-t border-black pt-4">
            <p className="font-poppins text-sm mb-2 uppercase opacity-50">Poppins (Cargada desde lib)</p>
            <p className="font-poppins text-2xl">
              La tipografía secundaria que ya tenías configurada.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
