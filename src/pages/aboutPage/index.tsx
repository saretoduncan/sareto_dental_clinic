import AboutUsSection from "./AboutUsSection";
import HeroSection from "./HeroSection";
import Mission_Core_Values from "./Mission_Core_Values";

const AboutPage = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>
      <section>
        <AboutUsSection />
      </section>
      <section>
        <Mission_Core_Values />
      </section>
    </>
  );
};

export default AboutPage;
