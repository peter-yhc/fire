import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import {IncomeService} from "./income.service";
import {MonthlyIncome} from "./MonthlyIncome";

@Component({
    selector: 'income-budget-component',
    templateUrl: 'app/monthly-budgets/income/income.template.html',
    providers: [
        IncomeService
    ]
})
export class IncomeBudgetComponent implements OnChanges {
    @Input() monthId: number;

    private directIncomeColumnDefs;
    private investmentsColumnDefs;
    private directIncomeRowData;
    private investmentsRowData;
    private incomeService: IncomeService;

    constructor(incomeService:IncomeService) {
        this.directIncomeColumnDefs = [
            {headerName: 'Monthly Budgeted', field: 'budget'},
            {headerName: 'Monthly Actual', field: 'actual'},
            {headerName: 'Tax Withheld', field: 'taxWithheld'},
        ];
        this.directIncomeColumnDefs.unshift({headerName: 'Income', field: 'source'});

        this.investmentsColumnDefs = [
            {headerName: 'Monthly Budgeted', field: 'budget'},
            {headerName: 'Monthly Actual', field: 'actual'},
            {headerName: 'Dividends', field: 'dividend'},
        ];
        this.investmentsColumnDefs.unshift({headerName: 'Investment', field: 'source'});
        this.incomeService = incomeService;
    }

    ngOnChanges(changes:SimpleChanges):void {
        this.directIncomeRowData = [];
        this.investmentsRowData = [];

        this.incomeService.get(2015, this.monthId).subscribe(
            (monthlyIncome:MonthlyIncome) => {
                monthlyIncome.incomes.forEach(i => {
                    this.directIncomeRowData.push(i)
                });
                monthlyIncome.investments.forEach(i => {
                    this.investmentsRowData.push(i)
                });
            }
        );
    }

    saveIncomeChanges() {
        let data = {
            period: 2015 + "-" + this.monthId,
            incomes: this.directIncomeRowData,
            investments: this.investmentsRowData
        };
        this.incomeService.save(2015, this.monthId, new MonthlyIncome(data)).subscribe(
            data => console.log("Success: " + data),
            error => console.log("Error: " + error)
        );
    }
}