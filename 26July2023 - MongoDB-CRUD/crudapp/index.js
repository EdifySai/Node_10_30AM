var express = require('express');
var app = express();
var dotenv = require('dotenv');
var mongoose = require('mongoose');
app.use(express.json());
dotenv.config();
mongoose.connect(process.env.DATABASE_URL).then(
    () => {
        console.log("connected to db")
    },
    error => {
        console.log(error);
    }
)
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
var UserModel = mongoose.model('user', UserSchema);
app.post("/addUser", async function (req, res) {
    var user = req.body;
    var UserData = new UserModel(user);
    try {
        var response = await UserData.save();
        if (response instanceof Error) {
            res.send({
                message: "failure",
                statusCode: 500
            })
        }
        else {
            res.send({
                message: "success",
                statusCode: 200
            })
        }
    }
    catch (error) {
        res.send({
            message: "failure",
            error: error.message,
            statusCode: 500
        })
    }
})

app.get("/users", async function (req, res) {
    try {
        var response = await UserModel.find({});

        res.send(response);
    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
})

// Mongoose - delete - findOne -  await  UserModel.findOneAndDelete({"email":email});

app.delete("/user/:email", async function (req, res) {
    var email = req.params.email;
    var response = await UserModel.findOneAndRemove({ "email": email });
    res.send(response);
})

app.put("/user", async function (req, res) {
    var user = req.body;
    var response = await UserModel.updateOne({ "email": user.email, user });
    res.send(response);
})

app.listen(process.env.PORT_NO, () => {
    console.log("server started on " + process.env.PORT_NO);
})
