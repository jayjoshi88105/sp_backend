var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = req.body
  var txt = q.url;
  res.end(txt);
}).listen(3005);