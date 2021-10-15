const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/commercedb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(() => console.log("Commerce Database connection has been established"))
    .catch( err => console.log("Something went AWOL when connecting to the Database", err));