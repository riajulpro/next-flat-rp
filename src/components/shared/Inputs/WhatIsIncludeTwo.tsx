import LabelTopInput from "./LabelTopInput";

const WhatIsIncludeTwo = () => {
  return (
    <div className="max-w-[485px] mt-[9px]">
      <h4 className="text-[#868686]">What is Include:</h4>
      <div>
        <div className="grid grid-cols-3 justify-between items-center">
          <div>
            <input type="checkbox" name="" id="" />{" "}
            <span className="text-sm text-violet-400">Cleaning Service</span>
          </div>
          <div>
            <input type="checkbox" name="" id="" checked />{" "}
            <label className="text-sm text-violet-400">Health</label>
          </div>
          <div>
            <input type="checkbox" name="" id="" checked />{" "}
            <span className="text-sm text-violet-400">Others...</span>
          </div>
          <div>
            <input type="checkbox" name="" id="" checked />{" "}
            <label className="text-sm text-violet-400">Water</label>
          </div>
          <div>
            <input type="checkbox" name="" id="" checked />{" "}
            <label className="text-sm text-violet-400">Internet</label>
          </div>
          <div className="mt-3">
            <LabelTopInput
              label="Internet Speed"
              placeholder=">100Mbp/s"
              inputWidth="lg:w-[157px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsIncludeTwo;
