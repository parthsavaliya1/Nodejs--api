const express = require('express');
const bcrypt = require('bcrypt');
const { createUser, getAllUserWithProduct } = require('../service/user.service');
const router = express.Router();

router.post('/create', async (req, res) => {
    const user = req.body;
    bcrypt.hash(user.password, 10, async (err, hashedPassword) => {
        if (err) {
            console.error('Error hashing password:', err);
            res.status(500).json({ error: 'Error while creating user' });
        } else {
            user.password = hashedPassword;
            createUser(user).then((resp) => {
                res.status(200).json(resp);
            }).catch((error) => {
                console.log(error)
                res.status(500).json({ error: "Error while creating user" })
            })
        }

    })
})

router.get('/get-user-by-product', async (req, res) => {
    getAllUserWithProduct().then((resp) => {
        res.status(200).json(resp);
    }).catch((error) => {
        console.log(error)
        res.status(500).json({ error: "Error while get user" })
    })
})

module.exports = router;