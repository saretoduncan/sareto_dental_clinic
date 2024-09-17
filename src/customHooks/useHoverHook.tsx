import { useCallback, useState } from "react";

type TReturnHook = {
  isHovered: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
};
const useHoverHook = (initialValue: boolean): TReturnHook => {
  const [isHovered, setIsHovered] = useState(initialValue);
  const handleMouseEnter = useCallback(() => {
    setIsHovered(() => true);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(() => false);
  }, []);
  return { isHovered, handleMouseEnter, handleMouseLeave };
};

export default useHoverHook;
