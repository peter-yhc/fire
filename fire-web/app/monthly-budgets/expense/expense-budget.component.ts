import {Component} from "@angular/core";
import {ExpenseService} from "./expense.service";
import {MonthlyExpense} from "./MonthlyExpense";

@Component({
    selector: 'expense-budget-component',
    templateUrl: 'app/monthly-budgets/expense/expense.template.html',
    providers: [
        ExpenseService
    ]
})
export class ExpenseBudgetComponent {

    private necessaryExpensesRowData;
    private necessaryExpensesColumnDefs;
    private discretionaryExpensesRowData;
    private discretionaryExpensesColumnDefs;
    private excessExpensesRowData;
    private excessExpensesColumnDefs;

    private _expenseService:ExpenseService;

    constructor(expenseService:ExpenseService) {
        this._expenseService = expenseService;

        this.necessaryExpensesColumnDefs = [
            {headerName: 'Necessary Expenses', field: 'target'},
            {headerName: 'Monthly Budgeted', field: 'budget'},
            {headerName: 'Monthly Actual', field: 'actual'},
        ];

        this.discretionaryExpensesColumnDefs = [
            {headerName: 'Discretionary Expenses', field: 'target'},
            {headerName: 'Monthly Budgeted', field: 'budget'},
            {headerName: 'Monthly Actual', field: 'actual'},
        ];

        this.excessExpensesColumnDefs = [
            {headerName: 'Excess Expenses', field: 'target'},
            {headerName: 'Monthly Budgeted', field: 'budget'},
            {headerName: 'Monthly Actual', field: 'actual'},
        ];

        this.necessaryExpensesRowData = [];
        this.discretionaryExpensesRowData = [];
        this.excessExpensesRowData = [];

        this._expenseService.get(2016, 12).subscribe(
            (monthlyExpense:MonthlyExpense) => {
                monthlyExpense.necessaries.forEach(i => {
                    this.necessaryExpensesRowData.push(mapExpenseData(i))
                });
                monthlyExpense.discretionaries.forEach(i => {
                    this.discretionaryExpensesRowData.push(mapExpenseData(i))
                });
                monthlyExpense.excesses.forEach(i => {
                    this.excessExpensesRowData.push(mapExpenseData(i))
                });
            }
        );

        var mapExpenseData = (expense) => {
            return {
                target: expense.target,
                budget: expense.budget,
                actual: expense.actual
            }
        }
    }

}