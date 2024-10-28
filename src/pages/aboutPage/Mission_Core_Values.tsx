import AnimateToTop from "../../wrappers/animation/AnimateToTop";
import patient_centered from "../../assets/patient_centered.svg";
import Our_Cores_Component from "../../components/Our_Cores_Component";
import excellence_img from "../../assets/exellence.svg";
import integrity_img from "../../assets/integrity.svg";
import compassion_img from "../../assets/compassion.svg";
import education_img from "../../assets/education.svg";
const Mission_Core_Values = () => {
  return (
    <>
      <div className="text-sm w-full bg-blue-50 p-4 lg:px-8 text-gray-700">
        <div className="grid gap-4 2xl:w-[1280px] 2xl:mx-auto ">
          <section>
            <AnimateToTop>
              <h5 className="text-2xl font-bold text-blue-900">Our Mission</h5>
              <p>
                At Sareto Dental Clinic, our mission is to provide exceptional
                dental care focused on patient comfort and satisfaction. We
                enhance smiles through personalized treatments and advanced
                technology. Our compassionate team educates and empowers
                patients to make informed decisions about their dental health in
                a welcoming environment.
              </p>{" "}
            </AnimateToTop>
          </section>
          <section>
            <AnimateToTop>
              <h6 className="text-center text-blue-900 font-bold text-2xl capitalize">
                Our Vision and core values
              </h6>
              <p>
                Our vision at{" "}
                <span className="text-orange-500 font-bold capitalize text-base">
                  Sareto Dental Clinic
                </span>{" "}
                is to be the leading provider of comprehensive dental care in
                our community. We aspire to create a future where every
                individual enjoys optimal oral health and beautiful smiles
                through innovative treatments, patient education, and a
                commitment to compassionate, personalized care.
              </p>
            </AnimateToTop>
            <div className="grid py-4 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              <Our_Cores_Component
                imgCaption={`  We prioritize our patients' needs and comfort, ensuring
                      they feel valued and understood in every interaction.`}
                imgSrc={patient_centered}
                imgTitle={`Patient-Centered Care`}
              />
              <Our_Cores_Component
                imgSrc={excellence_img}
                imgTitle="Excellence"
                imgCaption={`We are committed to delivering the highest quality of dental care through continuous improvement and adherence to best practices.`}
              />
              <Our_Cores_Component
                imgSrc={integrity_img}
                imgTitle="Integrity"
                imgCaption={`We uphold honesty and transparency in all our communications and treatments, fostering trust with our patients.`}
              />
              <Our_Cores_Component
                imgSrc={compassion_img}
                imgTitle="Compassion"
                imgCaption={`We approach every patient with empathy and kindness, understanding the emotional aspects of dental care.`}
              />
              <Our_Cores_Component
                imgSrc={education_img}
                imgTitle={`Education`}
                imgCaption={`We are dedicated to educating our patients about their oral health, empowering them to make informed decisions.`}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Mission_Core_Values;
