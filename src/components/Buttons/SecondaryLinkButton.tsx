import { Link } from "react-router-dom";
type TLinkButton = {
  linkName: string;
  class_name?: string;
  link: string;
  handleClick?: () => void;
};

const SecondaryLinkButton: React.FC<TLinkButton> = ({
  linkName,
  class_name,
  link,
  handleClick
}) => {
  return (
    <>
      <Link
        to={link}
        className={` bg-orange-600  px-4 py-2 rounded-lg  text-white font-bold ${class_name}` }
       onClick={handleClick}
      >
        {linkName}
      </Link>
    </>
  );
};

export default SecondaryLinkButton;
