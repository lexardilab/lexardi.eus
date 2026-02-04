import "./globals.css";
import { Montserrat, Lora, Poppins, Space_Grotesk } from 'next/font/google'; 
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
  // Título base y plantilla para páginas hijas
  title: {
    default: "Lexardi Lab | Estudio de Diseño Estratégico y Branding",
    template: "%s", 
  },
  description: "Estudio de diseño especializado en branding, dirección de arte y soluciones digitales estratégicas.",
  keywords: ["Diseño Gráfico", "Branding", "Estrategia", "Estudio de Diseño"],
  authors: [{ name: "Lexardi Lab" }],
  creator: "Lexardi Lab",
  
  // Configuración para Redes Sociales (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website", 
    locale: "es_ES",
    url: "https://lexardilab.com", // Cambia por tu dominio real
    siteName: "Lexardi Lab",
    title: "Lexardi Lab | Diseño Estratégico",
    description: "Creamos marcas con alma y estrategia digital.",
    images: [
      {
        url: "/og-image.jpg", // Debes poner una imagen de 1200x630 en tu carpeta public
        width: 1200,
        height: 630,
        alt: "Lexardi Lab Portfolio",
      },
    ],
  },

  // Configuración para Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Lexardi Lab",
    description: "Estudio de diseño estratégico y branding.",
    images: ["/og-image.jpg"],
  },

  // Favicons y manifiesto
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  
  robots: {
    index: true, // Permite que Google indexe la web
    follow: true, // Permite que Google siga los enlaces internos
    nocache: true, // Sugiere que no guarden versiones muy viejas en caché
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large', // Importante para que tus fotos salgan grandes en Google Images
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="es" 
      // 2. Inyectamos todas las variables en el HTML
      className={`${montserrat.variable} ${lora.variable} ${poppins.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased font-montserrat">
        <Analytics />
        {children}
      </body>
    </html>
  );
}