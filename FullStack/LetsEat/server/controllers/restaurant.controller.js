const Restaurant = require('../models/restaurant.model');

module.exports = {
    create(req, res) {
        Restaurant.create(req.body)
            .then(restaurant => res.json(restaurant))
            .catch(err => res.json(err));
    },

    createReview(req, res) {
        console.log(req.body);
        Restaurant.findByIdAndUpdate(req.params.id, {$push: {reviews: req.body}}, {runValidators: true})
            .then(restaurant => res.json(restaurant))
            .catch(err => res.json(err));
    },

    getAll(_, res) {
        Restaurant.find()
            .then(restaurants => res.json(restaurants))
            .catch(err => res.json(err));
    },

    getOne(req, res) {
        Restaurant.findById(req.params.id)
            .then(restaurant => res.json(restaurant))
            .catch(err => res.json(err));
    },

    delete(req, res) {
        Restaurant.findByIdAndDelete(req.params.id)
            .then(result => {
                console.log(result);
                res.json({status: 'success'})
            })
            .catch(err => res.json(err));
    },

    update(req, res) {
        Restaurant.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                cuisine: req.body.cuisine,
                customer: req.body.customer,
                stars: req.body.star,
                description: req.body.description
            },
            {
                runValidators: true,
                new: true
            }
        )
            .then(city => res.json(restaurant))
            .catch(err => res.json(err))
    },
}