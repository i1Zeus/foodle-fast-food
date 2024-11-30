import Image from "next/image";
import Link from "next/link";

const BestDelivered = () => {
  return (
    <div className="relative w-full h-[600px] flex flex-col py-8 px-16 -mt-10">
      <h1 className="text-4xl font-bold capitalize">
        Best <span className="text-red-600">delivered</span>
        <br />
        categories
      </h1>
      <div className="flex justify-between">
        <div className="w-1/3 h-[300px] flex flex-col items-center justify-center">
          <Image
            src="/hamburger.png"
            alt="hamburger"
            width={250}
            height={250}
            className="rounded-full"
          />
          <h2 className="text-xl font-bold capitalize">chicken burger</h2>
          <Link href="/menu" className="text-red-500">
            order now &gt;
          </Link>
        </div>
        <div className="w-1/3 h-[300px] flex flex-col items-center justify-center">
          <Image
            src="/pizza.png"
            alt="pizza"
            width={250}
            height={250}
            className="rounded-full"
          />
          <h2 className="text-xl font-bold capitalize">chicken pizza</h2>
          <Link href="/menu" className="text-red-500">
            order now &gt;
          </Link>
        </div>
        <div className="w-1/3 h-[300px] flex flex-col items-center justify-center">
          <Image
            src="/finger.png"
            alt="French Fries"
            width={250}
            height={250}
            className="rounded-full"
          />
          <h2 className="text-xl font-bold capitalize">French Fries</h2>
          <Link href="/menu" className="text-red-500">
            order now &gt;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BestDelivered;
