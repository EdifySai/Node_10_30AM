var express = require('express');
var app = express();
var mongoose = require('mongoose');
app.use(express.json());
mongoose.connect("mongodb://localhost/myntra").then(
    () => {
        console.log("connected to db");
    },
    error => {
        console.log(error);
    }
)
var Schema = mongoose.Schema;
var ProductSchema = new Schema(
    {
        pid: {
            type: Number,
            required: true
        },
        name: {
            type: String
        },
        price: {
            type: Number
        }
    }
)
var ProductModel = mongoose.model('product', ProductSchema);

app.get('/generate', async function (req, res) {
    for (var i = 0; i < 100000; i++) {
        var obj = {
            pid: i,
            name: "product-" + i,
            price: i * 10
        }
        var Product = new ProductModel(obj);
        await Product.save();
    }
    res.send("completed");
})
app.listen(9011, () => {
    console.log("server started");
})