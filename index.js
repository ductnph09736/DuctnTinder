var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

server.listen(PORT, function (){
    console.log('NgocDuc is Running');
})
// var http =require('http');
//
// http.createServer(function (req, res){
//     res.end('xin chao');
// }).listen(process.env.port || 1106);