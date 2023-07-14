var fs = require('fs');
var writeStream = fs.createWriteStream("abc.txt");
var str = "gfhukjlnsdbjkjb bcdksnnk cvdekn vcmn kmnm,mln";
writeStream.write(str);
writeStream.end();
writeStream.on('finish', function () {
    console.log("writing finished");
});