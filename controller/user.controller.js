const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createUser, getAllUserWithProduct } = require('../service/user.service');
const User = require('../model/user');
const authenticateToken = require('../config/authentication');
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


router.post('/login', async (req, res) => {
    const { username, password } = req.body;
      const user =await User.findOne({userName:username});
  
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
      const token = jwt.sign({ username: user.userName }, process.env.JWT_SECRET, {
      expiresIn: '1h', 
    });
    res.json({ token });
  });

router.get('/get-user-by-product',authenticateToken, async (req, res) => {
    getAllUserWithProduct().then((resp) => {
        res.status(200).json(resp);
    }).catch((error) => {
        console.log(error)
        res.status(500).json({ error: "Error while get user" })
    })
})

module.exports = router;
