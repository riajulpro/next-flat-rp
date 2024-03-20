import { PlusIcon } from "@/utils/icons/Icons";

const PhotoGridTwo = () => {
  return (
    <div className="grid grid-cols-3 gap-2 auto-rows-[93px]">
      <div className="bg-gray-100 col-span-2 row-span-3 center-vnh">
        <div className="h-8 w-8">
          <PlusIcon />
        </div>
      </div>
      <div className="bg-gray-100 center-vnh">
        <div className="h-8 w-8">
          <PlusIcon />
        </div>
      </div>
      <div className="bg-gray-100 center-vnh">
        <div className="h-8 w-8">
          <PlusIcon />
        </div>
      </div>
      <div className="bg-gray-100 center-vnh">
        <div className="h-8 w-8">
          <PlusIcon />
        </div>
      </div>
    </div>
  );
};

export default PhotoGridTwo;
