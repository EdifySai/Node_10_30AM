var Order = require('../models/order.model');
exports.add = async (req, res) => {
    try {

        var newOrder = new Order(req.body);
        var newOrderResponse = await newOrder.save();
        console.log("newOrderResponse", newOrderResponse);
        if (newOrderResponse) {
            return res.status(201).json({ message: 'Order Placed', order: newOrderResponse });
        }
    } catch (error) {
        console.log('Error', error);
        return res.status(400).json({ error: 'Server error.' });
    }
}
exports.list = async (req, res) => {
    console.log("email", req.body.email);
    try {
        var orderResponse = await Order.find({ email: req.body.email });
        return res.status(200).json({ order: orderResponse });
    } catch (error) {
        console.log('Error', error);
        return res.status(400).json({ error: 'Server error.' });
    }

}

/*

keyid: rzp_test_PfxhXHr6pnO3bX 
key secret: az50D89gjFEYpf2YwfUha5iu

*/
