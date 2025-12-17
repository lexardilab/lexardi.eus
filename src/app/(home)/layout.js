import "../globals.css";
import { montserrat, lora, poppins } from "../../lib/fonts";
import MetricoolScript from "../../components/MetricoolScript";
import HeroTwo from "@/components/Home/HeroTwo";
import HeroThree from "@/components/Home/HeroThree";

export const metadata = {
  title: "Lexardi Lab",
  description: "Estudio de diseño, y hacemos más cosas...",
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
        <HeroTwo />
        <HeroThree />
      </body>
    </html>
  );
}
