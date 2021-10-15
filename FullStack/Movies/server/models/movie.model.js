const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [
            true,
            'Please enter a Movie Title!!!!'
        ]
    },

    name: {
        type: String,
        required: [
            true,
            'Please enter your Name!!!!'
        ]
    },

    stars: {
        type: Number,
        required: [
            true,
            'Please enter a star rating between 1 and 5!!!'
        ]
    },

    review: {
        type: String,
        required: [
            true,
            'Please enter a Brief review thank you!!!'
        ]
    },

    reviews: [ new mongoose.Schema ({
        reviewer: {
            type: String,
            required: [
                true,
                'Please enter your name thank you!!!'
            ]
        },

        reviewerStars: { type: Number},

        reviewerReview: {
            type: String,
            required: [
                true,
                'Please enter a brief review thank you!!!!'
            ]
        }
    }, {timestamps: true})]


}, {timestamps: true});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;