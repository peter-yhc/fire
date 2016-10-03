var express = require('express');
var app = express();
// var server = require('http').Server(app);
// var session = require('express-session');
// var bodyParser = require('body-parser');

var port = 3000;

app.use(express.static(__dirname + '/public'));
app.listen(port, function () {
    "use strict";
    console.log("Express server started on port: " + port);
});

//Routes
var Routes = require('./routes.js');
var r = new Routes(app);