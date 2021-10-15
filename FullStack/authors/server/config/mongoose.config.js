const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/authorsdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Established a connection to your database'))
    .catch(err => console.log('Something went AWOL when trying to connect to your DataBase'))