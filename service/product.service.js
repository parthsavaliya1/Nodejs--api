const Product = require("../model/product");

exports.createProduct = async (productData) => {
    try {
        const newProduct = new Product(productData);
        const savedProduct = await newProduct.save();
        return savedProduct;
    } catch (error) {
        throw error;
    }
}

exports.getAllProductsByCategoryId = async (id) => {
    try {
        try {
            const productsByCategory = await Product.find({ categoryId: id }).exec();
            return productsByCategory;
        } catch (error) {
            throw error;
        }
    } catch (error) {
        throw error;
    }
}
