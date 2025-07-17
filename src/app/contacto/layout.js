import Header from "@/components/Header";
import "../globals.css";
import ClientLayout from "@/components/ClientLayout";
import LogoScroll from "@/components/LogoScroll";
import CustomCursor from "@/components/CustomCursor";
export const metadata = {
  title: "Lexardi Lab",
  description: "Estudio de diseño, y hacermos más cosas... ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
                  <LogoScroll />
                  {children}
      </body>
    </html>
  );
}
