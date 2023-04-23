import { useEffect } from "react";
import Review from "../components/Review";
import Form from "../components/Form";
import { useReviewsContext } from "../hooks/useReviewsContext";

const Dashboard = () => {
    const { reviews, dispatch } = useReviewsContext() // obtain reviews (destructed) property from global state context

    useEffect(() => { // fired at any (re-)render
        const fetchReviews = async () => {
            const res = await fetch('/reviews') // fetch response from path
            const json = await res.json() // parse json

            if (res.ok) {
                dispatch({ type: 'setReviews', payload: json }) // set reviews property of global state to the parsed response
            }
        }

        fetchReviews()
    }, [dispatch])

    return (
        <div className="dashboard">
            <h2>Welcome back.</h2>
            <Form />
            <div className="reviews">
                {reviews && reviews.map((review) => {
                    return <Review review={review} key={review._id} />
                })
                }
            </div>
        </div>
    )
}

export default Dashboard;