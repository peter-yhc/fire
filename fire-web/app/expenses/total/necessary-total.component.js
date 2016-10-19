System.register(['@angular/core'], function(exports_1, context_1) {
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
    var NecessaryTotalComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NecessaryTotalComponent = class NecessaryTotalComponent {
                constructor() {
                    this.columnDefs = [
                        { headerName: 'Necessary Expenses', field: 'necessaryExpenses' },
                        { headerName: 'Costs', field: 'costs' },
                        { headerName: 'Budget', field: 'budget' },
                        { headerName: 'Daily', field: 'daily' },
                        { headerName: 'Monthly', field: 'monthly' },
                        { headerName: 'Annually', field: 'annually' },
                        { headerName: 'Savings', field: 'savings' },
                        { headerName: 'FI', field: 'fi' }
                    ];
                    this.rowData = [
                        { necessaryExpenses: 'Mortgage / Rent', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0 },
                        { necessaryExpenses: 'Home Insurance', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0 },
                        { necessaryExpenses: 'Property Tax', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0 },
                        { necessaryExpenses: 'Health Insurance', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0 },
                        { necessaryExpenses: 'Medical', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0 },
                        { necessaryExpenses: 'Food & Groceries', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0 },
                        { necessaryExpenses: 'Electric', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0 },
                        { necessaryExpenses: 'Natural Gas', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0 },
                        { necessaryExpenses: 'Cable & Internet', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0 },
                        { necessaryExpenses: 'Mobile Phones', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0 },
                        { necessaryExpenses: 'Public Transport', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0 },
                        { necessaryExpenses: 'Car Insurance', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0 },
                        { necessaryExpenses: 'Car Maintenance', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0 },
                        { necessaryExpenses: 'Petrol', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0 },
                        { necessaryExpenses: 'Home Repairs', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0 },
                        { necessaryExpenses: 'Pets', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0 },
                        { necessaryExpenses: 'Furniture', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0 },
                        { necessaryExpenses: 'Misc', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0 }
                    ];
                }
            };
            NecessaryTotalComponent = __decorate([
                core_1.Component({
                    selector: 'necessary-total-component',
                    templateUrl: 'app/expenses/expense-table.template.html',
                    styleUrls: ['app/expenses/total/total.component.css']
                }), 
                __metadata('design:paramtypes', [])
            ], NecessaryTotalComponent);
            exports_1("NecessaryTotalComponent", NecessaryTotalComponent);
        }
    }
});
//# sourceMappingURL=necessary-total.component.js.map