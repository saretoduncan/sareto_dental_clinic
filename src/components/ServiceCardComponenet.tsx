import SecondaryLinkButton from "./Buttons/SecondaryLinkButton";

type TServiceCard = {
  img: string;
  cardTitle: string;
  imgCaption: string;
  pageLink: string;
};
const ServiceCardComponenet: React.FC<TServiceCard> = ({
  img,
  cardTitle,
  imgCaption,
  pageLink,
}) => {
  return (
    <div className="p-2 shadow-md shadow-blue-900 rounded-md space-y-2 text-gray-700">
      <div
        className="h-[200px] bg-cover bg-no-repeat bg-center rounded"
        style={{ backgroundImage: "url('" + img + "')" }}
      ></div>
      <div>
        <h5 className="text-blue-900 font-bold text-xl">{cardTitle}</h5>
        <p>{imgCaption}</p>
      </div>
      <div className="flex ">
        <SecondaryLinkButton
          linkName={"Read More"}
          link={pageLink}
          class_name="w-full  text-center"
        />
      </div>
    </div>
  );
};

export default ServiceCardComponenet;
