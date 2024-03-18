"use client";

import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export interface SidebarState {
  sidebar: boolean;
  setSidebar: Dispatch<SetStateAction<boolean>>;
}

export const SidebarContext = createContext<SidebarState | null>(null);

interface SidebarStateWrapperProps {
  children: ReactNode;
}

const SidebarStateWrapper: React.FC<SidebarStateWrapperProps> = ({
  children,
}) => {
  const [sidebar, setSidebar] = useState<boolean>(false);

  const states: SidebarState = {
    sidebar,
    setSidebar,
  };

  return (
    <SidebarContext.Provider value={states}>{children}</SidebarContext.Provider>
  );
};

export default SidebarStateWrapper;
