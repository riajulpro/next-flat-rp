import DetailsHeader from "@/components/shared/DetailsHeader";
import React from "react";

const CreateAnAdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <DetailsHeader />
      <div className="container container-height overflow-y-auto smoothBar">
        {children}
      </div>
    </div>
  );
};

export default CreateAnAdLayout;
