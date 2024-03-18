"use client";

import React, { createContext, useState, ReactNode } from "react";

interface SidebarState {
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SidebarContext = createContext<SidebarState | null>(null);

interface SidebarControlProps {
  children: ReactNode;
}

const SidebarControl: React.FC<SidebarControlProps> = ({ children }) => {
  const [sidebar, setSidebar] = useState<boolean>(false);

  const states: SidebarState = {
    sidebar,
    setSidebar,
  };

  return (
    <SidebarContext.Provider value={states}>{children}</SidebarContext.Provider>
  );
};

export default SidebarControl;
