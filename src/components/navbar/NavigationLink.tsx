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
      <Link to={to} onClick={() => scrollUp()}>
        {linkName}
      </Link>
    </>
  );
};

export default NavigationLink;
