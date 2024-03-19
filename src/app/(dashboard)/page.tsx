import GoogleMap from "@/components/shared/GoogleMap";
import HouseCard from "@/components/shared/HouseCard";
import ResponsiveHouseCard from "@/components/shared/ResponsiveHouseCard";
import TopBarSorting from "@/components/shared/TopBarSorting";
import { housesInfo } from "@/utils/mocks/HouseData";

const HomePage = () => {
  return (
    <main className="w-full h-full flex flex-col lg:flex-row gap-[6px]">
      <div className="w-full h-full mt-[80px] md:mt-0">
        <GoogleMap />
      </div>
      <div className="lg:min-w-[598px] lg:max-w-[598px] flex flex-col">
        <div className="h-[50px]">
          <TopBarSorting />
        </div>
        <div className="card-sm-h lg:w-full lg:h-full overflow-y-auto overflow-x-hidden flex flex-col gap-[6px] smoothBar px-[8px] z-0">
          {housesInfo.map((house, idx) => (
            <ResponsiveHouseCard key={idx} data={house} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
