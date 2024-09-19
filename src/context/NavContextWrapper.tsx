import { ReactNode, useState } from "react";
import { NavBarContext } from ".";

type TNavWrapper = {
  children: ReactNode;
};

const NavContextWrapper: React.FC<TNavWrapper> = ({ children }) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <NavBarContext.Provider value={{ isSideNavOpen, setIsSideNavOpen }}>
      {children}
    </NavBarContext.Provider>
  );
};

export default NavContextWrapper;
