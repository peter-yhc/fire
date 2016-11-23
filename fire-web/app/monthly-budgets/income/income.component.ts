import {Component} from "@angular/core";
import {IncomeService} from "./income.service";
import {MonthlyIncome} from "./MonthlyIncome";

@Component({
    selector: 'income-budget-component',
    templateUrl: 'app/monthly-budgets/income/income.template.html',
    providers: [
        IncomeService
    ]
})
export class IncomeBudgetComponent {

    private directIncomeRowData;
    private directIncomeColumnDefs;
    private investmentsRowData;
    private investmentsColumnDefs;

    constructor(incomeService:IncomeService) {
        this.directIncomeColumnDefs = [
            {headerName: 'Income', field: 'income'},
            {headerName: 'Monthly Budgeted', field: 'monthlyBudgeted'},
            {headerName: 'Monthly Actual', field: 'monthlyActual'},
            {headerName: 'Tax Withheld', field: 'taxWithheld'},
        ];

        this.investmentsColumnDefs = [
            {headerName: 'Investment', field: 'investment'},
            {headerName: 'Monthly Budgeted', field: 'monthlyBudgeted'},
            {headerName: 'Monthly Actual', field: 'monthlyActual'},
            {headerName: 'Dividends', field: 'dividend'},
        ];

        this.directIncomeRowData = [];
        this.investmentsRowData = [];

        incomeService.get(2015, 12).subscribe(
            (monthlyIncome: MonthlyIncome) => {
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
                monthlyBudgeted: income.budget,
                monthlyActual: income.actual,
                taxWithheld: income.taxWithheld
            }
        };

        var mapInvestmentData = (investment) => {
            return {
                investment: investment.source,
                monthlyBudgeted: investment.budget,
                monthlyActual: investment.actual,
                dividend: investment.dividend
            }
        }
    }
}