import {Component, Input, OnChanges, SimpleChanges, OnInit} from "@angular/core";
import {MonthlyExpenseService} from "./monthly-expense.service";
import {MonthlyExpense} from "./MonthlyExpense";
import {PersistenceEventEmitter} from "../../application/autosave/persistence-event-emitter.service";

@Component({
    selector: 'monthly-expense-component',
    templateUrl: 'app/monthly-budgets/expense/monthly-expense-table.template.html',
    providers: [
        MonthlyExpenseService, PersistenceEventEmitter
    ]
})
export class MonthlyExpenseComponent implements OnChanges, OnInit, AutoSaveable {
    @Input() monthId: number;

    private necessaryExpensesColumnDefs;
    private discretionaryExpensesColumnDefs;
    private excessExpensesColumnDefs;
    private necessaryExpensesRowData;
    private discretionaryExpensesRowData;
    private excessExpensesRowData;
    private expenseService:MonthlyExpenseService;
    private persistenceEventEmitter: PersistenceEventEmitter;
    private entityChanged:boolean;

    constructor(expenseService:MonthlyExpenseService, persistenceEventEmitter: PersistenceEventEmitter) {
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
        this.persistenceEventEmitter = persistenceEventEmitter;
    }

    ngOnInit():void {
        this.persistenceEventEmitter.getEmitter().subscribe(
            () => {
                if (this.entityChanged) {
                    this.saveExpenseChanges()
                }
            },
            error => console.log("Error" + error)
        )
    }

    ngOnChanges():void {
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

    markEntityChanged():void {
        this.entityChanged = true;
    }

    private saveExpenseChanges() {
        let data = {
            period: 2015 + "-" + this.monthId,
            necessaries: this.necessaryExpensesRowData,
            discretionaries: this.discretionaryExpensesRowData,
            excesses: this.excessExpensesRowData
        };
        this.expenseService.save(2015, this.monthId, new MonthlyExpense(data)).subscribe(
            data => {
                console.log("Success: " + data);
                this.entityChanged = false
            },
            error => console.log("Error: " + error)
        );
    }
}