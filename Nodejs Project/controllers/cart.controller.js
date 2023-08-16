var Cart = require('../models/cart.model');
exports.add = async (req, res) => {
    try {
        var response = await Cart.findOne({ email: req.body.email });
        console.log("response", response);
        if (response == null) {
            var newCart = new Cart(req.body);
            var newCartResponse = await newCart.save();
            console.log("newCartResponse", newCartResponse);
            if (newCartResponse) {
                return res.status(201).json({ message: 'Product added to cart.', cart: newCartResponse });
            }
        }
        else {
            let response = await Cart.findOneAndReplace({ email: req.body.email }, req.body);
            if (response) {
                var resp = await Cart.findOne({ email: req.body.email });
                console.log("response", resp);
                return res.status(201).json({ message: 'Product added to cart.', cart: resp });
            }

        }
        // var newCart = new Product(req.body);
        // const savedProduct = await newProduct.save();

        // return res.status(201).json({ message: 'Product Saved successfully.', PRODUCT: savedProduct });
    } catch (error) {
        console.log('Error', error);
        return res.status(400).json({ error: 'Server error.' });
    }
}
exports.list = async (req, res) => {
    console.log("email", req.body.email);
    try {
        var cartResponse = await Cart.findOne({ email: req.body.email });
        return res.status(200).json({ cart: cartResponse });
    } catch (error) {
        console.log('Error', error);
        return res.status(400).json({ error: 'Server error.' });
    }

}
