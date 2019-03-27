const express = require('express');
const bodyParser = require('body-parser');
// require config file
require('dotenv').config();

// initialize express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// connect db
require('./db');

// Require routes
app.use('/products', require('./routes/product'));

let port = 5002;

app.listen(port, () => {
    console.log('Server is running on port ', port);
})