import { useInView } from "react-intersection-observer";
import { TAnimateWrapper } from "../../types/commonTypes";

const AnimateToRight: React.FC<TAnimateWrapper> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div
      ref={ref}
      className={`${
        inView ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
      } transition-all duration-1000 ease-in-out `}
    >
      {children}
    </div>
  );
};

export default AnimateToRight;
