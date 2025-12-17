import ContactLeft from "@/components/Contact/ContactLeft";
import { poppins } from "../../lib/fonts";
import ContactRight from "@/components/Contact/ContactRight";

export default function Contact() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 max-w-5xl mx-auto">
        <div className={`${poppins.variable} font-poppins`}>
          <ContactLeft />
        </div>
        <div className={`${poppins.variable} font-poppins`}>
          <ContactRight />
        </div>
      </div>
    </>
  );
}
