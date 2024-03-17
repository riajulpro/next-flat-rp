import HouseCard from "@/components/shared/HouseCard";
import { housesInfo } from "@/utils/mocks/HouseData";
import Image from "next/image";

const HomePage = () => {
  return (
    <section className="grid lg:grid-cols-12 gap-[6px]">
      <div className="col-span-5">
        <Image src={"/icons/Map.png"} alt="Map" height={832} width={535} />
      </div>
      <div className="col-span-7 flex flex-col gap-[6px]">
        {housesInfo.map((house, idx) => (
          <HouseCard key={idx} data={house} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
