
var fs = require('fs');

var readStream = fs.createReadStream("source.docx");
var writeStream = fs.createWriteStream("dest.docx");

readStream.pipe(writeStream);