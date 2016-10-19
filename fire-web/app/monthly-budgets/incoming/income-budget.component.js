System.register(["@angular/core"], function(exports_1, context_1) {
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
    var core_1;
    var IncomeBudgetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            IncomeBudgetComponent = class IncomeBudgetComponent {
                constructor() {
                    this.columnDefs = [
                        { headerName: 'Income', field: 'income' },
                        { headerName: 'Monthly Budgeted', field: 'monthlyBudgeted' },
                        { headerName: 'Monthly Actual', field: 'monthlyActual' },
                    ];
                    this.rowData = [
                        { income: 'Payroll 1', monthlyBudgeted: '', monthlyActual: '' },
                        { income: 'Payroll 2', monthlyBudgeted: '', monthlyActual: '' },
                        { income: 'Other Income 1', monthlyBudgeted: '', monthlyActual: '' },
                        { income: 'Other Income 2', monthlyBudgeted: '', monthlyActual: '' },
                        { income: 'Other Income 3', monthlyBudgeted: '', monthlyActual: '' },
                        { income: 'Other Income 4', monthlyBudgeted: '', monthlyActual: '' },
                        { income: 'Total Income', monthlyBudgeted: '', monthlyActual: '' },
                    ];
                }
            };
            IncomeBudgetComponent = __decorate([
                core_1.Component({
                    selector: 'income-budget-component',
                    templateUrl: 'app/monthly-budgets/incoming/budget.template.html'
                }), 
                __metadata('design:paramtypes', [])
            ], IncomeBudgetComponent);
            exports_1("IncomeBudgetComponent", IncomeBudgetComponent);
        }
    }
});
//# sourceMappingURL=income-budget.component.js.map