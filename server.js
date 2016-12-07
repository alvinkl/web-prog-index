var express = require('express');
var http = require('http');

var app = express();

app.use(express.static(__dirname));
app.get('/', (req, res) => res.sendFile('index.html'))

var server = http.createServer(app).listen(process.argv[2] || '8080');
