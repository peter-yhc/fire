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
        let createBaseColumnDefs = () => {
            return [
                {headerName: 'Monthly Budgeted', field: 'budget'},
                {headerName: 'Monthly Actual', field: 'actual'},
                {headerName: 'Tax Withheld', field: 'taxWithheld'},
            ];
        };

        this.directIncomeColumnDefs = createBaseColumnDefs();
        this.directIncomeColumnDefs.unshift({headerName: 'Income', field: 'income'});

        this.investmentsColumnDefs = createBaseColumnDefs();
        this.investmentsColumnDefs.unshift({headerName: 'Investment', field: 'investment'});
        this.incomeService = incomeService;
    }

    ngOnChanges(changes:SimpleChanges):void {
        this.directIncomeRowData = [];
        this.investmentsRowData = [];

        this.incomeService.get(2015, this.monthId).subscribe(
            (monthlyIncome:MonthlyIncome) => {
                monthlyIncome.incomes.forEach(i => {
                    this.directIncomeRowData.push(mapIncomeData(i))
                });
                monthlyIncome.investments.forEach(i => {
                    this.investmentsRowData.push(mapInvestmentData(i))
                });
            }
        );

        var mapIncomeData = (income) => {
            return {
                income: income.source,
                budget: income.budget,
                actual: income.actual,
                taxWithheld: income.taxWithheld
            }
        };

        var mapInvestmentData = (investment) => {
            return {
                investment: investment.source,
                budget: investment.budget,
                actual: investment.actual,
                dividend: investment.dividend
            }
        };
    }
}