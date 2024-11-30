import { Star, StarHalf } from "lucide-react";
import Image from "next/image";

const MenuCard = () => {
  return (
    <div className="bg-[#FEEADF] relative flex flex-col items-start justify-end w-[260px] h-[316px] p-6 rounded-2xl shadow-md">
      <Image
        src="/hamburger.png"
        alt="card"
        height={175}
        width={175}
        className="border-[8px] border-red-600 rounded-full absolute -top-8 -right-5"
      />
      <h2 className="mt-14 text-2xl font-bold capitalize">Chicken Burger</h2>
      <div className="flex items-center mt-2">
        <Star className="fill-[#FBC203] text-[#FBC203]" />
        <Star className="fill-[#FBC203] text-[#FBC203]" />
        <Star className="fill-[#FBC203] text-[#FBC203]" />
        <Star className="fill-[#FBC203] text-[#FBC203]" />
        <StarHalf className="fill-[#FBC203] text-[#FBC203]" />
        <span className="ml-2 text-sm text-gray-500">(124)</span>
      </div>
      <p className="mt-2 text-2xl font-bold capitalize">$3.50</p>
    </div>
  );
};

export default MenuCard;
