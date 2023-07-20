var http = require('http');

const server = http.createServer(function (req, res) {
    console.log(req.httpVersion);
    // code related to read data from a file 
    // send that data using res.end().
    res.end("Hello! I am from Server");
})

server.listen(9011, function () {



    console.log("server started");
})

//http://localhost:9011

