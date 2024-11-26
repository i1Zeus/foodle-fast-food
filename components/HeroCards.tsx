import { CircleDollarSignIcon, RefreshCcw, SquareCheckBig } from "lucide-react";
import React from "react";

const HeroCards = () => {
  return (
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
            your food delivery is absolutely free, no cost just order and enjoy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroCards;
