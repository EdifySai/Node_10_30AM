var cartController = require('../controllers/cart.controller');
var express = require('express');
var cartRouter = express.Router();

cartRouter.post('/add', cartController.add);
cartRouter.post('/list', cartController.list);

module.exports = cartRouter;

