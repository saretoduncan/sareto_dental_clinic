import AnimateToTop from "../../wrappers/animation/AnimateToTop";
import google_icon from "../../assets/google_icon.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import Testimony_card_component from "../../components/Testimony_card_component";
const TestimonialFeatureSection = () => {
  return (
    <>
      <div className="w-full bg-blue-50 p-4 text-700 text-gray-800">
        <div className="xl:w-[1024px] 2xl:w-[1280px] xl:mx-auto space-y-2">
          <section className="">
            <AnimateToTop>
              <div className=" space-y-2 md:space-y-4">
                <h4 className="text-2xl text-blue-900 text-center font-bold">
                  What They Say About Us
                </h4>
                <section className="grid gap-2 md:grid-cols-2">
                  <div className="flex space-x-1 justify-center font-bold">
                    <img src={google_icon} alt="" className="w-28" />
                    <p className="self-center text-lg">Reviews</p>
                  </div>
                  <div className="flex justify-center">
                    <a
                      href="https://search.google.com/local/writereview?placeid=ChIJM125yIwTsEsRJJIcQyAbXWo"
                      target="_blank"
                      className="bg-orange-500 text-center rounded-lg  text-white text-sm"
                    >
                      <div className="w-full h-full flex space-x-2 items-center p-2 ">
                        <p className="font-bold">Review us on google</p>
                        <FaArrowRightLong className="text-white text-lg" />
                      </div>
                    </a>
                  </div>
                </section>
              </div>
            </AnimateToTop>
          </section>
          <section>
            <div>
                <Testimony_card_component/>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default TestimonialFeatureSection;
