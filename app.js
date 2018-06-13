const express = require('express');
const app = express();
const server = require('http').createServer(app);
app.use('/', express.static(__dirname + '/content'));
server.listen(process.env.PORT || 8888);
