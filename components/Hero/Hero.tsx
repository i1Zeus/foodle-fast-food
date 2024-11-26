import Image from "next/image";
import HeroButtons from "./HeroButtons";
import HeroCards from "./HeroCards";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <section className="flex flex-col items-center justify-center w-full h-full">
        <div className="container z-50 flex items-center justify-evenly w-full -mt-[30%] text-black relative">
          <h1 className="text-pOne text-6xl font-bold">
            All Fast Food is <br /> Available at{" "}
            <b className="decoration-yellow-400 underline decoration-[7px]">
              Foodle
            </b>
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
        <HeroButtons />
        <HeroCards />
      </section>
      <div className="bg-back h-[70%] w-full absolute top-0 z-0" />
    </div>
  );
};

export default Hero;
