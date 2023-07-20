var express = require('express');
var app = express();

var products = [
    {
        id: 101,
        name: "product 1"
    },
    {
        id: 102,
        name: "product 2"
    }
];

app.get("/products", function (req, res) {
    res.send(products);
})

app.listen(9011, function () {
    console.log("server started!");
})