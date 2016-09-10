import {Component} from "@angular/core";

@Component({
    selector: 'income-budget-component',
    templateUrl: 'app/monthly-budgets/incoming/budget.template.html'
})
export class IncomeBudgetComponent {
    private rowData;
    private columnDefs;

    constructor() {
        this.columnDefs = [
            {headerName: 'Income', field: 'income'},
            {headerName: 'Monthly Budgeted', field: 'monthlyBudgeted'},
            {headerName: 'Monthly Actual', field: 'monthlyActual'},
        ];

        this.rowData = [
            {income: 'Payroll 1', monthlyBudgeted: '', monthlyActual: ''},
            {income: 'Payroll 2', monthlyBudgeted: '', monthlyActual: ''},
            {income: 'Other Income 1', monthlyBudgeted: '', monthlyActual: ''},
            {income: 'Other Income 2', monthlyBudgeted: '', monthlyActual: ''},
            {income: 'Other Income 3', monthlyBudgeted: '', monthlyActual: ''},
            {income: 'Other Income 4', monthlyBudgeted: '', monthlyActual: ''},
            {income: 'Total Income', monthlyBudgeted: '', monthlyActual: ''},
        ];
    }
}