const Review = ({ review }) => {
    return (
        <div className="review boxed">
            <h1>{review.rating}</h1>
            <h3>{review.title}</h3>
            <p>{review.body}</p>
        </div>
    )
}

export default Review;