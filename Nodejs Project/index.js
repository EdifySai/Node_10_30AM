const express = require('express');
var app = express();

var dotenv = require('dotenv');
var db = require('./services/db');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

dotenv.config();
db.connectToDB();
var userRoute = require('./routes/user.route');
var productRoute = require('./routes/product.route');
var cartRoute = require('./routes/cart.route');
app.use(express.json());
app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/cart", cartRoute);

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "ECommerce Backend Application",
      version: "0.1.0",
      description:
        "This is an ecommerce backend application APIs to be used by Front end devs",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Digital Lync",
        url: "https://www.digital-lync.com",
        email: "digital@gmail.com",
      },
    },
    servers: [
      {
        url: ["http://localhost:3000"],
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);


app.listen(process.env.PORT_NO, () => {
  console.log("Server started on PORT NO :" + process.env.PORT_NO);
})