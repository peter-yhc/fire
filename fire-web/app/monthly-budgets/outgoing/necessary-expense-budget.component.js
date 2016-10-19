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
    var NecessaryExpenseBudgetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NecessaryExpenseBudgetComponent = class NecessaryExpenseBudgetComponent {
                constructor() {
                    this.columnDefs = [
                        { headerName: 'Necessary Expenses', field: 'necessaryExpenses' },
                        { headerName: 'Monthly Budgeted', field: 'monthlyBudgeted' },
                        { headerName: 'Monthly Actual', field: 'monthlyActual' },
                    ];
                    this.rowData = [
                        { necessaryExpenses: 'Mortgage / Rent', monthlyBudgeted: '', monthlyActual: '' },
                        { necessaryExpenses: 'Home Insurance', monthlyBudgeted: '', monthlyActual: '' },
                        { necessaryExpenses: 'Property Tax', monthlyBudgeted: '', monthlyActual: '' },
                        { necessaryExpenses: 'Health Insurance', monthlyBudgeted: '', monthlyActual: '' },
                        { necessaryExpenses: 'Medical', monthlyBudgeted: '', monthlyActual: '' },
                        { necessaryExpenses: 'Food & Groceries', monthlyBudgeted: '', monthlyActual: '' },
                        { necessaryExpenses: 'Electric', monthlyBudgeted: '', monthlyActual: '' },
                        { necessaryExpenses: 'Natural Gas', monthlyBudgeted: '', monthlyActual: '' },
                        { necessaryExpenses: 'Cable & Internet', monthlyBudgeted: '', monthlyActual: '' },
                        { necessaryExpenses: 'Mobile Phones', monthlyBudgeted: '', monthlyActual: '' },
                        { necessaryExpenses: 'Public Transport', monthlyBudgeted: '', monthlyActual: '' },
                        { necessaryExpenses: 'Car Insurance', monthlyBudgeted: '', monthlyActual: '' },
                        { necessaryExpenses: 'Car Maintenance', monthlyBudgeted: '', monthlyActual: '' },
                        { necessaryExpenses: 'Petrol', monthlyBudgeted: '', monthlyActual: '' },
                        { necessaryExpenses: 'Home Repairs', monthlyBudgeted: '', monthlyActual: '' },
                        { necessaryExpenses: 'Pets', monthlyBudgeted: '', monthlyActual: '' },
                        { necessaryExpenses: 'Furniture', monthlyBudgeted: '', monthlyActual: '' },
                        { necessaryExpenses: 'Misc', monthlyBudgeted: '', monthlyActual: '' }
                    ];
                }
            };
            NecessaryExpenseBudgetComponent = __decorate([
                core_1.Component({
                    selector: 'necessary-expense-budget-component',
                    templateUrl: 'app/monthly-budgets/outgoing/expense.template.html'
                }), 
                __metadata('design:paramtypes', [])
            ], NecessaryExpenseBudgetComponent);
            exports_1("NecessaryExpenseBudgetComponent", NecessaryExpenseBudgetComponent);
        }
    }
});
//# sourceMappingURL=necessary-expense-budget.component.js.map