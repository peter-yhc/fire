var express = require('express');
var router = express.Router();
var Payroll = require('../schema/payroll-schema');

router.get('/payrolls', function(req, res) {
    Payroll.find(function (err, payrolls) {
        res.json(payrolls);
    });
});


// Example: curl -XPOST localhost:3000/api/payrolls/searches --data '{"payPeriod": "^2016"}' -H "Content-Type: application/json"
router.post('/payrolls/searches', function(req, res) {
    Object.keys(req.body).forEach(function(key) {
        req.body[key] = new RegExp(req.body[key]);  // Regex cannot be sent over json: http://meloncholy.com/blog/sending-a-regex-via-json-in-javascript/
                                                    // Parse value into regular expression
    });
    Payroll.find(req.body, function (err, payrolls) {
        res.json(payrolls);
    });
});

module.exports = router;
