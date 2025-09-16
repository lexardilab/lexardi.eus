import "./globals.css";
import MetricoolScript from "../components/MetricoolScript";
import { Lora, Montserrat } from "next/font/google";
import Footer from "../components/Footer";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Lexardi Lab",
  description: "Estudio de diseño, y hacermos más cosas... ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${lora.variable} ${montserrat.variable}`}>
      <body>
        <MetricoolScript />
        {children}
        <Footer />
      </body>
    </html>
  );
}
