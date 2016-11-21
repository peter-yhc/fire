import {Component} from "@angular/core";

@Component({
    selector: 'excess-expense-budget-component',
    templateUrl: 'app/monthly-budgets/expense/expense.template.html'
})
export class ExcessExpenseBudgetComponent {

    private rowData;
    private columnDefs;

    constructor() {
        this.columnDefs = [
            {headerName: 'Excess Expenses', field: 'excessExpense'},
            {headerName: 'Monthly Budgeted', field: 'monthlyBudgeted'},
            {headerName: 'Monthly Actual', field: 'monthlyActual'},
        ];

        this.rowData = [
            {excessExpense: 'Gifts', monthlyBudgeted: '', monthlyActual: ''},
            {excessExpense: 'Anniversaries', monthlyBudgeted: '', monthlyActual: ''},
            {excessExpense: 'Holidays', monthlyBudgeted: '', monthlyActual: ''},
            {excessExpense: 'Travel', monthlyBudgeted: '', monthlyActual: ''},
            {excessExpense: 'Business Expenses', monthlyBudgeted: '', monthlyActual: ''}
        ];
    }
}