
var fs = require('fs');
fs.readFile('abc.xml', function (err, data) {
    if (err) {
        console.log(err);
    }
    if (data) {
        console.log(data.toString());
    }
});

