import business_smile from "../assets/business_smile.webp";
const CTA = () => {
  return (
    <>
      <div>
        <div
          className="w-full min-h-[400px] bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: "url('" + { business_smile } + "')" }}
        ></div>
      </div>
    </>
  );
};

export default CTA;
