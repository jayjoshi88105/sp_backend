const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    product_name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    created_date: { 
        type : Date, 
        default: Date.now 
    }
});

const Product = mongoose.model('product', ProductSchema);
module.exports = Product;