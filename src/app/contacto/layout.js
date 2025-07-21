import "../globals.css";
import LogoScroll from "@/components/LogoScroll";


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
