import CTA from "../../components/CTA";
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
      <section>
        <CTA />
      </section>
    </>
  );
};

export default Homepage;
