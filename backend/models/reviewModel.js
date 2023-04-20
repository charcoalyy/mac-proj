const mongoose = require('mongoose')

const Schema = mongoose.Schema

// set up data schema (structure) for each review document
const reviewSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true }) // automatically adds created & updated properties to each document

// export model, based on its schema, of review document + will automatically create corresponding collection 'reviews'
module.exports = mongoose.model('Review', reviewSchema)