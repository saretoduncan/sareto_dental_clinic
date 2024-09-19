import { createContext } from "react";

type TNavContextType = {
  isSideNavOpen: boolean;
  setIsSideNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const NavBarContext = createContext<TNavContextType | undefined>(
  undefined
);
