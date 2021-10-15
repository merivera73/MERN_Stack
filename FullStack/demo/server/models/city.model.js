const mongoose = require('mongoose');


const CitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            'Please Provide a City Name!!!'
        ]
    },

    population: {
        type: Number,
        required: [
            true,
            'Please provide a population!'
        ]
    },

    imageURL: {
        type: String,
        required: [
            true,
            'Please provide an image!'
        ]
    },
}, {timestamps: true});

const City = mongoose.model('City', CitySchema);

module.exports = City;