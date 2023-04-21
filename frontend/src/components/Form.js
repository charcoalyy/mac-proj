import { useState } from "react"

const Form = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [rating, setRating] = useState(null);
    const [error, setError] = useState(null);

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
        } else {
            setTitle("")
            setBody("")
            setRating(null)
            setError(null)
            console.log('submission successful')
        }
    }

    return (
        <div className="form-container boxed">
            <h3>Submit a review</h3>
            <form className="form" onSubmit={handleSubmit}>

                <input type="text" value={title} onChange={(e) => {
                    setTitle(e.target.value)
                }} placeholder="Title">
                </input>

                <textarea value={body} onChange={(e) => {
                    setBody(e.target.value)
                }} placeholder="Your thoughts">
                </textarea>

                <input type="number" value={rating} onChange={(e) => {
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