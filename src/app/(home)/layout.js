import "../globals.css";
import { montserrat, lora, poppins } from '../../lib/fonts';
import MetricoolScript from "../../components/MetricoolScript";
import { Montserrat } from "next/font/google";
import HeroTwo from "@/components/HeroTwo";
import HeroThree from "@/components/HeroThree";

export const metadata = {
  title: "Lexardi Lab",
  description: "Estudio de diseño, y hacermos más cosas... ",
};


export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} font-montserrat`}>
        <MetricoolScript />
        {children}
        <HeroTwo />
        <HeroThree />
      </body>
    </html>
  );
}
