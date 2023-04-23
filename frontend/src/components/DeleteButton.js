import { useState } from "react";
import { useReviewsContext } from "../hooks/useReviewsContext";

const DeleteButton = ({ reviewID }) => {
    const { dispatch } = useReviewsContext();
    const [error, setError] = useState(null);

    const handleDelete = async (e) => {
        e.preventDefault();
        console.log(`/reviews/${reviewID}`)

        const res = await fetch(`/reviews/${reviewID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const resJSON = res.json()
        if (!res.ok) {
            setError(resJSON.error)
        } else {
            console.log('delete successful')
            dispatch({ type: 'deleteReview', payload: resJSON })
        }

    }

    return (
        <div className="delete-button action-button material-symbols-outlined" onClick={handleDelete}>
            delete
        </div>
    )
}

export default DeleteButton;