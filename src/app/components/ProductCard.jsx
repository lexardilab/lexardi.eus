import Image from "next/image";
import Link from "next/link";
function Card({ product }) {
  return (
    <>
      <div className="px-6 pt-12 pb-2 ">
        <h1 className="">{product?.name}</h1>
      </div>
      <Link href={`/products/${product?.slug}`}>
        <div className="px-6 cursor-pointer">
          <Image src={product?.image} width="400" height="600" alt="camiseta" />
        </div>
      </Link>
    </>
  );
}

export default Card;
