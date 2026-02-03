import ContactLeft from "@/components/Contact/ContactLeft";
import ContactRight from "@/components/Contact/ContactRight";

export default function Contact() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 max-w-5xl mx-auto">
        <div className="h">
          <ContactLeft />
        </div>
        <div className="">
          <ContactRight />
        </div>
      </div>
    </>
  );
}
