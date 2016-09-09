import {Component} from "@angular/core";

@Component({
    selector: 'discretionary-expenses-component',
    templateUrl: 'app/expenses/discretionary-expenses/discretionary-expenses.component.html'
})
export class DiscretionaryExpensesComponent {

    private rowData;
    private columnDefs;

    constructor() {
        this.columnDefs = [
            {headerName: 'Discretionary Expenses', field: 'discretionaryExpenses'},
            {headerName: 'Costs', field: 'costs'},
            {headerName: 'Budget', field: 'budget'},
            {headerName: 'Daily', field: 'daily'},
            {headerName: 'Monthly', field: 'monthly'},
            {headerName: 'Annually', field: 'annually'},
            {headerName: 'Savings', field: 'savings'},
            {headerName: 'FI', field: 'fi'}
        ];

        this.rowData = [
            {discretionaryExpenses: 'Hobbies', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0},
            {discretionaryExpenses: 'Gifts', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0},
            {discretionaryExpenses: 'Eating Out', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0},
            {discretionaryExpenses: 'Entertainment', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0},
            {discretionaryExpenses: 'Electronics', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0},
            {discretionaryExpenses: 'Personal', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0},
            {discretionaryExpenses: 'Clothing', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0},
            {discretionaryExpenses: 'Misc', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0}
        ];
    }
}