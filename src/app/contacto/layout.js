import "../globals.css";
import MetricoolScript from "../../components/MetricoolScript";

export const metadata = {
  title: "Lexardi Lab",
  description: "Estudio de diseño, y hacermos más cosas... ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <MetricoolScript />
        {children}
      </body>
    </html>
  );
}
