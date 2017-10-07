const interwebs = require('http');

const host = 'localhost';
const portnum = 3000;

const localserver = interwebs.createServer((req, res) => {
    res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Getting Familiar\n');
});

localserver.listen(portnum, host, () => {
    console.log(`Your local server available at http://${host}:${portnum}/`);
});