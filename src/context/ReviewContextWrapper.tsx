import { ReactNode, useState } from "react";
import { TReview } from "../types/apiTypes";
import { ReviewApiContext } from ".";
import { useQuery } from "@tanstack/react-query";
import { getReviews } from "../data/apiFunction";

type TReviewContextWrapperType = {
  children: ReactNode;
};
const ReviewContextWrapper: React.FC<TReviewContextWrapperType> = ({
  children,
}) => {

  const {data,error, isPending} = useQuery({queryKey:["review"],queryFn:getReviews})

  return (
    <ReviewApiContext.Provider
      value={{
        data: data,
        error: error,
        loading: isPending,
       
      }}
    >{children}</ReviewApiContext.Provider>
  );
};

export default ReviewContextWrapper;
