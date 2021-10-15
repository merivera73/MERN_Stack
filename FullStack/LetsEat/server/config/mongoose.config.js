const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/letseatdb2', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});