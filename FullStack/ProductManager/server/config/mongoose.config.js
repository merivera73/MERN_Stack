const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/products", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Database connection established for your products"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));