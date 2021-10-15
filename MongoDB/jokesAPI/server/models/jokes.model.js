const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    name: String,
    joke: String,
    creater: String
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;