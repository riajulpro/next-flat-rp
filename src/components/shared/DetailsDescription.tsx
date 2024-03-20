import { LeftArrow, TikMark, WarningIcon, Wrong } from "@/utils/icons/Icons";
import Requirements from "./Requirements";
import ApplyButton from "./ApplyButton";
import Link from "next/link";

const DetailsDescription = () => {
  return (
    <div className="my-[14px] text-sm">
      <div className="flex justify-between items-center mb-5">
        <div className="italic">Dublin 01 - IFSC</div>
        <div className="font-extrabold text-2xl">124 600 €</div>
        <Link href={"/apply"}>
          <ApplyButton />
        </Link>
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
        <Requirements className="self-end" />
      </div>
    </div>
  );
};

export default DetailsDescription;
