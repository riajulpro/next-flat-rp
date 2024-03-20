import { PlusIcon } from "@/utils/icons/Icons";
import Image from "next/image";

const PhotoGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-2 auto-rows-[150px]">
      <div className="bg-gray-200 col-span-2 row-span-2">
        <Image
          src={"/images/photo1.png"}
          alt="Gallery Photo 01"
          height={500}
          width={200}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-gray-200 center-vnh">
        <div className="h-8 w-8">
          <PlusIcon />
        </div>
      </div>
      <div className="bg-gray-200 center-vnh">
        <div className="h-8 w-8">
          <PlusIcon />
        </div>
      </div>
      <div className="bg-gray-200 center-vnh">
        <div className="h-8 w-8">
          <PlusIcon />
        </div>
      </div>
      <div className="bg-gray-200 center-vnh">
        <div className="h-8 w-8">
          <PlusIcon />
        </div>
      </div>
      <div className="bg-gray-200 center-vnh">
        <div className="h-8 w-8">
          <PlusIcon />
        </div>
      </div>
    </div>
  );
};

export default PhotoGrid;
