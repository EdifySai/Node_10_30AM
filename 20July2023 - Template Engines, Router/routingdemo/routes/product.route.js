
var express = require('express');
var productRouter = express.Router();
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
productRouter.get("/products", function (req, res) {
    res.send(products);
})

productRouter.post("/addProduct", function (req, res) {
    var product = req.body;
    products.push(product);
    res.send(products);
})
productRouter.put("/updateProduct/:id", function (req, res) {

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

productRouter.delete("/deleteProduct/:id", function (req, res) {

    var id = req.params.id;
    products.forEach(function (product, i) {
        if (product.id == id) {
            products.splice(i, 1);
        }
    })
    res.send(products);
});

productRouter.get("/product/:id", function (req, res) {
    var id = req.params.id;
    products.forEach(function (product) {
        if (product.id == id) {
            res.send(product);
        }
    })
});
module.exports = productRouter;