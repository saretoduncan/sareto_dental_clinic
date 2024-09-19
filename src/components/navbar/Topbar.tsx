import logo from "../../assets/logo.webp";
import { FaBars } from "react-icons/fa6";
import NavigationLink from "./NavigationLink";
import { NavLinksData } from "../../data/navigationBarData";
import SecondaryLinkButton from "../Buttons/SecondaryLinkButton";
type TTopNavBar = {
  handleSideNav: () => void;
};
const Topbar: React.FC<TTopNavBar> = ({ handleSideNav }) => {
  return (
    <>
      <div className="bg-blue-900    w-full  ">
        <div className="flex px-4 py-2  w-full justify-between items-center xl:w-[1280px] 2xl:mx-auto">
          <section>
            <img src={logo} alt="logo" className="w-12" />
          </section>

          <section className="hidden lg:flex lg:space-x-4  ">
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
          </section>
          <section className="hidden lg:block">
            <SecondaryLinkButton
              link={NavLinksData.contactPage.to}
              linkName="Book Appointment"
            />
          </section>
          <section className="lg:hidden">
            <button onClick={() => handleSideNav()}>
              <FaBars
                className="text-white text-3xl 
             "
              />
            </button>
          </section>
        </div>
      </div>
    </>
  );
};

export default Topbar;
