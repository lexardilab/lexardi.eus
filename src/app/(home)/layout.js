import Header from '@/components/Header'
import '../globals.css' // o donde esté tu CSS global (Tailwind etc)
import ClientLayout from '@/components/ClientLayout'
import CustomCursor from '@/components/CustomCursor'
import { Montserrat } from 'next/font/google'
import LogoScroll from '@/components/LogoScroll'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '600'],
  style: ['normal'],
  display: 'swap',
})

export const metadata = {
  title: 'Lexardi Lab',
  description: 'Estudio de diseño, y hacemos más cosas...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body>
      <ClientLayout>
          <Header />
          <LogoScroll />
          <CustomCursor />
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
