var http = require("http");
var app = require("./index");

var port = 3000;

var server = http.createServer(app);

server.listen(port);

//이거 기본 중요
