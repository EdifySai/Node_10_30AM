
var http = require("http");
var server = http.createServer(function (req, res) {
    res.end("Hello World! I am from Node.JS");
})
server.listen(9012, function () {
    console.log("server started");
})

// http://localhost:9012/


