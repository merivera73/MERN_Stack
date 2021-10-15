const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {type: String},
    price: {type: Number},
    qty: {type: Number}
}, {timestamps: true});

module.exports.Product = mongoose.model('Product', ProductSchema);