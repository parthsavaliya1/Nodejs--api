const express = require("express");
const { createCategory, getAllCategory } = require("../service/category.service");
const router = express.Router();

router.post('/create', async (req, res) => {
    const category = req.body;
    createCategory(category)
        .then((resp) => {
            res.status(200).json(resp);
        })
        .catch((error) => {
            console.error(error); // Corrected from console.log(errors)
            res.status(500).json({ error: 'Error creating product' });
        });
});

router.get('/categories-with-products', async (req, res) => {
    getAllCategory().then((resp) => {
        res.status(200).json(resp);
    }).catch((error) => {
        console.error(error); // Corrected from console.log(errors)
        res.status(500).json({ error: 'Error creating product' });
    });
});


module.exports = router;
