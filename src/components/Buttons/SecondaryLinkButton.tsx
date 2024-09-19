import { Link } from "react-router-dom";
type TLinkButton = {
  linkName: string;
  class_name?: string;
  link: string;
};
const SecondaryLinkButton: React.FC<TLinkButton> = ({
  linkName,
  class_name,
  link,
}) => {
  return (
    <>
      <Link
        to={link}
        className={` bg-orange-600  px-4 py-2 rounded-lg  text-white font-bold ${class_name}`}
      >
        {linkName}
      </Link>
    </>
  );
};

export default SecondaryLinkButton;
