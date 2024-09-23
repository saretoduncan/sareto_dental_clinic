import business_smile from "../assets/business_smile.webp";
import { NavLinksData } from "../data/navigationBarData";
import AnimateToTop from "../wrappers/animation/AnimateToTop";
import SecondaryLinkButton from "./Buttons/SecondaryLinkButton";
const CTA = () => {
  return (
    <>
      <div className="p-4 text-gray-100 text-shadow shadow-black">
        <div
          className="w-full min-h-[200px] bg-cover bg-no-repeat bg-center relative rounded-md md:w-3/4 2xl:w-[1280px] 2xl:mx-auto"
          style={{ backgroundImage: "url('" + business_smile + "')" }}
        >
          <div className="absolute top-0 w-full bottom-0 bg-gradient-to-r from-blue-900 to-transparent rounded-md flex flex-col justify-center px-4 space-y-1 ">
            <AnimateToTop>
              <h4 className=" font-bold text-xl capitalize">
                Your Smile deserve the best
              </h4>
            </AnimateToTop>
            <AnimateToTop>
              <p className="">
                Schedule your appointment today and take the first step towards
                a healthier, brighter smile!
              </p>
            </AnimateToTop>
            <AnimateToTop>
              <div className="pt-4">
                <SecondaryLinkButton
                  link={NavLinksData.contactPage.to}
                  linkName="Book Now"
                />
              </div>
            </AnimateToTop>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
