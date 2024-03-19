"use client";

import { images } from "@/utils/mocks/DetailsImages";
import Image from "next/image";
import React, { useState } from "react";

const DetailsImageContainer = () => {
  const [selected, setSelected] = useState<number>(0);

  const totalImg = images.length;

  const nextImg = () => {
    const lastImg = images.length - 1;

    if (selected === lastImg) {
      return setSelected(0);
    }

    setSelected(selected + 1);
  };

  const prevImg = () => {
    const lastImg = images.length - 1;

    if (selected === 0) {
      return setSelected(lastImg);
    }

    setSelected(selected - 1);
  };

  return (
    <section className="rounded-[5px] overflow-hidden relative h-full w-full">
      {images.map((img, i) => (
        <div
          key={"img" + i}
          className={`w-full h-full absolute top-0 left-0 ${
            i === selected ? "opacity-1" : "opacity-0"
          } duration-[0.4s]`}
        >
          <Image
            width={252}
            height={297}
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
    </section>
  );
};

export default DetailsImageContainer;
