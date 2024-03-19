import { LeftArrow } from "@/utils/icons/Icons";

const ApplyButton = () => {
  return (
    <button className="bg-gray-100 rounded-md p-2 flex items-center justify-center gap-2">
      Apply <LeftArrow />
    </button>
  );
};

export default ApplyButton;
