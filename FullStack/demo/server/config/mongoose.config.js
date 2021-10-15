const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/demodb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});