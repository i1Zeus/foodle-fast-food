import MenuCard from "@/components/MenuCard";

const RegularMenu = () => {
  return (
    <div className="relative flex flex-col px-32 py-24 -mt-10">
      <h1 className="text-4xl font-bold capitalize">
        our <span className="text-red-600">regular</span> menu
      </h1>
      <div className="h-fit flex flex-col items-center justify-center w-full">
        <div className="sm:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 gap-10 mt-10">
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
      </div>
    </div>
  );
};

export default RegularMenu;
