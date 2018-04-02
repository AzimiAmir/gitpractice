var restify = require('restify');

function onRequest(req, res, next) {
    var name = req.params.name;
    res.setHeader('x-address', 'burnaby');
    res.setHeader('Cache-Control', 'private');
    if(name) {
        res.send('hello ' + name);
    } else {
        res.send('hello dool');
    }
    next();
}

var server = restify.createServer();

server.get('/hello/:name', onRequest);
server.get('/hello', onRequest);

// server.head('/hello/:name', respond);

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});