const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json());

app.use(express.urlencoded({extended: true}));
require('./config/mongoose.config');
require('./routes/commerce.routes.js')(app);

app.listen(5500, () => {
    console.log('Listening at Port 5500')
})
