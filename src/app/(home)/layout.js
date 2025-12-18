import "../globals.css";
import { montserrat, lora, poppins } from "../../lib/fonts";
import MetricoolScript from "../../components/MetricoolScript";
import "swiper/css";
import "swiper/css/navigation";


export const metadata = {
  title: "Lexardi Lab | Estudio de diseño estratégico y branding",
  description: "Lexardi Lab | Elevando marcas a través del diseño conceptual. Especialistas en identidad visual, branding y soluciones creativas con un enfoque estratégico.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${lora.variable} ${poppins.variable}`}
    >
      <body className="font-montserrat">
        <MetricoolScript />
        {children}
      </body>
    </html>
  );
}
