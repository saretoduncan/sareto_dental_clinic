import { createContext, useContext } from "react";
import { TReview } from "../types/apiTypes";

type TNavContextType = {
  isSideNavOpen: boolean;
  setIsSideNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
type TReviewApiContextType = {
  data: TReview[] | undefined;
  loading: boolean;
  error: any | null;
  
};
export const NavBarContext = createContext<TNavContextType | undefined>(
  undefined
);

export const ReviewApiContext = createContext<
  TReviewApiContextType | undefined
>(undefined);

export const useReviewApiContext = (): TReviewApiContextType => {
  const context = useContext(ReviewApiContext);
  if (!context) {
    throw new Error("useReviewContext must within ReviewContextWrapper");
  }
  return context;
};
