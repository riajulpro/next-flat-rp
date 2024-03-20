import GoogleMap from "@/components/shared/GoogleMap";
import CheckBox from "@/components/shared/Inputs/CheckBox";
import LabelTopInput from "@/components/shared/Inputs/LabelTopInput";
import PhotoGrid from "@/components/shared/Inputs/PhotoGrid";
import PhotoGridTwo from "@/components/shared/Inputs/PhotoGridTwo";
import SectionInput from "@/components/shared/Inputs/SelectionInput";
import Subtitle from "@/components/shared/Inputs/Subtitle";
import Title from "@/components/shared/Inputs/Title";
import { EditPen, PlusIcon } from "@/utils/icons/Icons";
import Image from "next/image";

const CreateAnAd = () => {
  return (
    <article className="h-full w-full">
      <section className="text-center">
        <Title text="Create a new ads" />
        <Subtitle text="Welcome to our form where you add as much information as need about your property" />
      </section>
      <section className="lg:mt-[32px] flex flex-col lg:flex-row lg:gap-[50px] lg:items-center">
        <div className="flex-1 flex gap-[30px] items-end">
          <LabelTopInput
            label="Email Address"
            placeholder="majd.najih@gmail.com"
            inputWidth="lg:w-[358px]"
          />
          <div className="flex flex-col items-start justify-start gap-[11px]">
            <p className="font-[500] text-[16px]">Phone Number</p>
            <div className="p-[10px] flex items-center justify-start gap-[12px] bg-[#fafbfc] border-[1px] border-[#E0E4EC] w-[358px] h-[52px] rounded-[8px]">
              <p>+1</p>
              <div className="w-[1px] h-full bg-[#E0E4EC]"></div>
              <input
                type="text"
                placeholder="Please enter your phone number"
                className="w-full h-full outline-none"
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Subtitle text="Please enter your email address and phone number to not lose your progress" />
        </div>
      </section>
      <section className="lg:mt-[32px] flex flex-col lg:flex-row lg:gap-[50px]">
        <div className="flex-1">
          <div className="mb-[60px]">
            <Title text="Localization" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <SectionInput placeholder="Country*" inputWidth="lg:w-[377px]" />
            <SectionInput placeholder="City*" inputWidth="lg:w-[377px]" />
            <SectionInput
              placeholder="Region / State*"
              inputWidth="lg:w-[377px]"
            />
            <SectionInput placeholder="Zip Code*" inputWidth="lg:w-[377px]" />
            <SectionInput placeholder="Area*" inputWidth="lg:w-[377px]" />
            <SectionInput
              placeholder="Street Address*"
              inputWidth="lg:w-[377px]"
            />
          </div>
          <div className="flex justify-between items-center mt-[50px]">
            <div className="flex items-center gap-3">
              <p className="font-light text-sm text-[#868686]">
                5.354708943431563,-3.9874719330168893
              </p>{" "}
              <button className="flex items-center gap-1 border rounded-md p-4">
                <EditPen /> Edit
              </button>
            </div>
            <div>
              <input type="checkbox" name="" id="" />{" "}
              <span className="text-sm text-[#868686]">
                Share the exact localization
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 max-h-[486px] min-h-[486px]">
          <GoogleMap />
        </div>
      </section>
      <section className="lg:mt-[32px] flex flex-col lg:flex-row lg:gap-[50px]">
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <Title text="Basics information" />
            <LabelTopInput
              inputWidth="lg:w-[193px]"
              label="Property Owner Name"
            />
          </div>
          <div className="flex gap-3 mt-[38px]">
            <Image
              src={"/icons/sales-rent.png"}
              alt="Sales and Rent"
              height={61}
              width={154}
            />
            <LabelTopInput
              inputWidth="lg:w-[193px]"
              label="You are*"
              placeholder="Real estate Agency"
              isDown={true}
            />
            <LabelTopInput
              inputWidth="lg:w-[193px]"
              label="Real Estate Agency name"
            />
            <LabelTopInput
              inputWidth="lg:w-[193px]"
              label="Property Owner email"
            />
          </div>
          <div className="flex gap-3 mt-[38px]">
            <LabelTopInput
              inputWidth="lg:w-[193px]"
              label="Property Type"
              placeholder="Flat"
              isDown={true}
            />
            <LabelTopInput
              inputWidth="lg:w-[193px]"
              label="Property creation date*"
              placeholder="MM/YYYY"
              isDown={true}
            />
            <CheckBox text="Stay anonymous (out of the contract)" />
          </div>
          <div className="flex gap-3 mt-[38px]">
            <LabelTopInput
              inputWidth="lg:w-[157px]"
              label="Number of Room"
              placeholder="6"
            />
            <LabelTopInput
              inputWidth="lg:w-[256px]"
              label="Price*"
              placeholder="2000 $ /"
              isOverlay={true}
              overlayRight="Month"
            />
            <LabelTopInput
              inputWidth="lg:w-[256px]"
              label="Surface (M2)*"
              placeholder="160"
              isOverlay={true}
              overlayRight="12.5 $/M2"
              isRed={true}
            />
          </div>
          <div className="flex items-center gap-5 mt-[38px]">
            <LabelTopInput
              inputWidth="lg:w-[175px]"
              label="Number of Bedroom*"
              placeholder="4"
            />
            <div>
              <button className="bg-[#5956E9] text-white p-3 rounded-md flex items-center gap-2">
                Add a Bedroom to rent separately{" "}
                <div className="h-[24px]">
                  <PlusIcon />
                </div>
              </button>
            </div>
          </div>
          <div className="flex gap-3 mt-[38px] mb-[10px]">
            <LabelTopInput
              inputWidth="lg:w-[175px]"
              label="Number of Bathroom"
              placeholder="2"
            />
            <div className="flex flex-col gap-1">
              <Subtitle text="Do you want to publish this add in other referencing site:" />
              <div className="flex justify-between items-center">
                <CheckBox text="Realtor.com" isChecked={true} />
                <CheckBox text="le bon coin.com" />
                <CheckBox text="Zillow.com" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <PhotoGrid />
        </div>
      </section>
    </article>
  );
};

export default CreateAnAd;
