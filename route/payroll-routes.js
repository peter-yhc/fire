var express = require('express');
var router = express.Router();
var Payroll = require('../schema/payroll-schema');

router.get('/payrolls', function(req, res) {
    Payroll.find(function (err, payrolls) {
        res.json(payrolls);
    });
});

module.exports = router;