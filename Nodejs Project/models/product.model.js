const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  productId: {
    type: Number
  },
  name: {
    type: String
  },
  price: {
    type: Number
  },
  imageURL: {
    type: String
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
