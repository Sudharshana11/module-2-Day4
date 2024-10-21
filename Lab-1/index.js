var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello world!'); //write a response to the client
  res.end(); 
  console.log("server is running on 8001 check on localhost");
  
}).listen(8001); 
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello world!'); //write a response to the client
  res.end(); 
  console.log("server is running on 8001 check on localhost");
  
}).listen(8001); 
