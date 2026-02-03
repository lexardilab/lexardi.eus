import ProjectNavbar from "@/components/Projects/ProjectNavbar";
export const metadata = {
  title: "Lexardi Lab | Projects",
  description: "Estudio de diseño",
};

export default function Layout({ children }) {
  return (
    <html lang="es">
      <body>
        <ProjectNavbar />
        {children}</body>
    </html>
  );
}
