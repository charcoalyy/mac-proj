import { createContext, useReducer } from "react";

export const ReviewsContext = createContext()

// dispatch comes with action type and action payload (whatever you're passing thru)
// for each 'case', ie. action type, either display or update the action payload


// reducer takes action (dispatch) and previous state
export const reviewsReducer = (state, action) => {
    switch (action.type) {
        case 'setReviews':
            return {
                reviews: action.payload
            }
        case 'createReview':
            return {
                reviews: [action.payload, ...state.reviews]
            }
        case 'deleteReview':
            return {
                reviews: state.reviews.filter((item) => item !== action.payload)
            }
        default:
            return state
    }
}

export const ReviewsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reviewsReducer, {
        reviews: null // initial state for some property
    })

    // provider value is available for all children of the provider; children is what provider encloses when in use
    return (
        <ReviewsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ReviewsContext.Provider>
    )
}