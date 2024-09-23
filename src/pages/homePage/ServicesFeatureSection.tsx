import braces_img from "../../assets/close_up_brace.webp";
import toothExtraction from "../../assets/dental_extraction.webp";
import ServiceCardComponenet from "../../components/ServiceCardComponenet";
import pediatric_img from "../../assets/pediatric_treatment.webp";
import dental_filling_img from "../../assets/tooth_filling.webp";
const ServicesFeatureSection = () => {
  return (
    <>
      <div className="w-full bg-blue-50 p-4 text-700">
        <div className="2xl:w-[1280px] 2xl:mx-auto space-y-2">
          <section className="space-y-2">
            <h4 className="text-2xl text-blue-900 text-center font-bold">
              Complete Dental Care and Services
            </h4>
            <p className="text-center">
              Restore your smile and enhance your oral health with our complete
              dental services in Nairobi.
            </p>
          </section>
          <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <ServiceCardComponenet
              cardTitle="Braces"
              img={braces_img}
              imgCaption={` Straighten your teeth and achieve a healthier, more confident
                  smile with the help of braces.`}
              pageLink=""
            />
            <ServiceCardComponenet
              cardTitle="Specialized Children Dentistry"
              img={pediatric_img}
              imgCaption={` Keep your child’s dental health and smile in top shape with our specialized pediatric care.`}
              pageLink=""
            />
            <ServiceCardComponenet
              cardTitle="Tooth Extraction"
              img={toothExtraction}
              imgCaption={` Address dental issues and relieve pain with our gentle and effective tooth extraction procedure.`}
              pageLink=""
            />
            <ServiceCardComponenet
              cardTitle="Dental Filling"
              img={dental_filling_img}
              imgCaption={` Address dental issues and relieve pain with our gentle and effective tooth extraction procedure.`}
              pageLink=""
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default ServicesFeatureSection;
