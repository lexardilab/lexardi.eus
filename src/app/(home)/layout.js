import "../globals.css";

export const metadata = {
  title: "Lexardi Lab",
  description: "Generating ideas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-yellow-100">{children}</body>
    </html>
  );
}
