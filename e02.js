const http = require('http');

const requestListener = function (req, res) {
    if (req.method == 'GET') {
        res.write('<h1>Hello, World!</h1>');
    } else if (req.method == 'POST') {
        res.write('Heinsenberg')
    }
    res.end()
}

const server = http.createServer(requestListener);

if (process.argv[2] === undefined) {
    process.exit();
} else {
    server.listen(process.argv[2]);
    console.log('Server is running at port ' + server.address().port)
}