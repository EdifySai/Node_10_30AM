var express = require('express');
var app = express();
app.use(express.json());

var ProductRouter = require("./routes/product.route");

app.use(ProductRouter);

app.listen(9011, () => {
    console.log("server started");
})