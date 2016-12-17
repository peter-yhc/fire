import {Component} from "@angular/core";

@Component({
    selector: 'excess-total-component',
    templateUrl: 'app/analyze/analyze-table.template.html',
    styleUrls: ['app/analyze/total/total.component.css']
})
export class ExcessTotalComponent {

    private rowData;
    private columnDefs;

    constructor() {
        this.columnDefs = [
            {headerName: "Excess Expenses", field: "excessExpenses"},
            {headerName: "Costs", field: "costs"},
            {headerName: "Budget", field: "budget"},
            {headerName: "Daily", field: "daily"},
            {headerName: "Monthly", field: "monthly"},
            {headerName: "Annually", field: "annually"},
            {headerName: "Savings", field: "savings"},
            {headerName: "FI", field: "fi"}
        ];

        this.rowData = [
            {excessExpenses: 'Gifts', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0},
            {excessExpenses: 'Anniversaries', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0},
            {excessExpenses: 'Holidays', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0},
            {excessExpenses: 'Travel', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0},
            {excessExpenses: 'Business expenses', costs: 0, budget: 0, daily: 0, monthly: 0, annually: 0, savings: 0, fi: 0},
        ];
    }
}