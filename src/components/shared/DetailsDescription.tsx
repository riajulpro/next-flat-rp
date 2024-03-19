import { LeftArrow, TikMark, WarningIcon, Wrong } from "@/utils/icons/Icons";

const DetailsDescription = () => {
  return (
    <div className="my-[14px] text-sm">
      <div className="flex justify-between items-center mb-5">
        <div className="italic">Dublin 01 - IFSC</div>
        <div className="font-extrabold text-2xl">124 600 €</div>
        <button className="bg-gray-100 rounded-md p-2 flex items-center justify-center gap-2">
          Apply <LeftArrow />
        </button>
      </div>
      <div className="flex justify-between items-stretch">
        <div className="self-start">
          <p>123 m²</p>
          <p>2 Bedroom</p>
          <p>5 Room</p>
          <p>123 m²</p>
          <p>2 Bedroom</p>
          <p>5 Room</p>
        </div>
        <div className="self-start">
          <p>123 m²</p>
          <p>2 Bedroom</p>
          <p>5 Room</p>
          <p>123 m²</p>
          <p>2 Bedroom</p>
          <p>5 Room</p>
        </div>
        <div className="self-end">
          <p className="flex gap-1 items-center">
            <TikMark /> Requirements 1
          </p>
          <p className="flex gap-1 items-center">
            <TikMark /> Requirements 2
          </p>
          <p className="flex gap-1 items-center">
            <WarningIcon /> Requirements 3
          </p>
          <p className="flex gap-1 items-center">
            <Wrong /> Requirements 4
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsDescription;
