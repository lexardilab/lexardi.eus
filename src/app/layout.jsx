import "./globals.css";
import { Montserrat, Lora, Poppins, Space_Grotesk } from 'next/font/google'; // Todas juntas aquí
import { Analytics } from "@vercel/analytics/next";

// 1. Configuramos cada fuente
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lora',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Definimos pesos para Poppins
  variable: '--font-poppins',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-grotesk',
  display: 'swap',
});

export const metadata = {
  title: "Lexardi Lab | Estudio de diseño",
  description: "Lexardi Lab | Estudio de diseño estratégico y branding",
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="es" 
      // 2. Inyectamos todas las variables en el HTML
      className={`${montserrat.variable} ${lora.variable} ${poppins.variable} ${spaceGrotesk.variable}`}
    >
      <body className="antialiased font-montserrat">
        <Analytics />
        {children}
      </body>
    </html>
  );
}