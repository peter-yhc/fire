var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');                              // log requests to the console (express4)
var bodyParser = require('body-parser');                     // pull information from HTML POST (express4)
var methodOverride = require('method-override');             // simulate DELETE and PUT (express4)
var port = 3000;

// configuration =================
mongoose.connect('mongodb://raspberry/test');

app.use(express.static(__dirname + '/public'));              // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                      // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'}));        // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                  // parse application/json
app.use(methodOverride());

app.use(express.static(__dirname + '/public'));

app.listen(port, function () {
    "use strict";
    console.log("Express server started on port: " + port);
});

//Routes
var Routes = require('./routes.js');
var r = new Routes(app);