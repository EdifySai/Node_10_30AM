var mongoose = require('mongoose');
exports.connectToDB = () => {
    mongoose.connect(process.env.DATABASE_URL).then(
        () => {
            console.log("connected to db")
        },
        error => {
            console.log(error);
        }
    )
}