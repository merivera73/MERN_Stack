const express = require('express');
const mongoose = require('mongoose');

const app = express();

// This will fire our mongoose.connect statement to initialize our database connection
require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const AllMyUserRoutes = require("./routes/jokes.route");
AllMyUserRoutes(app);

app.listen(5000, () => console.log("The server is all fired up on port 5000"));