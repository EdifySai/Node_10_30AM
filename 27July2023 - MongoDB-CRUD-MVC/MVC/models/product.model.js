var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number
        },
        description: {
            type: String
        },
        seller: {
            type: String
        }
    }
)
module.exports = mongoose.model('products', ProductSchema);

