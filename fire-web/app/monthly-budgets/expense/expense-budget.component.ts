import {Component} from "@angular/core";

@Component({
    selector: 'expense-budget-component',
    templateUrl: 'app/monthly-budgets/expense/expense.template.html'
})
export class ExpenseBudgetComponent {

    private necessaryExpensesRowData;
    private necessaryExpensesColumnDefs;
    private discretionaryExpensesRowData;
    private discretionaryExpensesColumnDefs;
    private excessExpensesRowData;
    private excessExpensesColumnDefs;

    constructor() {
        this.necessaryExpensesColumnDefs = [
            {headerName: 'Necessary Expenses', field: 'necessaryExpenses'},
            {headerName: 'Monthly Budgeted', field: 'monthlyBudgeted'},
            {headerName: 'Monthly Actual', field: 'monthlyActual'},
        ];

        this.necessaryExpensesRowData = [
            {necessaryExpenses: 'Mortgage / Rent', monthlyBudgeted: '', monthlyActual: ''},
            {necessaryExpenses: 'Home Insurance', monthlyBudgeted: '', monthlyActual: ''},
            {necessaryExpenses: 'Property Tax', monthlyBudgeted: '', monthlyActual: ''},
            {necessaryExpenses: 'Health Insurance', monthlyBudgeted: '', monthlyActual: ''},
            {necessaryExpenses: 'Medical', monthlyBudgeted: '', monthlyActual: ''},
            {necessaryExpenses: 'Food & Groceries', monthlyBudgeted: '', monthlyActual: ''},
            {necessaryExpenses: 'Electric', monthlyBudgeted: '', monthlyActual: ''},
            {necessaryExpenses: 'Natural Gas', monthlyBudgeted: '', monthlyActual: ''},
            {necessaryExpenses: 'Cable & Internet', monthlyBudgeted: '', monthlyActual: ''},
            {necessaryExpenses: 'Mobile Phones', monthlyBudgeted: '', monthlyActual: ''},
            {necessaryExpenses: 'Public Transport', monthlyBudgeted: '', monthlyActual: ''},
            {necessaryExpenses: 'Car Insurance', monthlyBudgeted: '', monthlyActual: ''},
            {necessaryExpenses: 'Car Maintenance', monthlyBudgeted: '', monthlyActual: ''},
            {necessaryExpenses: 'Petrol', monthlyBudgeted: '', monthlyActual: ''},
            {necessaryExpenses: 'Home Repairs', monthlyBudgeted: '', monthlyActual: ''},
            {necessaryExpenses: 'Pets', monthlyBudgeted: '', monthlyActual: ''},
            {necessaryExpenses: 'Furniture', monthlyBudgeted: '', monthlyActual: ''},
            {necessaryExpenses: 'Misc', monthlyBudgeted: '', monthlyActual: ''}
        ];

        this.discretionaryExpensesColumnDefs = [
            {headerName: 'Discretionary Expenses', field: 'discretionaryExpense'},
            {headerName: 'Monthly Budgeted', field: 'monthlyBudgeted'},
            {headerName: 'Monthly Actual', field: 'monthlyActual'},
        ];

        this.discretionaryExpensesRowData = [
            {discretionaryExpense: 'Hobbies', monthlyBudgeted: '', monthlyActual: ''},
            {discretionaryExpense: 'Gifts', monthlyBudgeted: '', monthlyActual: ''},
            {discretionaryExpense: 'Eating', monthlyBudgeted: '', monthlyActual: ''},
            {discretionaryExpense: 'Entertainment', monthlyBudgeted: '', monthlyActual: ''},
            {discretionaryExpense: 'Electronics', monthlyBudgeted: '', monthlyActual: ''},
            {discretionaryExpense: 'Personal', monthlyBudgeted: '', monthlyActual: ''},
            {discretionaryExpense: 'Clothing', monthlyBudgeted: '', monthlyActual: ''},
            {discretionaryExpense: 'Misc', monthlyBudgeted: '', monthlyActual: ''}
        ];

        this.excessExpensesColumnDefs = [
            {headerName: 'Excess Expenses', field: 'excessExpense'},
            {headerName: 'Monthly Budgeted', field: 'monthlyBudgeted'},
            {headerName: 'Monthly Actual', field: 'monthlyActual'},
        ];

        this.excessExpensesRowData = [
            {excessExpense: 'Gifts', monthlyBudgeted: '', monthlyActual: ''},
            {excessExpense: 'Anniversaries', monthlyBudgeted: '', monthlyActual: ''},
            {excessExpense: 'Holidays', monthlyBudgeted: '', monthlyActual: ''},
            {excessExpense: 'Travel', monthlyBudgeted: '', monthlyActual: ''},
            {excessExpense: 'Business Expenses', monthlyBudgeted: '', monthlyActual: ''}
        ];
    }
}