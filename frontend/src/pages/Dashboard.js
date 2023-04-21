import { useEffect, useState } from "react";
import Review from "../components/Review";
import Form from "../components/Form";

const Dashboard = () => {
    const [reviews, setReviews] = useState(null)

    useEffect(() => { // fired at first render
        const fetchReviews = async () => {
            const res = await fetch('/reviews') // fetch response from path
            const json = await res.json() // parse json

            if (res.ok) {
                setReviews(json) // set reviews state to the parsed response
            }
        }

        fetchReviews()
    }, [])

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