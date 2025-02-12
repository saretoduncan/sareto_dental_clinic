import { TReview } from "../types/apiTypes";

 export const getReviews = async ():Promise<TReview[]> => {
    try {
      const response = await fetch("/reviewApi");
      if (!response.ok) {
        throw new Error(
          `An error occured while fetching reviews with the following status:${response.status}`
        );
      }
      return response.json();
    } catch (e) {
      throw new Error(
        `An error occured while fetching reviews with the following status:${e}`
      );
    }

  };