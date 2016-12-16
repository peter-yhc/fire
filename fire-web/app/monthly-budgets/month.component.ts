import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {MonthlyIncome} from "./income/MonthlyIncome";
import {MonthlyExpense} from "./expense/MonthlyExpense";

@Component({
    templateUrl: 'app/monthly-budgets/month.component.html',
    styleUrls: ['app/monthly-budgets/month.component.css']
})
export class MonthComponent {

    private monthId:number;
    private month:string;
    private monthList:Object;

    constructor(private route:ActivatedRoute) {
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

    onIncomeChanged(monthlyIncome:MonthlyIncome) {
        let incomeSum = monthlyIncome.incomes.reduce(this.reduceMethod()).actual;
        let investmentsSum = monthlyIncome.investments.reduce(this.reduceMethod()).actual;
    }

    onExpenseChanged(monthlyExpense:MonthlyExpense) {
        let necessariesSum = monthlyExpense.necessaries.reduce(this.reduceMethod()).actual;
        let excessesSum = monthlyExpense.excesses.reduce(this.reduceMethod()).actual;
        let discretionariesSum = monthlyExpense.discretionaries.reduce(this.reduceMethod()).actual;
    }

    reduceMethod() {
        return function (a, b) {
            a.actual = a.actual == undefined ? 0 : parseInt(a.actual);
            b.actual = b.actual == undefined ? 0 : parseInt(b.actual);
            return {actual: a.actual + b.actual}
        }
    }
}