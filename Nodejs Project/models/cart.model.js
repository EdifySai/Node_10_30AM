const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    email: {
        type: String
    },
    cartId: {
        type: Number
    },
    products: {
        type: Array
    }
});
const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
