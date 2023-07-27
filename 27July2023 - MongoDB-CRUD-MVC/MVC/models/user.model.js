var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String
        },
        password: {
            type: String
        },
        mobileNumber: {
            type: Number
        }
    }
)
module.exports = mongoose.model('user', UserSchema);