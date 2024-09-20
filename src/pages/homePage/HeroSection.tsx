import dental_checkup_bg from "../../assets/brashing_teeth.webp";
import SecondaryLinkButton from "../../components/Buttons/SecondaryLinkButton";
import { NavLinksData } from "../../data/navigationBarData";
import AnimateToTop from "../../wrappers/animation/AnimateToTop";
const HeroSection = () => {
  return (
    <>
      <div className="w-full">
        <div
          className="bg-cover bg-center bg-no-repeat h-[400px] lg:h-[500px]  3xl:h-[800px] text-white  "
          style={{ backgroundImage: "url('" + dental_checkup_bg + "')" }}
        >
          <div className="h-full w-full bg-gradient-to-r from-blue-900 to-[rgb(0, 0, 128, 0.5)] px-4   pb-6 ">
            <div className="h-full w-full flex flex-col justify-center space-y-6  2xl:w-[1280px] 2xl:mx-auto overflow-hidden">
              <AnimateToTop>
                <section className="space-y-2 lg:w-[600px]">
                  <h1 className="text-2xl font-bold text-shadow shadow-black lg:text-6xl">
                    Exceptional Dental Care in Nairobi
                  </h1>
                  <p className="text-shadow  shadow-black lg:text-lg">
                    Experience top-notch dental services in a confortable and
                    welcoming enviroment at Sareto Dental Clinic. Our skilled
                    dentist offer a wide range of treatments, from routine
                    check-ups to complex procedures.
                  </p>
                </section>
              </AnimateToTop>

              <section>
                <AnimateToTop>
                  <SecondaryLinkButton
                    link={NavLinksData.contactPage.to}
                    linkName="Book Appointment Now"
                  />
                </AnimateToTop>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
