const express = require('express');
var app = express();
var dotenv = require('dotenv');
var db = require('./services/db');
dotenv.config();
db.connectToDB();
app.listen(process.env.PORT_NO, () => {
    console.log("Server started on PORT NO :" + process.env.PORT_NO);
})