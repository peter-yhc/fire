System.register(["@angular/core", "./payroll.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, payroll_service_1;
    var PayrollComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (payroll_service_1_1) {
                payroll_service_1 = payroll_service_1_1;
            }],
        execute: function() {
            PayrollComponent = class PayrollComponent {
                constructor(payrollService) {
                    this.payrollService = payrollService;
                }
                ngOnInit() {
                    this.columnDefs = [
                        { headerName: "Paycheck", field: "rowHeader" },
                        { headerName: "Pay Period 1", field: "0" },
                        { headerName: "Pay Period 2", field: "1" },
                        { headerName: "Pay Period 3", field: "2" },
                        { headerName: "Pay Period 4", field: "3" }
                    ];
                    this.payrollData = [
                        { rowHeader: "Total" },
                        { rowHeader: "Tax" },
                        { rowHeader: "Net" },
                        { rowHeader: "Retirement" }
                    ];
                    this.payrollService.get(2016, this.monthId).subscribe(payrolls => (payrolls.forEach((payroll, index) => {
                        this.payrollData[0][index] = payroll.totalAmount;
                        this.payrollData[1][index] = payroll.taxedAmount;
                        this.payrollData[2][index] = payroll.netPayment;
                        this.payrollData[3][index] = payroll.retirementPlan;
                    })));
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Number)
            ], PayrollComponent.prototype, "monthId", void 0);
            PayrollComponent = __decorate([
                core_1.Component({
                    selector: "payroll-component",
                    templateUrl: "app/monthly-budgets/incoming/payroll/payroll.template.html",
                    styleUrls: ["app/monthly-budgets/incoming/payroll/payroll.component.css"],
                    providers: [
                        payroll_service_1.PayrollService
                    ]
                }), 
                __metadata('design:paramtypes', [payroll_service_1.PayrollService])
            ], PayrollComponent);
            exports_1("PayrollComponent", PayrollComponent);
        }
    }
});
//# sourceMappingURL=payroll.component.js.map