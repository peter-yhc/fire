import {Component} from "@angular/core";

@Component({
    templateUrl: 'app/expenses/expenses.component.html',
    styleUrls: ['app/expenses/expenses.component.css']
})
export class ExpensesComponent {

    private rowData;
    private columnDefs;
    private gridOptions;

    constructor() {
        this.columnDefs = [
            {headerName: "Necessary Expenses", field: "necessaryExpenses"},
            {headerName: "Costs", field: "costs"},
            {headerName: "Budget", field: "budget"},
            {headerName: "Daily", field: "daily"},
            {headerName: "Monthly", field: "monthly"},
            {headerName: "Annualy", field: "annualy"},
            {headerName: "Savings", field: "savings"},
            {headerName: "FI", field: "fi"}
        ];

        this.rowData = [
            {necessaryExpenses: 'Mortgage / Rent', costs: 0, budget: 0, daily: 0, monthly: 0, annualy: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Home Insurance', costs: 0, budget: 0, daily: 0, monthly: 0, annualy: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Property Tax', costs: 0, budget: 0, daily: 0, monthly: 0, annualy: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Health Insurance ', costs: 0, budget: 0, daily: 0, monthly: 0, annualy: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Food & Groceries ', costs: 0, budget: 0, daily: 0, monthly: 0, annualy: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Electric', costs: 0, budget: 0, daily: 0, monthly: 0, annualy: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Propane / Natural Gas', costs: 0, budget: 0, daily: 0, monthly: 0, annualy: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Cable & Internet', costs: 0, budget: 0, daily: 0, monthly: 0, annualy: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Cell', costs: 0, budget: 0, daily: 0, monthly: 0, annualy: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Trash', costs: 0, budget: 0, daily: 0, monthly: 0, annualy: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Auto Insurance', costs: 0, budget: 0, daily: 0, monthly: 0, annualy: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Auto Maintenance', costs: 0, budget: 0, daily: 0, monthly: 0, annualy: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Auto Purchase', costs: 0, budget: 0, daily: 0, monthly: 0, annualy: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Auto Gas', costs: 0, budget: 0, daily: 0, monthly: 0, annualy: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Home Repairs', costs: 0, budget: 0, daily: 0, monthly: 0, annualy: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Pet', costs: 0, budget: 0, daily: 0, monthly: 0, annualy: 0, savings: 0, fi: 0},
            {necessaryExpenses: 'Misc', costs: 0, budget: 0, daily: 0, monthly: 0, annualy: 0, savings: 0, fi: 0},
        ];

        this.gridOptions = {
            columnDefs: this.columnDefs,
            rowData: this.rowData,
            enableColResize: true,
            onGridReady: () => {
                this.gridOptions.api.sizeColumnsToFit();
            }
        };
    }
}