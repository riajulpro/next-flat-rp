import { PlusIcon } from "@/utils/icons/Icons";

const HrTitleTwo = () => {
  return (
    <div className="relative m-5 lg:mb-[44px]">
      <hr className="border-[1px] border-black" />
      <span className="absolute p-1 bg-white text-sm left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <button className="p-2 flex items-center gap-2 bg-blue-600 text-white rounded">
          Add a Bedroom{" "}
          <span className="h-[16px]">
            <PlusIcon />
          </span>
        </button>
      </span>
    </div>
  );
};

export default HrTitleTwo;
