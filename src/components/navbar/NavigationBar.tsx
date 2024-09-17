import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const NavigationBar = () => {
  const [isSideNavOpen, setSideNavOpen] = useState(false);
  const handleSideNav = () => setSideNavOpen(() => !isSideNavOpen);
  return (
    <>
      <>
        <Topbar handleSideNav={handleSideNav} />
        <Sidebar isOpen={isSideNavOpen}/>
      </>
    </>
  );
};

export default NavigationBar;
