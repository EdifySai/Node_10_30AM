var fs = require('fs');

var readStream = fs.createReadStream("source.docx", { highWaterMark: 1024 * 1024 });

var data = "";

readStream.on('data', function (chunk) {
    data = data + chunk
})

readStream.on('end', function () {
    console.log("data", data);
})

readStream.on('error', function (error) {
    console.log("error", error);
})