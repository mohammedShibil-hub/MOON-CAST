const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : String,
    image : String,
    mrp : Number,
    price : Number,
    offer : Number,
});

module.exports = mongoose.model("Product", productSchema);