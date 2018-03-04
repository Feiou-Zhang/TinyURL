var express = require('express');
var app = express();
var restRouter = require('./routes/rest');
var redirectRouter = require('./routes/redirect');

// app.get("/", function (req, res) {
//     res.send("hi, express")
// });

//冒号后面是变量
app.use("/api/v1", restRouter);
app.use("/:shortUrl", redirectRouter);

app.listen(3000);






//
// var http = require('http');
// var fs = require('fs');
//
// http.createServer(function (req, res) {
//     if (req.url === "/") {
//         res.writeHead(200, {"Content-Type" : "text-html"});
//         var html = fs.readFileSync(__dirname + "/index.html");
//         res.end(html);
//     }
//     if (req.url === "/api") {
//         res.writeHead(200, {"Content-Type" : "text-html"});
//         var html = fs.readFileSync(__dirname + "/index.html");
//         res.end(html);
//     }
// }).listen(3000);