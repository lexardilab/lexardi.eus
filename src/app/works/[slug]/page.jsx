import WorksNavbar from "@/components/Works/WorksNavbar";

import WorksProject from "@/components/Works/WorksProject";
export default function ProjectPage() {
  

  return (
    <>
      <div className="grid grid-cols-3">
        <div className="col-span-1"><WorksNavbar /></div>
        <div className="col-span-2"><WorksProject /></div>
      </div>
    </>
  );
}
