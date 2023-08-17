var orderController = require('../controllers/order.controller');
var express = require('express');
var orderRouter = express.Router();

orderRouter.post('/add', orderController.add);
orderRouter.post('/list', orderController.list);

module.exports = orderRouter;

