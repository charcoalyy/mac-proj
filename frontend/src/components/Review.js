import DeleteButton from "./DeleteButton";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const Review = ({ review }) => {
    return (
        <div className="review boxed">
            <h1>{review.rating}</h1>
            <h3>{review.title}</h3>
            <p className="subtext">{formatDistanceToNow(new Date(review.createdAt), { addSuffix: true })}</p>
            <p>{review.body}</p>
            <DeleteButton reviewID={review._id} />
        </div>
    )
}

export default Review;