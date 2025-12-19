import "../globals.css";
import { montserrat, lora, poppins } from "../../lib/fonts";
import MetricoolScript from "../../components/MetricoolScript";
import "swiper/css";
import "swiper/css/navigation";
import { Analytics } from "@vercel/analytics/next"


export const metadata = {
  title: "Lexardi Lab | Estudio de diseño",
  description: "Lexardi Lab | Estudio de diseño estratégico y branding",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${lora.variable} ${poppins.variable}`}
    >
      <body className="font-montserrat">
        <MetricoolScript />
        <Analytics/>
        {children}
      </body>
    </html>
  );
}
