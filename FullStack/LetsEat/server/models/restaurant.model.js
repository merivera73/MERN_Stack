const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            'Please enter a Restaurant name.'
        ]
    },

    cuisine: {
        type: String,
        required: [
            true,
            'Please enter the type of Cuisine servered here.'
        ]
    },

    

    reviews: [new mongoose.Schema({
        customer: {
            type: String,
            required: [
                true,
                'Please enter your name.'
            ]
        },
    
        description: {
            type: String,
            required: [
                true,
                'Please enter a breif review thank you.'
            ]
        },

        star: {type: Number }

    }, {timestamps: true})]

    

}, {timestamps: true});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;