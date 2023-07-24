var express = require('express');
var app = express();
var multer = require('multer');
var dest = multer({ dest: __dirname + "/uploads" });

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/profilePic", dest.single('profile'), function (req, res) {

    console.log(req.file);

});

app.listen(9011, () => {
    console.log("server started!");
})