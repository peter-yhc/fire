import {Component} from "@angular/core";

@Component({
    selector: 'discretionary-expense-budget-component',
    templateUrl: 'app/monthly-budgets/expense/expense.template.html'
})
export class DiscretionaryExpenseBudgetComponent {

    private rowData;
    private columnDefs;

    constructor() {
        this.columnDefs = [
            {headerName: 'Discretionary Expenses', field: 'discretionaryExpense'},
            {headerName: 'Monthly Budgeted', field: 'monthlyBudgeted'},
            {headerName: 'Monthly Actual', field: 'monthlyActual'},
        ];

        this.rowData = [
            {discretionaryExpense: 'Hobbies', monthlyBudgeted: '', monthlyActual: ''},
            {discretionaryExpense: 'Gifts', monthlyBudgeted: '', monthlyActual: ''},
            {discretionaryExpense: 'Eating', monthlyBudgeted: '', monthlyActual: ''},
            {discretionaryExpense: 'Entertainment', monthlyBudgeted: '', monthlyActual: ''},
            {discretionaryExpense: 'Electronics', monthlyBudgeted: '', monthlyActual: ''},
            {discretionaryExpense: 'Personal', monthlyBudgeted: '', monthlyActual: ''},
            {discretionaryExpense: 'Clothing', monthlyBudgeted: '', monthlyActual: ''},
            {discretionaryExpense: 'Misc', monthlyBudgeted: '', monthlyActual: ''}
        ];
    }
}