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
exports.list = async (req, res) => {
    try {

        var products = await Product.find({});
        return res.status(200).json({ products: products });
    } catch (error) {
        console.log('Error', error);
        return res.status(400).json({ error: 'Server error.' });
    }

}
// Task
exports.update = (req, res) => {

}
exports.delete = async (req, res) => {
    var id = req.params.id;
    console.log("id", id);
    try {
        var product = await Product.findOneAndDelete({ productId: id });
        return res.status(200).json({ product: product });
    }
    catch (error) {
        console.log('Error', error);
        return res.status(400).json({ error: 'Server error.' });
    }
}
exports.getProductById = async (req, res) => {
    var id = req.params.id;
    console.log("id", id);
    try {
        var product = await Product.findOne({ productId: id });
        return res.status(200).json({ product: product });
    }
    catch (error) {
        console.log('Error', error);
        return res.status(400).json({ error: 'Server error.' });
    }
}