import AnimateToTop from "../../wrappers/animation/AnimateToTop";
import SecondaryLinkButton from "../../components/Buttons/SecondaryLinkButton";
import { NavLinksData } from "../../data/navigationBarData";
import woman_with_dummy_teeth from "../../assets/woman_with_dummy_teeth.webp";

const HeroSection = () => {
  return (
    <>
      {" "}
      <div className="w-full">
        <div
          className="bg-cover bg-center bg-no-repeat h-[400px] lg:h-[500px]  3xl:h-[800px] text-white  "
          style={{ backgroundImage: "url('" + woman_with_dummy_teeth + "')" }}
        >
          <div className="h-full w-full bg-gradient-to-r from-blue-900 to-[rgb(0, 0, 128, 0.5)] px-4 ">
            <div className="h-full w-full flex flex-col justify-center space-y-6 xl:w-[1024px] 2xl:w-[1280px] xl:mx-auto overflow-hidden">
              <AnimateToTop>
                <section className="space-y-2 lg:w-[600px]">
                  <h1 className="text-2xl font-bold text-shadow shadow-black lg:text-6xl">
                    Your smile, Our commitment
                  </h1>
                  <p className="text-shadow text-sm  shadow-black ">
                    At Sareto Dental Clinic, we blend modern technology with
                    compassionate care to ensure every patient walks out with a
                    brighter, healthier smile. Led by Dr. Arnold and our skilled
                    team, we prioritize your comfort and well-being, providing
                    top-quality dental solutions tailored to your needs.
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
