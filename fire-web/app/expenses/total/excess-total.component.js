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
    var ExcessTotalComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ExcessTotalComponent = class ExcessTotalComponent {
                constructor() {
                    this.columnDefs = [
                        { headerName: "Excess Expenses", field: "excessExpenses" },
                        { headerName: "Costs", field: "costs" },
                        { headerName: "Budget", field: "budget" },
                        { headerName: "Daily", field: "daily" },
                        { headerName: "Monthly", field: "monthly" },
                        { headerName: "Annually", field: "annually" },
                        { headerName: "Savings", field: "savings" },
                        { headerName: "FI", field: "fi" }
                    ];
                    this.rowData = [
                        { excessExpenses: 'Gifts', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0 },
                        { excessExpenses: 'Anniversaries', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0 },
                        { excessExpenses: 'Holidays', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0 },
                        { excessExpenses: 'Travel', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0 },
                        { excessExpenses: 'Business expenses', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0 },
                    ];
                }
            };
            ExcessTotalComponent = __decorate([
                core_1.Component({
                    selector: 'excess-total-component',
                    templateUrl: 'app/expenses/expense-table.template.html',
                    styleUrls: ['app/expenses/total/total.component.css']
                }), 
                __metadata('design:paramtypes', [])
            ], ExcessTotalComponent);
            exports_1("ExcessTotalComponent", ExcessTotalComponent);
        }
    }
});
//# sourceMappingURL=excess-total.component.js.map