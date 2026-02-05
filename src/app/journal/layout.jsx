import JournalNavbar from "@/components/Journal/JournalNavbar";
export const metadata = {
  title: "Lexardi Lab | Projects",
  description: "Estudio de diseño",
};

export default function Layout({ children }) {
  return (
      <>
        <JournalNavbar/>
        {children}
    </>
  );
}
