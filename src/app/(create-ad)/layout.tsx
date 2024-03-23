import DetailsHeader from "@/components/shared/DetailsHeader";
import React from "react";

const CreateAnAdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen overflow-x-hidden">
      <DetailsHeader />
      <div className="container container-height smoothBar">{children}</div>
    </div>
  );
};

export default CreateAnAdLayout;
