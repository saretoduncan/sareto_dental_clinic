import dental_checkup_bg from "../../assets/brashing_teeth.webp";
import SecondaryLinkButton from "../../components/Buttons/SecondaryLinkButton";
import { NavLinksData } from "../../data/navigationBarData";
const HeroSection = () => {
  return (
    <>
      <div className="w-full">
        <div
          className="bg-cover bg-center bg-no-repeat h-[400px] lg:h-[500px]  3xl:h-[800px] text-white  "
          style={{ backgroundImage: "url('" + dental_checkup_bg + "')" }}
        >
          <div className="h-full w-full bg-gradient-to-r from-blue-900 to-[rgb(0, 0, 128, 0.5)] px-4 flex flex-col justify-end pb-6 space-y-6 ">
            <section className="space-y-2">
              <h1 className="text-2xl font-bold text-shadow shadow-black ">
                Exceptional Dental Care in Sareto Dental Clinic
              </h1>
              <p className="text-shadow  shadow-black">
                Experience top-notch dental services in a confortable and
                welcoming enviroment at Sareto Dental Clinic. Our skilled
                dentist offer a wide range of treatments, from routine check-ups
                to complex procedures.
              </p>
            </section>
            <section>
              <SecondaryLinkButton
                link={NavLinksData.contactPage.to}
                linkName="Book Appointment Now"
              />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
