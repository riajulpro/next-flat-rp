import React from "react";
import EnableItem from "./EnableItem";
import DisableItem from "./DisableItem";
import LabelTopInput from "./LabelTopInput";
import { PlusIcon } from "@/utils/icons/Icons";
import WhatIsIncludeTwo from "./WhatIsIncludeTwo";
import Subtitle from "./Subtitle";
import HrTitleTwo from "./HrTitleTwo";

const AddABedroom = () => {
  return (
    <>
      <HrTitleTwo />
      <section className="flex flex-col lg:flex-row">
        <div className="flex-1 grid grid-cols-5">
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row gap-2 items-center">
              <LabelTopInput
                label="Floor"
                placeholder="4"
                inputWidth="lg:w-[157px]"
              />
              <div className="flex flex-col gap-2">
                <DisableItem text="Roof Top" />
                <DisableItem text="Ground Floor" />
              </div>
            </div>
            <DisableItem text="Balcony / Terrace" />
            <DisableItem text="Basement" />
            <div className="flex flex-col lg:flex-row gap-2">
              <EnableItem text="Garden" />
              <LabelTopInput
                label="Garden Size (M2)*"
                placeholder="4"
                inputWidth="lg:w-[157px]"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-2">
              <EnableItem text="Agency" />
              <LabelTopInput
                label="Agency Fees"
                placeholder="7%"
                inputWidth="lg:w-[157px]"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-2 items-center">
              <EnableItem text="Private Parking" />
              <div>
                <button className="bg-[#5956E9] text-white text-[10px] p-2 rounded-md flex items-center gap-2">
                  Add a Bedroom to rent separately{" "}
                  <div className="h-[12px]">
                    <PlusIcon />
                  </div>
                </button>
              </div>
            </div>
            <DisableItem text="Electric car charging station" />
            <EnableItem text="Walk-In Closet" />
            <EnableItem text="Built in Wardrobes" />
            <EnableItem text="Shared Laundry" />
            <EnableItem text="Shard Pool" />
          </div>
          <div className="col-span-12 lg:col-span-2 flex flex-col gap-8">
            <EnableItem text="Fiber Deployed" />
            <EnableItem text="Intercorn" />
            <EnableItem text="Handicap Access" />
            <EnableItem text="Elevator" />
            <EnableItem text="Shared Spa" />
            <EnableItem text="Concierge Service" />
            <EnableItem text="Shared Gym" />
            <EnableItem text="Pets Allowed" />
            <div>waiting...</div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex flex-col lg:flex-row gap-2">
            <EnableItem text="Housing Charges" />
            <LabelTopInput
              label="Average Price/Month"
              placeholder="150$"
              inputWidth="lg:w-[157px]"
            />
          </div>
          <WhatIsIncludeTwo />
          <LabelTopInput
            label="Energy Performance Diagnostic level (kWh)"
            placeholder="160"
            inputWidth="lg:w-[309px]"
          />
          <div className="flex flex-col lg:flex-row gap-2">
            <EnableItem text="Deposit" />
            <LabelTopInput
              label="Average Price/Month"
              placeholder="150$"
              inputWidth="lg:w-[157px]"
            />
            <DisableItem text="Already Rent" />
          </div>
          <div>
            <Subtitle text="Description" />
            <div className="lg:min-h-[180px] lg:max-h-[180px] p-3 bg-gray-100 rounded-md overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              eum voluptates, molestias fugiat exercitationem ex. At, qui
              delectus animi, labore error quibusdam, quo corporis voluptatibus
              laborum tempora quam. Autem deleniti officia ab ex quibusdam sint,
              repellat, optio adipisci distinctio a dolor nesciunt! Laboriosam,
              sunt fugiat eius, assumenda earum tenetur molestias perspiciatis
              commodi libero repellendus ad modi eum voluptates nisi accusantium
              fuga maxime dolorum et iusto quos corporis molestiae officia
              repellat. Mollitia esse ipsam tempora ea.
            </div>
          </div>
          <EnableItem text="Urgent *" />
        </div>
      </section>
    </>
  );
};

export default AddABedroom;
