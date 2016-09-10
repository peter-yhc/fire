import {Component} from '@angular/core';

@Component({
    selector: 'necessary-total-component',
    templateUrl: 'app/expenses/expense-table.template.html',
    styleUrls: ['app/expenses/total/total.component.css']
})
export class NecessaryTotalComponent {

    private rowData;
    private columnDefs;

    constructor() {
        this.columnDefs = [
            {headerName: 'Necessary Expenses', field: 'necessaryExpenses'},
            {headerName: 'Costs', field: 'costs'},
            {headerName: 'Budget', field: 'budget'},
            {headerName: 'Daily', field: 'daily'},
            {headerName: 'Monthly', field: 'monthly'},
            {headerName: 'Annually', field: 'annually'},
            {headerName: 'Savings', field: 'savings'},
            {headerName: 'FI', field: 'fi'}
        ];

        this.rowData = [
            {necessaryExpenses: 'Mortgage / Rent', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Home Insurance', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Property Tax', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Health Insurance', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Medical', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Food & Groceries', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Electric', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Natural Gas', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Cable & Internet', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Mobile Phones', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Public Transport', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Car Insurance', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Car Maintenance', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Petrol', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Home Repairs', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Pets', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Furniture', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Misc', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0}
        ];
    }
}