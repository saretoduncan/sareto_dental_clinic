import AnimateToLeft from "../../wrappers/animation/AnimateToLeft";
import AnimateToRight from "../../wrappers/animation/AnimateToRight";
import entranceImg from "../../assets/entrance_img.webp";

const AboutUsSection = () => {
  return (
    <>
      <div>
        <div className="grid gap-2 px-4 py-4 my-6 text-gray-800 md:grid-cols-2  2xl:w-[1280px] 2xl:mx-auto items-center overflow-hidden">
          <div className="order-2">
            <AnimateToRight>
              <section className="md:px-4">
                <div className="text-sm ">
                  <h3 className="text-2xl font-bold text-blue-900 capitalize">
                    Exceptional{" "}
                    <span className="text-orange-500">Dental care</span> in a
                    welcoming enviroment
                  </h3>
                  <p className="">
                    Situated in the heart of Embakasi, Nairobi, across from
                    Fedha Estate within Fedha Business Park, Sareto Dental
                    Clinic offers premier dental services in a warm and
                    comfortable setting designed with patient care in mind. Our
                    highly skilled and experienced team, led by Dr. Arnold, is
                    dedicated to meeting all your oral health needs, from
                    preventive care and routine check-ups to specialized
                    treatments, all with a personalized approach. We combine
                    modern dental technology with a compassionate touch to
                    enhance your smile and ensure optimal oral health, making
                    each visit a positive and reassuring experience. Choose
                    Sareto Dental Clinic for the best in dental care. you.
                  </p>
                </div>
              </section>
            </AnimateToRight>
          </div>

          <section className="justify-self-center grid-row-1">
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

export default AboutUsSection;
