var Product = require('../models/product.model');

exports.add = async (req, res) => {
    try {
        var newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();

        return res.status(201).json({ message: 'Product Saved successfully.', PRODUCT: savedProduct });
    } catch (error) {
        console.log('Error', error);
        return res.status(400).json({ error: 'Server error.' });
    }
}
exports.list = (req, res) => {

}
exports.update = (req, res) => {

}
exports.delete = (req, res) => {

}
