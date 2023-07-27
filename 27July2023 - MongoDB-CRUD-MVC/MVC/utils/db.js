var mongoose = require('mongoose');
exports.connectToDB = function (dburl) {
    mongoose.connect(dburl).then(
        () => {
            console.log("connected to db")
        },
        error => {
            console.log(error);
        }
    )
}