import {Component} from "@angular/core";

@Component({
    templateUrl: 'app/analyze/analyze.component.html',
    styleUrls: ['app/analyze/analyze.component.css']
})
export class ExpensesComponent {

    private showExpenseTotals: boolean = true;
    private showExpenseMonthly: boolean = false;

    shouldShowTotals = function() {
        return this.showExpenseTotals;
    };

    shouldShowMonthly = function() {
        return this.showExpenseMonthly;
    };

    activateTotalsTab = function() {
        this.showExpenseTotals = true;
        this.showExpenseMonthly = false;
    };

    activateMonthlyTab = function() {
        this.showExpenseTotals = false;
        this.showExpenseMonthly = true;
    };

}