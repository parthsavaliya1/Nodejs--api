const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to a Category document
        ref: 'Category', // Reference to the 'Category' model
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to a Category document
        ref: 'User', // Reference to the 'Category' model
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create a Product model using the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;