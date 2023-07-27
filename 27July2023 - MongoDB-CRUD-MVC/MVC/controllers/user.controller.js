var UserModel = require('../models/user.model');
exports.addUser = async function (req, res) {
    var user = req.body;
    var UserData = new UserModel(user);
    try {
        var response = await UserData.save();
        if (response instanceof Error) {
            res.send({
                message: "failure",
                statusCode: 500
            })
        }
        else {
            res.send({
                message: "success",
                statusCode: 200
            })
        }
    }
    catch (error) {
        res.send({
            message: "failure",
            error: error.message,
            statusCode: 500
        })
    }
}

exports.allUsers = async function (req, res) {
    try {
        var response = await UserModel.find({});

        res.send(response);
    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
};

// Mongoose - delete - findOne -  await  UserModel.findOneAndDelete({"email":email});
exports.deleteUser = async function (req, res) {
    var email = req.params.email;
    var response = await UserModel.findOneAndRemove({ "email": email });
    res.send(response);
};
exports.updateUser = async function (req, res) {
    var user = req.body;
    var response = await UserModel.updateOne({ "email": user.email, user });
    res.send(response);
};