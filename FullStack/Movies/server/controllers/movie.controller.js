const Movie = require('../models/movie.model');

module.exports = {
    create: (request, response) => {
        const { title, name, review, stars} = request.body;
        Movie.create({
            title,
            name,
            review,
            stars
        })
            .then(movie => res.json(movie))
            .catch(err => response.status(400).json(err));
    },

    createReview(req, res) {
        Movie.findByIdAndUpdate(req.params.id, {$push: {reviews: req.body}}, {runValidators: true})
            .then(movie => res.json(movie))
            .catch(err => res.json(err));
    },

    getAll(_, res) {
        Movie.find()
            .then(movie => res.json(movie))
            .catch(err => res.json(err));
    },

    getOne(req, res) {
        Movie.findById(req.params.id)
            .then(movie => res.json(movie))
            .catch(err => res.json(err));
    },

    delete(req, res) {
        Movie.findByIdAndDelete(req.params.id)
        .then(result => {
            console.log(result);
            res.json({status: 'success'})
        })
        .catch(err => res.json(res));
    },

    update(req, res) {
        Movie.findByIdAndUpdate(
            req.params.id,
            {
                title: req.params.title,
                name: req.params.name,
                stars: req.params.stars,
                review: req.params.review
            },
            {
                runValidators: true,
                new: true
            }
        )
            .then(movie => res.json(movie))
            .catch(err => res.json(err));
    },

    

}

