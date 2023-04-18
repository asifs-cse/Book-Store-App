//create schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Book = new Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    writer:{
        type: String,
        required: true
    }
},{
    collation:'books'
})

//create model
module.exports = mongoose.model('Book',Book);