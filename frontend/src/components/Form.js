import { useState } from "react"
import { useReviewsContext } from "../hooks/useReviewsContext";

const Form = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [rating, setRating] = useState(null);
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);
    const { dispatch } = useReviewsContext(); // obtains dispatch function (destructed) from global state context

    const handleSubmit = async (e) => {
        e.preventDefault()
        const review = { title, body, rating }

        const res = await fetch('/reviews', { // send http request to /reviews path (see createReview controller)
            method: 'POST',
            body: JSON.stringify(review), // cannot directly pass object, must convert to JSON
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const resJSON = await res.json() // if response is returned, store as JSON object
        if (!res.ok) {
            setError(resJSON.error) // error from createReview controller
            console.log(resJSON.emptyFields)
            setEmptyFields(resJSON.emptyFields)
        } else {
            setTitle("")
            setBody("")
            setRating(null)
            setError(null)
            setEmptyFields([])
            console.log('submission successful')
            dispatch({ type: 'createReview', payload: resJSON })
        }
    }

    return (
        <div className="form-container boxed">
            <h3>Submit a review</h3>
            <form className="form" onSubmit={handleSubmit}>

                <input type="text" value={title} className={emptyFields.includes('title') ? "empty" : "not-empty"} onChange={(e) => {
                    setTitle(e.target.value)
                }} placeholder="Title">
                </input>

                <textarea value={body} className={emptyFields.includes('body') ? "empty" : "not-empty"} onChange={(e) => {
                    setBody(e.target.value)
                }} placeholder="Your thoughts">
                </textarea>

                <input type="number" value={rating} className={emptyFields.includes('rating') ? "empty" : "not-empty"} onChange={(e) => {
                    setRating(e.target.value)
                }} placeholder="Rating" rows="3">
                </input>

                <button className="action-button">Submit Review</button>

                {error && <div className="error">{error}</div>}
            </form>
        </div>

    )
}

export default Form;