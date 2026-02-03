import WorksNavbar from "@/components/Works/WorksNavbar";
import WorksProject from "@/components/Works/WorksProject";

export default function ProjectPage() {
  return (
    <div className="grid grid-cols-3 bg-[#E0DDD4]">
      <div className="col-span-1 h-screen sticky top-0">
        <WorksNavbar />
      </div>
      <div className="col-span-2 overflow-auto max-h-screen">
        <WorksProject />
      </div>
    </div>
  );
}
