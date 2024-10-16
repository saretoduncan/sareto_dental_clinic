import logo from "../assets/logo.webp";
import { NavLinksData } from "../data/navigationBarData";
import Footer_contact_component from "./Footer_contact_component";
import NavigationLink from "./navbar/NavigationLink";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className="  bg-blue-900 text-gray-200 py-4  text-sm relative px-4   ">
        <div className=" 2xl:w-[1280px] 2xl:mx-auto mt-4">
          <div className="grid gap-4 lg:grid-cols-3">
            <section>
              <figure className="lg:flex lg:flex-col-reverse">
                <img src={logo} alt="logo" className="w-[150px]" />
                <figcaption className="">
                  <p>
                    <span className="text-orange-500 font-bold">
                      Sareto Dental Clinic{" "}
                    </span>
                    offers comprehensive dental services, including cleanings,
                    implants, whitening, and orthodontics, using advanced
                    technology for personalized care. We provide treatments for
                    all ages, focusing on comfort and affordability with
                    flexible payment options. Our goal is to help you achieve
                    and maintain a healthy, confident smile for life.
                  </p>
                </figcaption>
              </figure>
            </section>
            <section className="space-y-1  lg:justify-self-center">
              <h4 className="text-orange-500 font-bold text-sm lg:text-lg">
                {" "}
                Quick Links
              </h4>
              <section className="">
                <div className="">
                  <NavigationLink
                    linkName={NavLinksData.homePage.linkName}
                    to={NavLinksData.homePage.to}
                    className="text-sm"
                  />
                  <NavigationLink
                    linkName={NavLinksData.aboutPage.linkName}
                    to={NavLinksData.aboutPage.to}
                    className="text-sm"
                  />

                  <NavigationLink
                    linkName={NavLinksData.servicePage.linkName}
                    to={NavLinksData.servicePage.to}
                    className="text-sm"
                  />
                  <NavigationLink
                    linkName={NavLinksData.contactPage.linkName}
                    to={NavLinksData.contactPage.to}
                    className="text-sm"
                  />
                </div>
              </section>
            </section>
            <section className=" space-y-2  lg:justify-self-center">
              <h4 className="text-orange-500 font-bold lg:text-lg">Contacts</h4>
              <section>
                <ul className=" grid gap-2">
                  {/* <li className="flex space-x-1 text-sm font-bold">
                <FaLocationDot className="text-orange-500 self-center text-base" />

                <p>Fedha business park, Nairobi</p>
              </li> */}
                  <Footer_contact_component
                    name="Fedha business park, Nairobi"
                    iconProp={FaLocationDot}
                  />
                  <Footer_contact_component
                    name="info@saretodentalclinic.co.ke"
                    iconProp={MdEmail}
                  />
                  <Footer_contact_component
                    name="0727653285 or
                0732298359"
                    iconProp={FaPhone}
                  />
                </ul>
              </section>
            </section>
          </div>
          <div className="w-full bg-orange-500 h-2 my-2"></div>
          <div>
            <small className="text-orange-500 font-bold">
              &copy;2024 SARETO DENTAL CLINIC.{" "}
              <span className="text-gray-200">All rights reserved</span>
            </small>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
