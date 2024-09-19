import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/homePage";
import { NavLinksData } from "../data/navigationBarData";
import AboutPage from "../pages/aboutPage";
import ServicesPage from "../pages/servicePage";
import ContactsPage from "../pages/contactsPage";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route element={<Homepage />} path={NavLinksData.homePage.to} />
        <Route element={<AboutPage />} path={NavLinksData.aboutPage.to} />
        <Route element={<ServicesPage />} path={NavLinksData.servicePage.to} />
        <Route element={<ContactsPage />} path={NavLinksData.contactPage.to} />
      </Routes>
    </>
  );
};

export default Routers;
