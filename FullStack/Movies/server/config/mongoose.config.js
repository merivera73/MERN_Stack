const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/moviesdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});