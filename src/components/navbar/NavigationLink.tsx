import { Link } from "react-router-dom";
type TNavLink = {
  to: string;
  linkName: string;
};

const NavigationLink: React.FC<TNavLink> = ({ to, linkName }) => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  return (
    <>
      <Link
        className="text-white space-y-2 p-4 "
        to={to}
        onClick={() => scrollUp()}
      >
        <p>{linkName}</p>
        <div className="w-full h-[2px] bg-white"></div>
      </Link>
    </>
  );
};

export default NavigationLink;
