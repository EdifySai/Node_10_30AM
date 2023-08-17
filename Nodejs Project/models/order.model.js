const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    email: {
        type: String
    },
    orderId: {
        type: Number
    },
    products: {
        type: Array
    }
});
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
