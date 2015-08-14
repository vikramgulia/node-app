var http = require('http');

var server = http.createServer(function(req, res){
  //console.log(req);
  req.data
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end('Hello World !!!');
});

server.listen(3000);

console.log("server started at http://localhost:3000/");
