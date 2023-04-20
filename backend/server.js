// to use .env file
require('dotenv').config()

// obtain all required packages
const express = require('express')
const mongoose = require('mongoose')
const reviewRoutes = require('./routes/reviewsRoutes')



// create express app and store in 'app'
const app = express()

// run middleware on every request
app.use(express.json({ extended: false })) // add body from request, if existent, to req object

app.use((req, res, next) => {
    console.log(req.path, req.method) // output path and method to console.log
    next() // if valid, allow rest of file to be run
})

// attach all routes to app, under the condition of being on the path 'reviews'
app.use('/reviews', reviewRoutes)



// connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests to express app
        app.listen(process.env.PORT, () => {
            console.log('Connected to database and listening on port', process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err)
    })
