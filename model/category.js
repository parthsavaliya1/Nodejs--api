const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    categoryType: {
        type: String,
        required: true,
        enum: ['mobile', 'laptop'],
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create a Product model using the schema
const Category = mongoose.model('Category', categorySchema);

module.exports = Category;