System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Payroll;
    return {
        setters:[],
        execute: function() {
            Payroll = class Payroll {
                constructor(payrollInfo) {
                    payrollInfo = JSON.parse(payrollInfo);
                    this._payPeriod = payrollInfo.payPeriod;
                    this._totalAmount = payrollInfo.totalAmount;
                    this._taxedAmount = payrollInfo.taxedAmount;
                    this._netPayment = payrollInfo.netPayment;
                    this._retirementPlan = payrollInfo.retirementPlan;
                }
                get payPeriod() {
                    return this._payPeriod;
                }
                get totalAmount() {
                    return this._totalAmount;
                }
                get taxedAmount() {
                    return this._taxedAmount;
                }
                get netPayment() {
                    return this._netPayment;
                }
                get retirementPlan() {
                    return this._retirementPlan;
                }
            };
            exports_1("Payroll", Payroll);
        }
    }
});
//# sourceMappingURL=Payroll.js.map