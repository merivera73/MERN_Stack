const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allDaJokes => res.json({jokes: allDaJokes}))
        .catch(err => res.json({message: "Something went AWOL", error: err}));
};

module.exports.findOneSignleJoke = (req, res) => {
    joke.findOne({_id: req.params.id})
        .then(oneSingleJoke => res.json({joke: oneSingleJoke}))
        .catch(err => res.json({message: "Somethine went AWOL with your request", error: err}));
}

module.exports.createNewJoke = (req, res) => {
    joke.create(req.body)
        .then(updatedJoke => res.json({joke: updatedJoke}))
        .catch(err => res.json({message: "Something went AWOL when trying to add your new Joke", error: err}));
}

module.exports.updateExistingJoke = (req, res) => {
    joke.findOneAndUpdate({ _id: req.params.id}, req.body, {new: true})
        .then(updatedJoke => res.json({joke: updatedJoke}))
        .catch(err => res.json({message: "Something went AWOL when updating this Joke", error: err}));
}

module.exports.deleteAnExistingJoke = (req, res) => {
    joke.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "Something went AWOL when trying to delete this joke", error: err}))
}