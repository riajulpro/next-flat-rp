import DetailsDescription from "@/components/shared/DetailsDescription";
import DetailsImageContainer from "@/components/shared/DetailsImageContainer";
import GoogleMap from "@/components/shared/GoogleMap";
import RatingLeftInfo from "@/components/shared/RatingLeftInfo";
import RatingRightInfo from "@/components/shared/RatingRightInfo";
import RenderLineChart from "@/components/shared/RenderLineChart";
import { Paper } from "@/utils/icons/Icons";
import { DetailsIcons } from "@/utils/mocks/DetailsIcons";

const DetailsPage = () => {
  return (
    <div className="flex justify-center gap-[22px] overflow-y-auto mt-5">
      <div className="w-[622px] h-full">
        <div className="px-[3px]">
          <div className="flex justify-between items-start">
            <div className="text-xl font-bold">Flat</div>
            <div className="flex items-center gap-4">
              {DetailsIcons.map((item, idx) => (
                <div
                  key={idx}
                  className="h-[32px] w-[32px] bg-gray-100 rounded-full center-vnh"
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
          <div className="h-[297px] mt-[14px]">
            <DetailsImageContainer />
          </div>
          <DetailsDescription />
          <div className="h-[124px] w-[574px] mx-auto bg-[#8D4E83] center-vnh">
            Google Advertisement every 4 ads
          </div>
          <div className="mt-[14px] w-[574px] mx-auto center-vnh grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3 border rounded-md px-5 py-4">
              <Paper />
              <div>
                <h1 className="text-lg font-bold">2174</h1>
                <p className="text-sm font-light">Total Viewing</p>
              </div>
            </div>
            <div className="flex items-center gap-3 border rounded-md px-5 py-4">
              <Paper />
              <div>
                <h1 className="text-lg font-bold">574</h1>
                <p className="text-sm font-light">Total Applies</p>
              </div>
            </div>
          </div>
          <div className="mt-[14px] line-clamp-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            distinctio laboriosam quasi cum obcaecati beatae, maiores
            reprehenderit, non similique praesentium dignissimos asperiores
            perferendis unde odit dolor. Et fugiat alias, aliquam dignissimos
            autem commodi optio voluptates odit sapiente beatae incidunt iure
            amet, nostrum quae placeat, eligendi cum cupiditate sunt! Nobis,
            vero?
          </div>
          <div className="mt-[14px] grid grid-cols-12 bg-gray-100 p-1 mb-[76px] rounded">
            <div className="col-span-4 border-r flex flex-col justify-between gap-2">
              <RatingLeftInfo />
            </div>
            <div className="col-span-8">
              <RatingRightInfo />
            </div>
          </div>
          <div className="mt-[14px] font-semibold text-lg">Reviews</div>
        </div>
      </div>
      {/* right side content */}
      <div className="w-[746px]">
        <div className="w-[746px] h-[929px]">
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
