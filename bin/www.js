const http = require('http');
const app = require('../app');

const port = process.env.port || 8080;
app.set('port',port);

const server = http.createServer(app);
server.listen(port);
