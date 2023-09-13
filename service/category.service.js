const Category = require("../model/category");

exports.createCategory = async (CategoryData) => {
    try {
        const newCategory = new Category(CategoryData);
        const savedCategory = await newCategory.save();
        return savedCategory;
    } catch (error) {
        throw error;
    }
}

exports.getAllCategory = async () => {
    try {
        const categoriesWithProducts = await Category.aggregate([
            {
              $lookup: {
                from: "products",
                localField: "_id",
                foreignField: "categoryId",
                as: "products",
              },
            },
          ]);
      
          return categoriesWithProducts;
        } catch (error) {
            throw error;
        }
    
}
