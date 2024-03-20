import DetailsHeader from "@/components/shared/DetailsHeader";
import GoogleMap from "@/components/shared/GoogleMap";
import ResponsiveHouseCard from "@/components/shared/ResponsiveHouseCard";
import TopBarSorting from "@/components/shared/TopBarSorting";
import { housesInfo } from "@/utils/mocks/HouseData";

const CreateAnAdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden">
      <DetailsHeader />
      <div className="main container-height w-full flex flex-col md:flex-row lg:justify-center gap-[4px] p-1 overflow-y-auto lg:overflow-auto md:flex-wrap lg:flex-nowrap">
        <div className="md:w-full lg:min-w-[468px] lg:max-w-[468px] lg:h-full">
          <GoogleMap />
        </div>
        <div className="md:w-full lg:min-w-[475px] lg:max-w-[475px] lg:overflow-y-auto smoothBar lg:h-full">
          <TopBarSorting />
          <div className="w-full overflow-x-hidden flex flex-col gap-1 mt-[10px]">
            {housesInfo.map((house, idx) => (
              <ResponsiveHouseCard key={idx} data={house} />
            ))}
          </div>
        </div>
        <div className="mt-5 md:mt-5 md:w-full lg:min-w-[485px] lg:max-w-[485px] lg:overflow-y-auto smoothBar lg:h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CreateAnAdLayout;
