const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
require("./config/mongoose.config");
require("./routes/person.routes")(app);

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
