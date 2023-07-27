var express = require('express');
var app = express();
var dotenv = require('dotenv');
var db = require('./utils/db');
var UserRouter = require('./routes/user.route');
var ProductRouter = require('./routes/product.route');
dotenv.config();
app.use(express.json());
//var UserRouter = require('./routes/user.route');
db.connectToDB(process.env.DB_URL);
app.use(UserRouter);
app.use(ProductRouter);
app.listen(process.env.PORT, () => {
    console.log("server started at " + process.env.PORT);
})