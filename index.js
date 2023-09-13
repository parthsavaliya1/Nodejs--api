const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

require("dotenv").config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./config/database.config");

const productController = require("./controller/product.controller");
const categoryController = require("./controller/category.controller");
const userController = require('./controller/user.controller');
const authenticateToken = require('./config/authentication');

app.use("/api/product",authenticateToken, productController);
app.use("/api/category",authenticateToken, categoryController);
app.use("/api/user", userController);


app.listen(process.env.PORT, () => {
    //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${process.env.PORT}`);
});
