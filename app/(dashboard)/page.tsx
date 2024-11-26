import Hero from "@/components/Hero/Hero";
import BestDelivered from "@/components/Sections/One/BestDelivered";
import Ads from "@/components/Sections/Three/Ads";
import RegularMenu from "@/components/Sections/Two/RegularMenu";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <BestDelivered />
      <RegularMenu />
      <Ads />
    </main>
  );
}
