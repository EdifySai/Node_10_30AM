const Razorpay = require('razorpay');
var express = require('express');
var paymentRouter = express.Router();

const razorpayInstance = new Razorpay({
    key_id: "",
    key_secret: ""
});

paymentRouter.get("/createOrderId/:amount", (req, res) => {
    var amount = req.params.amount;

    console.log("amount", amount);
    razorpayInstance.orders.create({ amount: amount },
        (err, order) => {
            if (err) {
                res.send(err);
            }
            else {
                res.send(order);
            }
        });

})

module.exports = paymentRouter;


