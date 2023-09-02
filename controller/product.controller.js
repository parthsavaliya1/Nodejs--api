const express = require("express");
const { createProduct, getAllProductsByCategoryId } = require("../service/product.service");
const router = express.Router();

router.post('/create', async (req, res) => {
    const product = req.body;
    createProduct(product)
        .then((resp) => {
            res.status(200).json(resp);
        })
        .catch((error) => {
            console.error(error); // Corrected from console.log(errors)
            res.status(500).json({ error: 'Error creating product' });
        });
});

router.get('/all-by-category/:categoryId', async (req, res) => {
    const categoryId = req.params.categoryId;
    getAllProductsByCategoryId(categoryId)
        .then((resp) => {
            res.status(200).json(resp);
        })
        .catch((error) => {
            console.error(error); // Corrected from console.log(errors)
            res.status(500).json({ error: 'Error creating product' });
        });
})

module.exports = router;
