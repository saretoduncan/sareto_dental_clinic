import { Link, useLocation } from "react-router-dom";
import useHoverHook from "../../customHooks/useHoverHook";
type TNavLink = {
  to: string;
  linkName: string;
};

const NavigationLink: React.FC<TNavLink> = ({ to, linkName }) => {
  const { handleMouseEnter, handleMouseLeave, isHovered } = useHoverHook(false);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  const currentPathLocation = useLocation().pathname;

  return (
    <>
      <Link
        className="text-white space-y-1  "
        to={to}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
        onClick={() => scrollUp()}
      >
        <p className="font-bold lg:text-xl">{linkName}</p>
        <div
          className={`h-[2px] bg-white transition-all duration-700 ease-in-out ${
            isHovered || currentPathLocation === to ? "w-full" : "w-0"
          }`}
        ></div>
      </Link>
    </>
  );
};

export default NavigationLink;
