import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import {MonthlyExpenseService} from "./monthly-expense.service";
import {MonthlyExpense} from "./MonthlyExpense";

@Component({
    selector: 'monthly-expense-component',
    templateUrl: 'app/monthly-budgets/expense/monthly-expense.template.html',
    providers: [
        MonthlyExpenseService
    ]
})
export class MonthlyExpenseComponent implements OnChanges {
    @Input() monthId: number;

    private necessaryExpensesColumnDefs;
    private discretionaryExpensesColumnDefs;
    private excessExpensesColumnDefs;
    private necessaryExpensesRowData;
    private discretionaryExpensesRowData;
    private excessExpensesRowData;
    private expenseService:MonthlyExpenseService;

    constructor(expenseService:MonthlyExpenseService) {
        let createBaseColumnDefs = () => {
            return [
                {headerName: 'Monthly Budgeted', field: 'budget'},
                {headerName: 'Monthly Actual', field: 'actual'},
            ]
        };

        this.necessaryExpensesColumnDefs = createBaseColumnDefs();
        this.necessaryExpensesColumnDefs.unshift({headerName: 'Necessary Expenses', field: 'target'});

        this.discretionaryExpensesColumnDefs = createBaseColumnDefs();
        this.discretionaryExpensesColumnDefs.unshift({headerName: 'Discretionary Expenses', field: 'target'});

        this.excessExpensesColumnDefs = createBaseColumnDefs();
        this.excessExpensesColumnDefs.unshift({headerName: 'Excess Expenses', field: 'target'});

        this.expenseService = expenseService;
    }

    ngOnChanges(changes:SimpleChanges):void {
        this.necessaryExpensesRowData = [];
        this.discretionaryExpensesRowData = [];
        this.excessExpensesRowData = [];

        this.expenseService.get(2016, this.monthId).subscribe(
            (monthlyExpense:MonthlyExpense) => {
                monthlyExpense.necessaries.forEach(i => {
                    this.necessaryExpensesRowData.push(mapExpenseData(i))
                });
                monthlyExpense.discretionaries.forEach(i => {
                    this.discretionaryExpensesRowData.push(mapExpenseData(i))
                });
                monthlyExpense.excesses.forEach(i => {
                    this.excessExpensesRowData.push(mapExpenseData(i))
                });
            }
        );

        let mapExpenseData = (expense) => {
            return {
                target: expense.target,
                budget: expense.budget,
                actual: expense.actual
            }
        }
    }
}