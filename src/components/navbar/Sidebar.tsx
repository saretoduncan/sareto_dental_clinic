import { NavLinksData } from "../../data/navigationBarData";
import NavigationLink from "./NavigationLink";

const Sidebar = () => {
  return (
    <>
      <div className="w-full relative bg-blue-900 px-2 py-4">
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
      </div>
    </>
  );
};

export default Sidebar;
