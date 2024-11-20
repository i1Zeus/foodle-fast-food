import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <section className="flex flex-col items-center justify-center w-full h-full">
        <div className="container z-50 flex items-center justify-evenly w-full -mt-[30%] text-black relative">
          <h1 className="text-pOne text-6xl font-bold">
            All Fast Food is <br /> Available at{" "}
            <b className="decoration-yellow-400 underline">Foodle</b>
          </h1>
          <Image
            src="/Line.png"
            width={250}
            height={250}
            alt="line"
            className="top-12 absolute right-[38%]"
          />
          <Image
            src="/heroImage.png"
            width={400}
            height={400}
            alt="sandwich"
            className="object-contain"
          />
        </div>
        <div className="z-50 flex items-center justify-center w-full gap-5 mr-[50%]">
          <Button className="bg-pOne text-lg font-bold rounded-full">
            <Image
              src="/heroBag.png"
              width={28}
              height={28}
              alt="bag"
              className=""
            />
            Buy Now
          </Button>
          <Button className="bg-back text-lg font-bold text-black rounded-full">
            <Image
              src="/heroHow.png"
              width={28}
              height={28}
              alt="bag"
              className=""
            />
            Buy Now
          </Button>
        </div>
      </section>
      <div className="bg-back h-[80%] w-full absolute top-0 z-0" />
    </div>
  );
};

export default Hero;
