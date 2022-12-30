const http = require('http');

const requestListener = function (req, res) {
    console.log('my request header dump : ')
    console.log(`Host : ${req.headers['host']}`)
    console.log(`user-agent : ${req.headers['user-agent']}`)
    console.log(`accept : ${req.headers['accept']}`)
    res.write('Done !');
    res.end();
}
const server = http.createServer(requestListener);

if (process.argv[2] === undefined) {
    server.listen(4242);
    console.log('Server is running at port ' + server.address().port)
} else {
    server.listen(process.argv[2]);
    console.log('Server is running at port ' + server.address().port)
}