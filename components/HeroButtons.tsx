import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const HeroButtons = () => {
  return (
    <div className="z-50 flex items-center justify-center w-full gap-5 mr-[50%]">
      <Link href="/menu">
        <Button variant="ghost" className="text-md font-bold rounded-full">
          <div className="bg-pOne flex items-center justify-center gap-2 p-2 text-white rounded-full">
            <Image
              src="/heroBag.png"
              width={28}
              height={28}
              alt="bag"
              className=""
            />
            Buy Now
          </div>
        </Button>
      </Link>
      <Link href="/about">
        <Button
          variant="ghost"
          className="hover:bg-back text-md font-bold text-black rounded-full"
        >
          <Image
            src="/heroHow.png"
            width={28}
            height={28}
            alt="bag"
            className=""
          />
          How to Order
        </Button>
      </Link>
    </div>
  );
};

export default HeroButtons;
