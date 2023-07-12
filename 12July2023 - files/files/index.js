
var fs = require('fs');

var fd = fs.openSync('package.json', 'r');

fs.fstat(fd, function (err, stats) {
    if (err) {
        console.log(err)
    }
    else {
        console.log(stats);
    }
})