const http = require('http');

const requestListener = function (req, res) {
  res.write('<h1>Hello, World!</h1>');
}

const server = http.createServer(requestListener);

if (process.argv[2] === undefined) {
  process.exit();
} else {
  server.listen(process.argv[2]);
  console.log('usage : node e01.js port ' + server.address().port)
}