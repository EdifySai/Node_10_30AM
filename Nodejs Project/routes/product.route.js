var productController = require('../controllers/product.controller');
var express = require('express');
var productRouter = express.Router();

productRouter.post('/add', productController.add);
productRouter.put('/update', productController.update);
productRouter.delete("/delete/:id", productController.delete);
productRouter.get("/list", productController.list);
productRouter.get("/:id", productController.getProductById);

module.exports = productRouter;

