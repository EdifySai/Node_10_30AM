var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'pug');
var UserRouter = require('./routes/user.route');
app.use(UserRouter);
app.listen(9011, function () {
    console.log("server started!");
});