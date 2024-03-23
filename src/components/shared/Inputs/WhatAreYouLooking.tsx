import EnableItem from "./EnableItem";
import FilterBox from "./FilterBox";
import HrTitle from "./HrTitle";
import LabelTopInput from "./LabelTopInput";

const WhatAreYouLooking = () => {
  const optionArr1 = ["Self-employed", "Unemployed", "Student", "Employed"];

  return (
    <section className="w-full">
      <HrTitle text="Who are you looking for" />
      <div className="w-full flex items-center justify-center xsm:justify-between lg:justify-start 2xl:gap-[466px] lg:gap-[50px] gap-[20px] flex-wrap lg:flex-nowrap">
        <div className="flex gap-5">
          <FilterBox
            optionArr={optionArr1}
            placeholder="Working Status"
            isApply={true}
          />
          <FilterBox
            optionArr={optionArr1}
            placeholder="Working Status"
            isApply={true}
          />
        </div>

        <div className="px-10 py-20 border drop-shadow-md bg-white flex flex-col center-vnh">
          <h2 className="text-[28px] text-[#131313] italic">Drop files here</h2>
          <p>or</p>
          <button className="w-[150px] bg-[#6979F8] py-[14px] text-white rounded-md">
            Browse
          </button>
        </div>
      </div>

      <div className="flex mt-4 gap-3">
        <EnableItem text="Guarantor allow or request" />
        <div className="relative">
          <LabelTopInput label="Other" inputWidth="lg:w-[269px]" />
        </div>
      </div>
      <div className="flex gap-5 mt-4">
        <div className="relative">
          <LabelTopInput
            label="Minimum salary request"
            placeholder="0 $ / month"
            inputWidth="lg:w-[269px]"
          />
        </div>
        <div className="relative">
          <LabelTopInput
            label="Set your availability for tour"
            inputWidth="lg:w-[222px]"
          />
        </div>
        <button className="max-w-[300px] min-h-[49px] bg-[#6979F8] text-[16px] font-[400] rounded-md text-white">
          Are you looking for an Real estate agent or agency?
        </button>
      </div>

      <div className="w-full flex items-center justify-center xsm:justify-end gap-[15px] flex-wrap mt-[69px]">
        <button className="py-[11px] px-[30px] border-[1px] border-[#3C50E0] text-[#3C50E0] rounded-[4px]">
          Save this ads in draft
        </button>
        <button className="py-[11px] px-[30px] border-[1px] bg-[#3C50E0] text-white rounded-[4px]">
          Save this ads in draft
        </button>
      </div>
    </section>
  );
};

export default WhatAreYouLooking;
