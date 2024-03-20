import AdsCard from "@/components/shared/AdsCard";
import ApplyButton from "@/components/shared/ApplyButton";
import DataCard from "@/components/shared/DataCard";
import DetailsImageContainer from "@/components/shared/DetailsImageContainer";
import DetailsTopSection from "@/components/shared/DetailsTopSection";
import RatingLeftInfo from "@/components/shared/RatingLeftInfo";
import RatingRightInfo from "@/components/shared/RatingRightInfo";
import Requirements from "@/components/shared/Requirements";

const CreateAnAd = () => {
  return (
    <div className="px-2">
      <DetailsTopSection />
      <div className="h-[297px] mt-[14px]">
        <DetailsImageContainer />
      </div>
      <div className="flex justify-between items-start mt-[10px]">
        <p className="font-light text-base italic">Dublin 01 - IFSC</p>
        <p className="font-bold text-2xl">124 600 €</p>
      </div>
      <div className="flex justify-between items-stretch">
        <div className="flex flex-col gap-[6px]">
          <p>123 m²</p>
          <p>3 Bedroom</p>
          <p>5 Room</p>
        </div>
        <div className="flex flex-col gap-[6px]">
          <p>123 m²</p>
          <p>3 Bedroom</p>
          <p>5 Room</p>
        </div>
        <div className="self-end">
          <ApplyButton />
        </div>
      </div>
      <div className="mt-[10px]">
        <AdsCard text="Google Advertisement every 4 ads" height="36px" />
      </div>
      <div className="flex justify-between md:items-stretch gap-2 mt-[10px]">
        <div className="flex gap-2 flex-wrap md:flex-nowrap">
          <DataCard title="165" subTitle="Total Viewing" />
          <DataCard title="15" subTitle="Total Applies" />
        </div>
        <div className="md:self-end">
          <Requirements />
        </div>
      </div>
      <div className="mt-[14px] line-clamp-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
        distinctio laboriosam quasi cum obcaecati beatae, maiores reprehenderit,
        non similique praesentium dignissimos asperiores perferendis unde odit
        dolor. Et fugiat alias, aliquam dignissimos autem commodi optio
        voluptates odit sapiente beatae incidunt iure amet, nostrum quae
        placeat, eligendi cum cupiditate sunt! Nobis, vero?
      </div>
      <div className="mt-[14px] grid grid-cols-12 bg-gray-100 p-1 rounded">
        <div className="col-span-12 md:col-span-5 border-r flex flex-col justify-between gap-2 p-3">
          <RatingLeftInfo />
        </div>
        <div className="col-span-12 md:col-span-7 p-3">
          <RatingRightInfo />
        </div>
      </div>
      <div className="mt-[14px] font-semibold text-lg">Reviews</div>
    </div>
  );
};

export default CreateAnAd;
