const City = require('../models/city.model');


module.exports = {
    create(req, res) {
        City.create(req.body)
            .then(city => res.json(city))
            .catch(err => res.json(err));
    },

    getAll(_, res) {
        City.find()
            .then(cities => res.json(cities))
            .catch(err => res.json(err));
    },

    getOne(req, res) {
        City.findById(req.params.id)
            .then(city => res.json(city))
            .catch(err => res.json(err));
    },

    delete(req, res) {
        console.log('inside delete');
        City.findByIdAndDelete(req.params.id)
            .then(result => {
                console.log(result);
                res.json({status: 'success'})
            })
            .catch(err => res.json(err));
    },

    update(req, res) {
        City.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                population: req.body.population,
                imageURL: req.body.imageURL
            },
            {
                runValidators: true,
                new: true
            }
        )
            .then(city => res.json(city))
            .catch(err => res.json(err))
    },
}