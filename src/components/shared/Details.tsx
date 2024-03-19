import React from "react";
import RatingLeftInfo from "./RatingLeftInfo";
import RatingRightInfo from "./RatingRightInfo";
import { Paper } from "@/utils/icons/Icons";
import DetailsDescription from "./DetailsDescription";
import DetailsImageContainer from "./DetailsImageContainer";
import DetailsTopSection from "./DetailsTopSection";
import DataCard from "./DataCard";
import AdsCard from "./AdsCard";

const Details = ({ width }: { width?: string }) => {
  return (
    <div
      className={`${
        width ? `lg:${width}` : "lg:min-w-[622px]"
      } lg:max-w-[622px] h-full`}
    >
      <div className="px-[3px]">
        <DetailsTopSection />
        <div className="h-[297px] mt-[14px]">
          <DetailsImageContainer />
        </div>
        <DetailsDescription />
        <AdsCard text="Google Advertisement every 4 ads" />
        <div className="mt-[14px] px-[3px] center-vnh grid grid-cols-2 gap-3">
          <DataCard title="2174" subTitle="Total Viewing" />
          <DataCard title="574" subTitle="Total Applies" />
        </div>
        <div className="mt-[14px] line-clamp-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          distinctio laboriosam quasi cum obcaecati beatae, maiores
          reprehenderit, non similique praesentium dignissimos asperiores
          perferendis unde odit dolor. Et fugiat alias, aliquam dignissimos
          autem commodi optio voluptates odit sapiente beatae incidunt iure
          amet, nostrum quae placeat, eligendi cum cupiditate sunt! Nobis, vero?
        </div>
        <div className="mt-[14px] grid grid-cols-12 bg-gray-100 p-1 mb-[76px] rounded">
          <div className="col-span-5 border-r flex flex-col justify-between gap-2 p-3">
            <RatingLeftInfo />
          </div>
          <div className="col-span-7 p-3">
            <RatingRightInfo />
          </div>
        </div>
        <div className="mt-[14px] font-semibold text-lg">Reviews</div>
      </div>
    </div>
  );
};

export default Details;
