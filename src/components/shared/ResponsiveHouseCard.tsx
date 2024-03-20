"use client";

import {
  CrossEye,
  Eye,
  LeftArrow,
  LinkIcon,
  Love,
  Share,
} from "@/utils/icons/Icons";
import Link from "next/link";
import CarouselImage from "./CarouselImage";
import ApplyButton from "./ApplyButton";

type DataType = {
  id?: string;
  name: string;
  subName: string;
  rooms: string[];
  price: string;
  views: string;
  since: string;
  images: string[];
  links: { href: string }[];
};

interface propsType {
  data: DataType;
}

const ResponsiveHouseCard: React.FC<propsType> = ({ data }) => {
  return (
    <div className="px-1 w-full lg:min-h-[195px] h-auto bg-[#D9D9D9] pl-[7.3px] pr-[5.8px] pt-[7.19px] sm:pt-[0px] lg:pt-[7.19px] flex justify-start flex-col items-center lg:items-start gap-[16px] rounded-[10px] sm:flex-row">
      {/* image slider */}
      <div className="w-full sm:min-w-[252.87px] h-[176.81px] rounded-[5px] overflow-hidden relative">
        <CarouselImage imgData={data.images} />

        {/* viwes*/}
        <div className="absolute top-[9.81px] left-[12.87px] w-[56px] h-[30px] pl-[5px] pr-[10px] center-vnh bg-[#00000080] text-white rounded-[5px]">
          <Eye /> <p className="text-[10px] font-[9000]">{data.views}</p>
        </div>

        {/* year */}
        <div className="absolute top-[9.81px] left-[87.87px] w-[44px] h-[30px] p-[5px] center-vnh bg-[#00000080] text-white rounded-[5px]">
          <p className="text-[10px] font-[9000]">{data.since}</p>
        </div>

        {/* activity option  for small device */}
        <div className="flex sm:hidden justify-between items-center gap-[9.64px] absolute top-[8px] right-[5.8px]">
          <div className="rounded-full center-vnh w-[32px] h-[32px] bg-[#E2E8F0]">
            <Share />
          </div>
          <div className="rounded-full center-vnh w-[32px] h-[32px] bg-[#E2E8F0]">
            <Love />
          </div>
          <div className="rounded-full center-vnh w-[32px] h-[32px] bg-[#E2E8F0]">
            <CrossEye />
          </div>
        </div>
      </div>

      {/* details */}
      <div className="w-full flex flex-col items-start justify-start gap-[2.66px] pt-[2.87px] relative lg:pb-[0px] pb-[10px]">
        {/* activity options*/}
        <div className="hidden sm:flex justify-between items-center gap-[9.64px] absolute top-[8px] right-[5.8px]">
          <div className="rounded-full center-vnh w-[32px] h-[32px] bg-[#E2E8F0]">
            <Share />
          </div>
          <div className="rounded-full center-vnh w-[32px] h-[32px] bg-[#E2E8F0]">
            <Love />
          </div>
          <div className="rounded-full center-vnh w-[32px] h-[32px] bg-[#E2E8F0]">
            <CrossEye />
          </div>
        </div>

        <p className="absolute text-[24px] font-[700] top-[73px] right-[23px]">
          {data.price}
        </p>

        <div className="flex flex-col gap-[5.91px]">
          <div className="flex flex-col gap-[0px]">
            <Link
              href={`/details`}
              className="text-[24px] font-[500] hover:underline"
            >
              {data.name}
            </Link>
            <p className="text-[16px] font-[300] italic">{data.subName}</p>
          </div>

          <div className="flex flex-col gap-[5.91px]">
            {data.rooms.map((room, i) => (
              <p key={i + "r"} className="text-[14px] font-[500]">
                {room}
              </p>
            ))}
          </div>
        </div>

        <div className="flex justify-end xsm:justify-between w-full items-center">
          <div className="hidden xsm:flex justify-center items-center gap-[7.36px]">
            {data.links.map((link, i) => (
              <Link
                href={link.href}
                key={i + "link"}
                className="flex gap-[5.04px] items-center font-[300] text-[12px]"
              >
                <LinkIcon /> Link {i + 1}
              </Link>
            ))}
          </div>

          <Link href={"/apply"}>
            <ApplyButton />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveHouseCard;
