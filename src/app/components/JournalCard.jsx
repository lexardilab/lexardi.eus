import Image from "next/image";
import Link from "next/link";
function JournalCard({ journal }) {
  return (
    <>
      <div className="">
        <div className="px-6 pt-12 pb-2">
          <h1 className="">{journal?.title}</h1>
        </div>
        <Link href={`/journals/${journal?.slug}`}>
          <div className="px-6 cursor-pointer">
            <Image
              src={journal?.image}
              width="400"
              height="600"
              alt="camiseta"
            />
          </div>
        </Link>
      </div>
    </>
  );
}

export default JournalCard;
