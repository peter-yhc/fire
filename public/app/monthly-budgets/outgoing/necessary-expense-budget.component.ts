import {Component} from "@angular/core";

@Component({
    selector: 'necessary-expense-budget-component',
    templateUrl: 'app/monthly-budgets/outgoing/expense.template.html'
})
export class NecessaryExpenseBudgetComponent {

    private rowData;
    private columnDefs;

    constructor() {
        this.columnDefs = [
            {headerName: 'Necessary Expenses', field: 'necessaryExpenses'},
            {headerName: 'Monthly Budgeted', field: 'monthlyBudgeted'},
            {headerName: 'Monthly Actual', field: 'monthlyActual'},
        ];

        this.rowData = [
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
    }
}