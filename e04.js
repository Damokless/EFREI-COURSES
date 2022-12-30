const http = require('http');
const url = require('url')
const querystring = require('querystring')

const requestListener = function (req, res) {
    const {query} = url.parse(req.url)
    if (query) {
        console.log('my request dump : ')
        console.log(`GET /?${query}`)

        const object = querystring.parse(query)
        for (const [key, value] of Object.entries(object)) {
            console.log(`${key}: ${value}`)
        }
    }
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