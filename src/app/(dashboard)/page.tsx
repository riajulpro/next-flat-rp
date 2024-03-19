import GoogleMap from "@/components/shared/GoogleMap";
import HouseCard from "@/components/shared/HouseCard";
import TopBarSorting from "@/components/shared/TopBarSorting";
import { housesInfo } from "@/utils/mocks/HouseData";

const HomePage = () => {
  return (
    <main className="w-full h-full flex flex-col lg:flex-row gap-[6px]">
      <div className="w-full h-full">
        <GoogleMap />
      </div>
      <div className="lg:min-w-[598px] lg:max-w-[598px] flex flex-col">
        <div className="h-[50px]">
          <TopBarSorting />
        </div>
        <div className="w-full h-full overflow-y-auto overflow-x-hidden">
          {housesInfo.map((house, idx) => (
            <HouseCard key={idx} data={house} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
