var express = require('express');
var app = express();
var server = require('http').Server(app);
var session = require('express-session');
var bodyParser = require('body-parser');


//var mysql = require('mysql');

server.listen(3000, function () {
    console.log("Server connected. Listening on port: 9999");
});
//session init
app.use(session({
    secret: 'can',
    resave: false,
    saveUninitialized: false
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

//Routes
var Routes = require('./routes.js');
var r = new Routes(app);