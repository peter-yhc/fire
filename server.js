var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');                     // pull information from HTML POST (express4)
var PayrollRoutes = require('./route/payroll-routes');

var app = express();
var port = 3000;

// Mongoose Configuration
mongoose.connect('mongodb://localhost/test');

// App Configuration =================
app.use(express.static(__dirname + '/public'));              // set the static files location /public/img will be /img for users
app.use(bodyParser.urlencoded({'extended': 'true'}));        // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                  // parse application/json

// Routing
app.use('/api', PayrollRoutes);

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// Start server
app.listen(port, function () {
    "use strict";
    console.log("Express server started on port: " + port);
});
