import DisableItem from "./DisableItem";
import EnableItem from "./EnableItem";
import HrTitle from "./HrTitle";
import LabelTopInput from "./LabelTopInput";
import PhotoGridTwo from "./PhotoGridTwo";
import WhatIsInclude from "./WhatIsInclude";

const BedroomSection = ({
  bedroom,
  isUrgent,
}: {
  bedroom: string;
  isUrgent?: boolean;
}) => {
  return (
    <div className="lg:my-[40px]">
      <HrTitle text={bedroom} />
      <section className="lg:mt-[32px] flex flex-col lg:flex-row gap-3 lg:gap-[50px]">
        <div className="flex-1">
          <EnableItem text="Private Bedroom" />
          <EnableItem text="Private Balcony" />
          <div className="flex gap-3 items-start">
            <EnableItem text="Furniture" />
            <WhatIsInclude />
          </div>
          <div className="flex gap-5 mt-[20px]">
            <LabelTopInput
              inputWidth="lg:w-[170px]"
              label="Rent Amount ($)*"
              placeholder="500"
            />
            <LabelTopInput
              inputWidth="lg:w-[262px]"
              label="Surface (M2)*"
              placeholder="13"
              isOverlay={true}
              overlayRight="38.46 $/m2"
              isRed={true}
            />
          </div>
          <div className="flex gap-3 mt-[20px] lg:items-stretch flex-col lg:flex-row">
            <div className="self-start">
              {isUrgent ? (
                <DisableItem text="Already Rent" />
              ) : (
                <EnableItem text="Already rent" />
              )}
            </div>
            <LabelTopInput
              inputWidth="lg:w-[358px]"
              label="Email Address*"
              placeholder="majd.najih@gmail.com"
            />
            <div className="self-end">
              {isUrgent ? <EnableItem text="Urgent" /> : null}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <PhotoGridTwo />
        </div>
      </section>
    </div>
  );
};

export default BedroomSection;
