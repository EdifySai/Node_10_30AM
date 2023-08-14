var userController = require('../controllers/user.controller');
var express = require('express');
var userRouter = express.Router();

userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);
userRouter.post("/forgotPassword", userController.forgotPassword);
userRouter.post("/changePassword", userController.changePassword);
module.exports = userRouter;

