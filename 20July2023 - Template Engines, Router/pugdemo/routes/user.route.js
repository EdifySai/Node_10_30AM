var express = require('express');
var userRouter = express.Router();
userRouter.get("/", function (req, res) {
    res.render('index')
});
userRouter.post("/authenticate", function (req, res) {
    var body = req.body;
    console.log("body", body);

    if (body.username == "sai" && body.password == "sai") {
        res.render('success');
    }
    else {
        res.render('index', { message: 'login failed' });
    }
})
module.exports = userRouter;