var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PayrollSchema = new Schema({
    payPeriod: {type: String, required: true, unique: true},
    totalAmount: {type: Number, required: true},
    taxedAmount: {type: Number, required: true},
    netPayment: {type: Number, required: true},
    retirementPlan: {type: Number, required: true},
    updated_at: {type: Date}
});

PayrollSchema.pre('save', function (next) {
    this.updated_at = new Date();
    next();
});

var Payroll = mongoose.model('Payroll', PayrollSchema);
module.exports = Payroll;

// Temporary dummy test data
var newPayroll = Payroll({
    payPeriod: "2016-01-01",
    totalAmount: 2000,
    taxedAmount: 120,
    netPayment: 1880,
    retirementPlan: 200
});
newPayroll.save();

