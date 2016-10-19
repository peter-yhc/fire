var express = require('express');
var bodyParser = require('body-parser');                     // pull information from HTML POST (express4)

var app = express();
var port = 3000;

// App Configuration =================
app.use(express.static(__dirname + '/'));              // set the static files location /public/img will be /img for users
app.use(bodyParser.urlencoded({'extended': 'true'}));        // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                  // parse application/json

// Routing

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

// Start server
app.listen(port, function () {
    "use strict";
    console.log("Express server started on port: " + port);
});
