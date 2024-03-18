import GoogleMap from "@/components/shared/GoogleMap";
import HouseCard from "@/components/shared/HouseCard";
import TopBarSorting from "@/components/shared/TopBarSorting";
import { housesInfo } from "@/utils/mocks/HouseData";

const HomePage = () => {
  return (
    <article>
      <TopBarSorting />
      <section className="m-4 mb-24 grid lg:grid-cols-12 gap-[6px]">
        <div className="col-span-5">
          <GoogleMap />
        </div>
        <div className="col-span-7 flex flex-col gap-[6px]">
          {housesInfo.slice(0, 4).map((house, idx) => (
            <HouseCard key={idx} data={house} />
          ))}
        </div>
      </section>
    </article>
  );
};

export default HomePage;
