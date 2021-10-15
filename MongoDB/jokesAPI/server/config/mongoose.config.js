const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokesDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> console.log('Established a connection to the database'))
  .catch(err => console.log('Something went AWOL when connecting to the database', err));