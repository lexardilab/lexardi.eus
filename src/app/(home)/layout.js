import "../globals.css";
import MetricoolScript from "../../components/MetricoolScript";
import { Montserrat } from "next/font/google";
import HeroTwo from "@/components/HeroTwo";
import HeroThree from "@/components/HeroThree";

export const metadata = {
  title: "Lexardi Lab",
  description: "Estudio de diseño, y hacermos más cosas... ",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} font-sans`}>
        <MetricoolScript />
        {children}
        <HeroTwo />
        <HeroThree />
      </body>
    </html>
  );
}
