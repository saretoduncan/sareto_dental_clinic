import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import NavContextWrapper from "../../context/NavContextWrapper";

const NavigationBar = () => {
  return (
    <>
      <>
        <NavContextWrapper>
          <Topbar />
          <Sidebar />
        </NavContextWrapper>
      </>
    </>
  );
};

export default NavigationBar;
