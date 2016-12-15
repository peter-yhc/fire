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
    private expenseService:MonthlyExpenseService;
    private persistenceEventEmitter: PersistenceEventEmitter;
    private entityChanged:boolean;
    private monthlyExpense:MonthlyExpense;

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
        this.monthlyExpense = new MonthlyExpense();
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
        this.expenseService.get(2016, this.monthId).subscribe(
            (monthlyExpense:MonthlyExpense) => {
                this.monthlyExpense = monthlyExpense;
            }
        );
    }

    markEntityChanged():void {
        this.entityChanged = true;
    }

    private saveExpenseChanges() {
        this.expenseService.save(2015, this.monthId, this.monthlyExpense).subscribe(
            data => {
                console.log("Success: " + data);
                this.entityChanged = false
            },
            error => console.log("Error: " + error)
        );
    }
}