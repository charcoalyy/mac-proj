import { ReviewsContext } from "../contexts/ReviewsContext";
import { useContext } from "react";

export const useReviewsContext = () => {
    const usedContext = useContext(ReviewsContext) // returns the object w its state and dispath function

    if (!usedContext) {
        throw Error('Outside of context provider')
    }

    return usedContext // gives the context value back
}