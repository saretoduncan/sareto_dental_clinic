import AboutFeatureSection from "./AboutFeatureSection";
import HeroSection from "./HeroSection";
import ServicesFeatureSection from "./ServicesFeatureSection";

const Homepage = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>
      <section>
        <AboutFeatureSection />
      </section>
      <section>
        <ServicesFeatureSection />
      </section>
    </>
  );
};

export default Homepage;
