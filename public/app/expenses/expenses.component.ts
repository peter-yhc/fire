import {Component} from "@angular/core";

@Component({
    templateUrl: 'app/expenses/expenses.component.html',
    styleUrls: ['app/expenses/expenses.component.css']
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