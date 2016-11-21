import {Component} from "@angular/core";

@Component({
    selector: 'income-budget-component',
    templateUrl: 'app/monthly-budgets/income/income.template.html'
})
export class IncomeBudgetComponent {

    private directIncomeRowData;
    private directIncomeColumnDefs;
    private investmentsRowData;
    private investmentsColumnDefs;

    constructor() {
        this.directIncomeColumnDefs = [
            {headerName: 'Income', field: 'income'},
            {headerName: 'Monthly Budgeted', field: 'monthlyBudgeted'},
            {headerName: 'Monthly Actual', field: 'monthlyActual'},
            {headerName: 'Tax Withheld', field: 'taxWithheld'},
        ];

        this.directIncomeRowData = [
            {income: 'Payroll 1', monthlyBudgeted: '1500', monthlyActual: '1480', taxWithheld: '200'},
            {income: 'Payroll 2', monthlyBudgeted: '1500', monthlyActual: '1520', taxWithheld: '210'},
            {income: 'Gift Money', monthlyBudgeted: '0', monthlyActual: '200', taxWithheld: '0'},
            {income: 'Side Hustle', monthlyBudgeted: '150', monthlyActual: '200', taxWithheld: '6'},
            // {income: 'Other Income 3', monthlyBudgeted: '', monthlyActual: '', taxWithheld: ''},
            // {income: 'Other Income 4', monthlyBudgeted: '', monthlyActual: '', taxWithheld: ''},
            // {income: 'Total Income', monthlyBudgeted: '', monthlyActual: '', taxWithheld: ''},
        ];

        this.investmentsColumnDefs = [
            {headerName: 'Investment', field: 'investment'},
            {headerName: 'Monthly Budgeted', field: 'monthlyBudgeted'},
            {headerName: 'Monthly Actual', field: 'monthlyActual'},
        ];

        this.investmentsRowData = [
            {investment: 'Superannuation', monthlyBudgeted: '', monthlyActual: ''},
            {investment: 'Other Investment 1', monthlyBudgeted: '', monthlyActual: ''},
            {investment: 'Other Investment 2', monthlyBudgeted: '', monthlyActual: ''},
            {investment: 'Other Investment 3', monthlyBudgeted: '', monthlyActual: ''},
            {investment: 'Other Investment 4', monthlyBudgeted: '', monthlyActual: ''},
            {investment: 'Total Investments', monthlyBudgeted: '', monthlyActual: ''},
        ];
    }
}