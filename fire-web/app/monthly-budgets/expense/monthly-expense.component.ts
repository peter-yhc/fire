import {Component, Input, OnChanges, OnInit, Output, EventEmitter} from "@angular/core";
import {MonthlyExpenseService} from "./monthly-expense.service";
import {MonthlyExpense} from "./MonthlyExpense";
import {PersistenceEventEmitter} from "../../application/autosave/persistence-event-emitter.service";
import {AutoSaveable} from "../../application/autosave/AutoSaveable";

@Component({
    selector: 'monthly-expense-component',
    templateUrl: 'app/monthly-budgets/expense/monthly-expense-table.template.html',
    providers: [
        MonthlyExpenseService, PersistenceEventEmitter
    ]
})
export class MonthlyExpenseComponent implements OnChanges, OnInit, AutoSaveable {
    @Input() monthId:number;
    @Output() expenseUpdatedEmitter:EventEmitter<MonthlyExpense> = new EventEmitter<MonthlyExpense>();

    private necessaryExpensesColumnDefs;
    private discretionaryExpensesColumnDefs;
    private excessExpensesColumnDefs;
    private expenseService:MonthlyExpenseService;
    private monthlyExpense:MonthlyExpense;
    private entityChanged:boolean;

    constructor(expenseService:MonthlyExpenseService, private persistenceEventEmitter:PersistenceEventEmitter) {
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
                    this.saveChanges()
                }
            },
            error => console.log("Error" + error)
        )
    }

    ngOnChanges():void {
        this.expenseService.get(2016, this.monthId).subscribe(
            (monthlyExpense:MonthlyExpense) => {
                this.monthlyExpense = monthlyExpense;
                this.emitExpenseUpdated();
            }
        );
    }

    markEntityChanged():void {
        this.entityChanged = true;
    }

    private saveChanges(): void {
        this.expenseService.save(2015, this.monthId, this.monthlyExpense).subscribe(
            data => {
                console.log("Success: " + data);
                this.emitExpenseUpdated();
                this.entityChanged = false;
            },
            error => console.log("Error: " + error)
        );
    }

    private emitExpenseUpdated() {
        this.expenseUpdatedEmitter.emit(this.monthlyExpense)
    }
}