System.register(["@angular/core", "primeng/components/datatable/datatable", "primeng/components/common/shared", "./month.component", "./incoming/income-budget.component", "./incoming/investment-budget.component", "./outgoing/necessary-expense-budget.component", "./outgoing/discretionary-expense-budget.component", "./outgoing/excess-expense-budget.component", "./incoming/payroll/payroll.component", "@angular/common", "@angular/http"], function(exports_1, context_1) {
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
    var core_1, datatable_1, shared_1, month_component_1, income_budget_component_1, investment_budget_component_1, necessary_expense_budget_component_1, discretionary_expense_budget_component_1, excess_expense_budget_component_1, payroll_component_1, common_1, http_1;
    var MonthModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (datatable_1_1) {
                datatable_1 = datatable_1_1;
            },
            function (shared_1_1) {
                shared_1 = shared_1_1;
            },
            function (month_component_1_1) {
                month_component_1 = month_component_1_1;
            },
            function (income_budget_component_1_1) {
                income_budget_component_1 = income_budget_component_1_1;
            },
            function (investment_budget_component_1_1) {
                investment_budget_component_1 = investment_budget_component_1_1;
            },
            function (necessary_expense_budget_component_1_1) {
                necessary_expense_budget_component_1 = necessary_expense_budget_component_1_1;
            },
            function (discretionary_expense_budget_component_1_1) {
                discretionary_expense_budget_component_1 = discretionary_expense_budget_component_1_1;
            },
            function (excess_expense_budget_component_1_1) {
                excess_expense_budget_component_1 = excess_expense_budget_component_1_1;
            },
            function (payroll_component_1_1) {
                payroll_component_1 = payroll_component_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            MonthModule = class MonthModule {
            };
            MonthModule = __decorate([
                core_1.NgModule({
                    imports: [
                        common_1.CommonModule, datatable_1.DataTableModule, shared_1.SharedModule, http_1.HttpModule
                    ],
                    declarations: [
                        month_component_1.MonthComponent,
                        income_budget_component_1.IncomeBudgetComponent,
                        investment_budget_component_1.InvestmentBudgetComponent,
                        necessary_expense_budget_component_1.NecessaryExpenseBudgetComponent,
                        discretionary_expense_budget_component_1.DiscretionaryExpenseBudgetComponent,
                        excess_expense_budget_component_1.ExcessExpenseBudgetComponent,
                        payroll_component_1.PayrollComponent
                    ]
                }), 
                __metadata('design:paramtypes', [])
            ], MonthModule);
            exports_1("MonthModule", MonthModule);
        }
    }
});
//# sourceMappingURL=month.module.js.map