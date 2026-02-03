import WorksNavbar from "@/components/Works/WorksNavbar";

export default function Projects() {
  return (
    <>
      <div className="grid grid-cols-3 bg-[#e0ddd4] h-screen">
        <div className="col-span-1">
          <WorksNavbar />
        </div>
        <div className=" col-span-2">
          <div className="pt-12 pl-6"> 
            Prueba div Works
          </div>
        </div>
      </div>
    </>
  );
}
