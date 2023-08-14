// username, emailid, password, mobile number, role (ROLE_USER)

const mongoose = require('mongoose');

var Schema = mongoose.Schema;

new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            minlength: 5,
            maxlength: 50
        },
        password: {
            type: String,
            required: false,
            minlength: 8,
            maxlength: 50,
            validate: {
                validator: (password) =>{
                    if (password.length < 8) {
                        return "Password should be atleast 8 chars";
                        
                    }
                    if (/[A-Z]+/.test(password)) {
                    }
                    else {
                        return "Password should have atleast 1 upper case";
                        
                    }
                    if (/[a-z]+/.test(password)) {
                        
                    }
                    else {
                        return "Password should have atleast 1 lower case";
                     
                    }
                    if (/[0-9]+/.test(password)) {
                       
                    }
                    else {
                        return "Password should have atleast 1 digit";
                        
                    }
                    if (/\W+/.test(password)) {
                       
                    }
                    else {
                       return "Password should have atleast 1 special character";
                       
                    }
                }
            }
        },

        phoneNumber: {
            type:Number, 
             required:true, 
             unique:true, 
             validate: 
               {
                   validator: {
                       
                   }
               }
        }
    }
);

