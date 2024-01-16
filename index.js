const http = require('http');
const url = require('url');

// create a server object
http.createServer((req, res) => {
    // write a response to the client
    // res.write("Hello World");

    //set CORS header
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    if (req.url === '/summer') {
        res.write("Summer is so hot.");
    }
    else if (req.url === '/winter') {
        res.write("Winter is so cold.");
    }
    else if (req.url === '/spring') {
        res.write("Spring is so beautiful.");
    }
    else if (req.url === '/fall') {
        res.write("Fall is chilly.");
    }
    else if (req.url === '/') {
        res.write("Hello World");
    }
    else {
        res.write(req.url);
    }

    // let urlString = url.parse(req.url, true);
    // res.write(urlString.pathname);
    // res.write(JSON.stringify(urlString.query));

    res.end();
}).listen(8080);