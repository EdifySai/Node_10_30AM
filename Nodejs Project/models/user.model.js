const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (e) {
       
        return /\S+@\S+\.\S+/.test(e);
      },
      message: 'Please enter a valid email address.'
    }
  },
  password: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: function (e) {
    
        return /^\d{10}$/.test(e);
      },
      message: 'Please enter a valid mobile number.'
    }
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
