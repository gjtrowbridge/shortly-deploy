var app = require('./server-config.js');

var port = process.env.port || 8080;

app.listen(port);

console.log('Server now listening on port ' + port);
