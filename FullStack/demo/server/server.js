const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended: true}));
require('./config/mongoose.config');
require('./routes/city.routes')(app);


app.listen(5500, () => {
    console.log('Listening on Port 5500.')
});