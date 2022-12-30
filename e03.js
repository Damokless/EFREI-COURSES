const http = require('http');
const fs = require('fs')

const requestListener = function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./index.html', null, function (error, data) {
        if (error) {
            res.writeHead(404);
            respone.write('File not found');
        } else {
            res.write(data);
        }
        res.end();
    });
}
const server = http.createServer(requestListener);

if (process.argv[2] === undefined) {
    server.listen(4242);
    console.log('Server is running at port ' + server.address().port)
} else {
    server.listen(process.argv[2]);
    console.log('Server is running at port ' + server.address().port)
}