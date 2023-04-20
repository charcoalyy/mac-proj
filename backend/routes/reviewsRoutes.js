const express = require('express')
const {
    getReviews,
    getReview,
    createReview,
    deleteReview,
    updateReview
} = require('../controllers/reviewController')

// create instance of router
const router = express.Router()

// route to get reviews
router.get('/', getReviews)

// route to get specific review, based on router parameter 'id'
router.get('/:id', getReview)

// route to post a new workout
router.post('/', createReview)

// route to delete a specific review
router.delete('/:id', deleteReview)

// route to update a specific review
router.patch('/:id', updateReview)

// export router
module.exports = router
