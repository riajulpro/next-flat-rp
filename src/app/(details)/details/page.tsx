import Details from "@/components/shared/Details";
import GoogleMap from "@/components/shared/GoogleMap";
import RenderLineChart from "@/components/shared/RenderLineChart";

const DetailsPage = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center gap-[22px] overflow-y-auto mt-5">
      <Details />
      {/* right side content */}
      <div className="lg:max-w-[746px] lg:min-w-[746px]">
        <div className="md:w-[746px] h-[500px] md:h-[929px]">
          <GoogleMap />
        </div>
        <div className="mt-[14px] mb-[100px]">
          <RenderLineChart />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
