import { Link, useLocation } from "react-router-dom";
import useHoverHook from "../../customHooks/useHoverHook";
import { useContext } from "react";
import { NavBarContext } from "../../context";
type TNavLink = {
  to: string;
  linkName: string;
};

const NavigationLink: React.FC<TNavLink> = ({ to, linkName }) => {
  const { handleMouseEnter, handleMouseLeave, isHovered } = useHoverHook(false);
  const openSideNav = useContext(NavBarContext);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  const currentPathLocation = useLocation().pathname;
  const handleOnclick = () => {
    openSideNav?.setIsSideNavOpen(false);
    scrollUp();
  };

  return (
    <>
      <Link
        className="text-white space-y-1  "
        to={to}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
        onClick={() => handleOnclick()}
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
