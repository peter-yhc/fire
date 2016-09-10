import {Component} from "@angular/core";

@Component({
    selector: 'investment-budget-component',
    templateUrl: 'app/monthly-budgets/incoming/budget.template.html'
})
export class InvestmentBudgetComponent {
    private rowData;
    private columnDefs;

    constructor() {
        this.columnDefs = [
            {headerName: 'Investment', field: 'investment'},
            {headerName: 'Monthly Budgeted', field: 'monthlyBudgeted'},
            {headerName: 'Monthly Actual', field: 'monthlyActual'},
        ];

        this.rowData = [
            {investment: 'Superannuation', monthlyBudgeted: '', monthlyActual: ''},
            {investment: 'Other Investment 1', monthlyBudgeted: '', monthlyActual: ''},
            {investment: 'Other Investment 2', monthlyBudgeted: '', monthlyActual: ''},
            {investment: 'Other Investment 3', monthlyBudgeted: '', monthlyActual: ''},
            {investment: 'Other Investment 4', monthlyBudgeted: '', monthlyActual: ''},
            {investment: 'Total Investments', monthlyBudgeted: '', monthlyActual: ''},
        ];
    }
}