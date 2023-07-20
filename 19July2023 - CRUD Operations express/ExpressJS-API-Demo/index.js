var express = require('express');
var app = express();
app.use(express.json());
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

app.post("/addProduct", function (req, res) {
    var product = req.body;
    products.push(product);
    res.send(products);
})
app.put("/updateProduct/:id", function (req, res) {

    var id = req.params.id;
    var updatedName = req.body.name;

    products.forEach(function (product) {
        if (product.id == id) {
            product.name = updatedName;
            return;
        }
    })
    res.send(products);
})

app.delete("/deleteProduct/:id", function (req, res) {

    var id = req.params.id;
    products.forEach(function (product, i) {
        if (product.id == id) {
            products.splice(i, 1);
        }
    })
    res.send(products);
});

app.get("/product/:id", function (req, res) {
    var id = req.params.id;
    products.forEach(function (product) {
        if (product.id == id) {
            res.send(product);
        }
    })
});

app.update("/updateMultiple", function (req, res) {
    var productsArr = req.body;
})
app.listen(9011, function () {
    console.log("server started!");
})