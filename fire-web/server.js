var express = require('express');
var bodyParser = require('body-parser');                     // pull information from HTML POST (express4)
var proxy = require('express-http-proxy');
var fs = require('fs');
var app = express();
var port = 3000;

// App Configuration =================
app.use(express.static(__dirname + '/'));              // set the static files location /public/img will be /img for users
app.use(bodyParser.urlencoded({'extended': 'true'}));        // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                  // parse application/json

// Routing
// app.use('/api', proxy('localhost:8080/api', {
//     forwardPath: function(req, res) {
//         return require('url').parse(req.originalUrl).path;
//     }
// }));

app.get('/api/budgets/incomes', function (req, res) {
    var content = fs.readFileSync("stub/monthly-income.json");
    res.json(JSON.parse(content));
});

app.post('/api/budgets/incomes', function (req, res) {
    var body = JSON.stringify(req.body).replace(/"(\d+\.?\d*)"/g, "$1");
    fs.writeFileSync("stub/monthly-income.json", body);
    res.end();
});

app.get('/api/budgets/expenses', function (req, res) {
    var content = fs.readFileSync("stub/monthly-expense.json");
    res.json(JSON.parse(content));
});

app.post('/api/budgets/expenses', function (req, res) {
    var body = JSON.stringify(req.body).replace(/"(\d+\.?\d*)"/g, "$1");
    fs.writeFileSync("stub/monthly-expense.json", body);
    res.end();
});

app.get('/api/investments', function (req, res) {
    var content = fs.readFileSync("stub/investments.json");
    res.json(JSON.parse(content));
});

app.post('/api/investments', function (req, res) {
    var body = JSON.stringify(req.body).replace(/"(\d+\.?\d*)"/g, "$1");
    fs.writeFileSync("stub/investments.json", body);
    res.end();
});

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

// Start server
app.listen(port, function () {
    "use strict";
    console.log("Express server started on port: " + port);
});
