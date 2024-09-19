import { useContext } from "react";
import { NavBarContext } from "../../context";
import { NavLinksData } from "../../data/navigationBarData";
import SecondaryLinkButton from "../Buttons/SecondaryLinkButton";
import NavigationLink from "./NavigationLink";

const Sidebar = () => {
  const openSideNav = useContext(NavBarContext);
  return (
    <>
      <div
        className={`w-full relative bg-blue-900 px-2 py-4 space-y-2 transition-all duration-700  ${
          openSideNav?.isSideNavOpen ? "translate-x-0" : "translate-x-[-100%]"
        }`}
      >
        <section>
          <NavigationLink
            linkName={NavLinksData.homePage.linkName}
            to={NavLinksData.homePage.to}
          />
        </section>
        <section>
          <NavigationLink
            linkName={NavLinksData.aboutPage.linkName}
            to={NavLinksData.aboutPage.to}
          />
        </section>
        <section>
          <NavigationLink
            linkName={NavLinksData.servicePage.linkName}
            to={NavLinksData.servicePage.to}
          />
        </section>
        <section>
          <NavigationLink
            linkName={NavLinksData.contactPage.linkName}
            to={NavLinksData.contactPage.to}
          />
        </section>
        <section className="">
          <SecondaryLinkButton
            link={NavLinksData.contactPage.to}
            linkName="Book Appointment"
            class_name=" flex justify-center"
            handleClick={() => openSideNav?.setIsSideNavOpen(false)}
          />
        </section>
      </div>
    </>
  );
};

export default Sidebar;
