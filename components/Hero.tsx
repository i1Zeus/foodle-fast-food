import { CircleDollarSignIcon, RefreshCcw, SquareCheckBig } from "lucide-react";
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
            Buy Now
          </Button>
        </div>
        <div className="w-fit h-fit p-4 mx-auto bg-background flex flex-wrap justify-between items-center z-50 absolute bottom-[22%] rounded-xl">
          {/* Card #1 */}
          <div className="h-[100px] w-[371px] flex items-center justify-evenly">
            <div className="size-20 flex items-center justify-center bg-yellow-300 rounded-full">
              <SquareCheckBig className="size-12" />
            </div>
            <div className="w-[65%] flex flex-col items-start justify-center">
              <h2 className="text-2xl font-bold">Fast Delivery</h2>
              <p className="text-balance text-sm font-light text-gray-500">
                the food will be delivered to your home within 1-2 hours of the
                ordering
              </p>
            </div>
          </div>
          {/* Card #2 */}
          <div className="h-[100px] w-[371px] flex items-center justify-evenly">
            <div className="size-20 flex items-center justify-center bg-yellow-300 rounded-full">
              <RefreshCcw className="size-12" />
            </div>
            <div className="w-[65%] flex flex-col items-start justify-center">
              <h2 className="text-2xl font-bold">Fresh Food</h2>
              <p className="text-balance text-sm font-light text-gray-500">
                your food will be delivery 100% fresh to home. we do not deliver
                stale food
              </p>
            </div>
          </div>
          {/* Card #3 */}
          <div className="h-[100px] w-[371px] flex items-center justify-evenly">
            <div className="size-20 flex items-center justify-center bg-yellow-300 rounded-full">
              <CircleDollarSignIcon className="size-12" />
            </div>
            <div className="w-[65%] flex flex-col items-start justify-center">
              <h2 className="text-2xl font-bold">Free Delivery</h2>
              <p className="text-balance text-sm font-light text-gray-500">
                your food delivery is absolutely free, no cost just order and
                enjoy.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-back h-[70%] w-full absolute top-0 z-0" />
    </div>
  );
};

export default Hero;
