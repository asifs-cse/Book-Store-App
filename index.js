const express = require('express');
const mongoose = require('mongoose');
path = require('path'),
cors = require('cors'),
bodyParser = require('body-parser'),
mongoDb = require('./database/db');
const PORT = 3400;
const app = express();

mongoose.Promise = global.Promise;

const dbConnect = async ()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/book-store');
        console.log('data base conenction successfully!');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

app.listen(PORT, ()=>{
    console.log(`Server is connected at http://localhost:${PORT}`);
    dbConnect();
})
