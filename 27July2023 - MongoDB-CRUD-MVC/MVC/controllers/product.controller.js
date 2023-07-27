
var ProductModel = require('../models/product.model');

exports.addProduct = async function (req, res) {
    var product = req.body;
    var ProductData = new ProductModel(product);
    try {
        var response = await ProductData.save();
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

exports.getAllProducts = async function (req, res) {
    try {
        var response = await ProductModel.find({});

        res.send(response);
    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
};

exports.deleteProduct = async function (req, res) {
    var name = req.params.name;
    var response = await ProductModel.findOneAndRemove({ "name": name });
    res.send(response);
};
exports.updateProduct = async function (req, res) {
    var product = req.body;
    var response = await ProductModel.updateOne({ "name": user.name, product });
    res.send(response);
};