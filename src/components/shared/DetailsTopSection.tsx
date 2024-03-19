import { DetailsIcons } from "@/utils/mocks/DetailsIcons";

const DetailsTopSection = () => {
  return (
    <div className="flex justify-between items-start">
      <div className="text-xl font-bold">Flat</div>
      <div className="flex items-center gap-4">
        {DetailsIcons.map((item, idx) => (
          <div
            key={idx}
            className="h-[32px] w-[32px] bg-gray-100 rounded-full center-vnh"
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsTopSection;
