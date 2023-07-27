var express = require('express');
var router = express.Router();
var UserController = require('../controllers/user.controller');

router.post("/addUser", UserController.addUser)
router.get("/users", UserController.allUsers)
router.delete("/user/:email", UserController.deleteUser);
router.put("/user", UserController.updateUser);

module.exports = router;

