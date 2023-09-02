const User = require("../model/user");


exports.createUser = async (userData) => {
    try {
        const newUser = new User(userData);
        const savedUser = await newUser.save();
        return savedUser;
    } catch (error) {
        throw error;
    }
}

exports.getAllUserWithProduct = async () => {
    try {
        const userWithProducts = await User.aggregate([
            {
                $lookup: {
                    from: 'products', // The name of the Product collection
                    localField: '_id', // The field from the Category collection
                    foreignField: 'userId', // The field from the Product collection
                    as: 'products',
                },
            },
        ]);

        return userWithProducts;
    } catch (error) {
        throw error;
    }
}