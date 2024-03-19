"use client";

import { Eye, LeftArrow, LinkIcon } from "@/utils/icons/Icons";
import { CardTopIcons } from "@/utils/mocks/CardTopIcons";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

type DataType = {
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

const HouseCard: React.FC<propsType> = ({ data }) => {
  const [selected, setSelected] = useState<number>(0);

  // --- total number of image ---
  const totalImg = data.images.length;

  // next image slide
  const nextImg = () => {
    // --- index of the last image
    const lastImg = data.images.length - 1;

    // check islast image
    if (selected === lastImg) {
      return setSelected(0);
    }

    setSelected(selected + 1);
  };

  // prev image slide
  const prevImg = () => {
    // --- index of the last image
    const lastImg = data.images.length - 1;

    // check isfirst image
    if (selected === 0) {
      return setSelected(lastImg);
    }

    setSelected(selected - 1);
  };

  return (
    <article className="card-container mb-[6px]">
      <section className="card-thumbnail">
        {data.images.map((img, i) => (
          <div
            key={"img" + i}
            className={`w-full h-full absolute top-0 left-0 ${
              i === selected ? "opacity-1" : "opacity-0"
            } duration-[0.4s]`}
          >
            <Image
              width={252}
              height={176}
              src={img}
              alt="img"
              className={`absolute top-0 left-0 object-cover w-full h-full`}
            />
          </div>
        ))}

        <div className="absolute w-full h-full flex justify-between items-center">
          <button onClick={prevImg}>
            <Image
              src={"/icons/arrow-left.png"}
              alt="right"
              width={25.18}
              height={27}
            />
          </button>

          <button onClick={nextImg}>
            <Image
              src={"/icons/arrow-right.png"}
              alt="right"
              width={25.18}
              height={27}
            />
          </button>

          <div className="absolute w-full bottom-[12.47px] flex justify-center items-center gap-[10px]">
            {Array.from({ length: totalImg })
              .fill("")
              .map((_, i) => (
                <div
                  key={i + "dot"}
                  className={`w-[10px] h-[10px] ${
                    i === selected ? "bg-[#0080FF]" : "bg-[#BBBBBF]"
                  } rounded-full cursor-pointer`}
                  onClick={() => setSelected(i)}
                ></div>
              ))}
          </div>
        </div>

        <div className="absolute z-40 top-2 left-2 flex gap-2">
          <div className="text-xs center-vnh bg-black/50 text-white rounded py-1 px-2">
            <Eye /> {data.views}
          </div>
          <div className="text-xs center-vnh bg-black/50 text-white rounded py-1 px-2">
            {data.since}
          </div>
        </div>
      </section>
      <section className="card-details">
        <p className="absolute text-[24px] font-[700] top-[73px] right-[23px]">
          {data.price}
        </p>

        <div className="absolute top-0 right-0 flex justify-end items-center gap-[10px]">
          {CardTopIcons.map((item, idx) => (
            <div
              key={idx}
              className="h-[32px] w-[32px] bg-white rounded-full center-vnh"
            >
              {item.icon}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-[5.91px]">
          <div className="flex flex-col gap-[0px]">
            <h1 className="text-[24px] font-[500]">
              <Link href={"/details"}>{data.name}</Link>
            </h1>
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

        <div className="flex justify-between w-full items-center">
          <div className="flex justify-center items-center gap-[7.36px]">
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

          <button className="w-[93px] h-[40px] px-[14px] flex items-center gap-[10px] bg-white rounded-[6px]">
            Apply <LeftArrow />
          </button>
        </div>
      </section>
    </article>
  );
};

export default HouseCard;
