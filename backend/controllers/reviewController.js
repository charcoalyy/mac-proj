const Review = require('../models/reviewModel')
const mongoose = require('mongoose')

// get reviews
const getReviews = async (req, res) => {
    // read documents from database
    const reviews = await Review.find().sort({ createdAt: -1 }) // find reviews that match these properties ie. all, then sort based on recency
    res.status(200).json(reviews)
}

// get a specific review
const getReview = async (req, res) => {
    const { id } = req.params // grab id property from request params

    // validate requested ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Review ID invalid' })
    }

    // find document with matching ID from database
    const review = await Review.findById(id)
    if (!review) {
        return res.status(404).json({ error: 'Review does not exist' }) // return to stop rest of code from running
    }
    res.status(200).json(review)
}

// post a new review
const createReview = async (req, res) => {
     // destructure from req object
     const { title, rating, body } = req.body

    // add document to database
     try {
         const review = await Review.create({ title, rating, body }) // await async function, of creating a review document from the model using the requested properties, to run
         res.status(200).json(review) // send response with status code and json containing the review document
     } catch (error) {
         res.status(400).json({error: error.message}) // send response with status code and error message
     }
}

// delete a specific review
const deleteReview = async (req, res) => {
    const { id } = req.params
    if (mongoose.Types.ObjectId.isValid(id)) {
        const review = await Review.findOneAndDelete({ _id: id })
        if (review) {
            res.status(200).json(review)
        } else {
            res.status(404).json({ error: 'Review does not exist' })
        }
    } else {
        res.status(404).json({ error: 'Review ID invalid' })
    }
}

// update a specific review
const updateReview = async (req, res) => {
    const { id } = req.params

    if (mongoose.Types.ObjectId.isValid(id)) {
        const review = await Review.findByIdAndUpdate(id, { $set: req.body})
        if (review) {
            res.status(200).json(review)
        } else {
            res.status(404).json({ error: 'Review does not exist' })
        }
    } else {
        res.status(404).json({ error: 'Review ID invalid' })
    }
}

// export all functions in an object
module.exports = {
    getReviews,
    getReview,
    createReview,
    deleteReview,
    updateReview
}