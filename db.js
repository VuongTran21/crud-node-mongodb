// Connect to db
const mongoose = require('mongoose');
let mongoDB = process.env.MLAB_URI || process.env.LOCAL_URL;

let db = mongoose
            .connect(mongoDB, { useNewUrlParser: true })
            .then(() => console.log("MongoDB connected"))
            .catch(err => console.log('MongoDB connect err', err));

module.exports = db;