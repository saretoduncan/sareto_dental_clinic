import AnimateToRight from "../../wrappers/animation/AnimateToRight";
import entranceImg from "../../assets/entrance_img.webp";
import SecondaryLinkButton from "../../components/Buttons/SecondaryLinkButton";
import { NavLinksData } from "../../data/navigationBarData";
import AnimateToLeft from "../../wrappers/animation/AnimateToLeft";
const AboutFeatureSection = () => {
  return (
    <>
      <div>
        <div className="grid gap-2 px-4 py-4 my-6 text-gray-800 md:grid-cols-2 2xl:w-[1280px] 2xl:mx-auto items-center overflow-hidden">
          <AnimateToRight>
            <section className="space-y-4">
              <div className="">
                <h3 className="text-2xl font-bold text-blue-900 capitalize">
                  Exceptional Dental care in a welcoming enviroment
                </h3>
                <p className="">
                  Located in Fedha Business Park, opposite Fedha Estate,
                  Embakasi, Nairobi, Sareto Dental Clinic provides top-notch
                  dental services in a friendly and comfortable setting. Our
                  experienced team is dedicated to ensuring your oral health and
                  enhancing your smile.
                </p>
              </div>

              <div className="grid gap-2">
                <div>
                  <h5 className="text-xl font-bold text-blue-900">
                    Expert Care
                  </h5>
                  <p>
                    Offering a range of services including scaling, surgeries,
                    and personalized consultation, and personalized
                    consultations.
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-xl text-blue-900">
                    Comprehensive Services
                  </h5>
                  <p>
                    Experience pain-free treatments designed to enhance your
                    smile and oral health.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <SecondaryLinkButton
                  link={NavLinksData.aboutPage.to}
                  linkName="Learn more"
                />
              </div>
            </section>
          </AnimateToRight>
          <section className="justify-self-center">
            <AnimateToLeft>
              <img
                src={entranceImg}
                alt="dental clinic entrance"
                className="rounded border-blue-900 border-2 shadow max-h-[380px] "
              />
            </AnimateToLeft>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutFeatureSection;
