import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {MonthlyIncome} from "./income/MonthlyIncome";
import {MonthlyExpense} from "./expense/MonthlyExpense";

@Component({
    templateUrl: 'app/monthly-budgets/month.component.html',
    styleUrls: ['app/monthly-budgets/month.component.css']
})
export class MonthComponent {

    private monthId: number;
    private month: string;
    private monthList: Object;
    private totalIncome: number;
    private totalExpense: number;
    private savingsRate: string;

    constructor(private route: ActivatedRoute) {
        this.monthList = {
            "january": "01",
            "february": "02",
            "march": "03",
            "april": "04",
            "may": "05",
            "june": "06",
            "july": "07",
            "august": "08",
            "september": "09",
            "october": "10",
            "november": "11",
            "december": "12"
        }
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.month = params['id'];
            this.monthId = parseInt(this.monthList[this.month]);
        });
    }

    onIncomeChanged(monthlyIncome: MonthlyIncome) {
        //noinspection TypeScriptUnresolvedFunction
        let incomeSum = monthlyIncome.incomes.reduce(this.reduceMethod()).actual;
        //noinspection TypeScriptUnresolvedFunction
        let investmentsSum = monthlyIncome.investments.reduce(this.reduceMethod()).actual;
        this.totalIncome = incomeSum + investmentsSum;
        this.calculateSavingsRate();
    }

    onExpenseChanged(monthlyExpense: MonthlyExpense) {
        //noinspection TypeScriptUnresolvedFunction
        let necessariesSum = monthlyExpense.necessaries.reduce(this.reduceMethod()).actual;
        //noinspection TypeScriptUnresolvedFunction
        let excessesSum = monthlyExpense.excesses.reduce(this.reduceMethod()).actual;
        //noinspection TypeScriptUnresolvedFunction
        let discretionariesSum = monthlyExpense.discretionaries.reduce(this.reduceMethod()).actual;
        this.totalExpense = necessariesSum + excessesSum + discretionariesSum;
        this.calculateSavingsRate();
    }

    private calculateSavingsRate() {
        this.savingsRate = ((this.totalIncome - this.totalExpense) / this.totalIncome * 100).toFixed(1);
    }

    private reduceMethod() {
        return function (a, b) {
            let aValue = a.actual == undefined ? 0 : parseFloat(a.actual);
            let bValue = b.actual == undefined ? 0 : parseFloat(b.actual);
            return {actual: aValue + bValue}
        }
    }
}