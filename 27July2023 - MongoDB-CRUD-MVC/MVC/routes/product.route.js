var express = require('express');
var router = express.Router();
var ProductController = require('../controllers/product.controller');

router.post("/addProduct", ProductController.addProduct)
router.get("/products", ProductController.getAllProducts)
router.delete("/product/:name", ProductController.deleteProduct);
router.put("/product", ProductController.updateProduct);

module.exports = router;

