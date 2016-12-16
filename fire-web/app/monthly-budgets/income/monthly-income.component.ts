import {Component, Input, OnChanges, OnInit, Output, EventEmitter} from "@angular/core";
import {MonthlyIncomeService} from "./monthly-income.service";
import {MonthlyIncome} from "./MonthlyIncome";
import {PersistenceEventEmitter} from "../../application/autosave/persistence-event-emitter.service";

@Component({
    selector: 'monthly-income-component',
    templateUrl: 'app/monthly-budgets/income/monthly-income-table.template.html',
    providers: [
        MonthlyIncomeService, PersistenceEventEmitter
    ]
})
export class MonthlyIncomeComponent implements OnChanges, OnInit, AutoSaveable {
    @Input() monthId:number;
    @Output() incomeUpdatedEmitter: EventEmitter<MonthlyIncome> = new EventEmitter<MonthlyIncome>();

    private directIncomeColumnDefs;
    private investmentsColumnDefs;
    private incomeService:MonthlyIncomeService;
    private persistenceEventEmitter:PersistenceEventEmitter;
    private entityChanged:boolean = false;
    private monthlyIncome:MonthlyIncome;

    constructor(incomeService:MonthlyIncomeService, persistenceEventEmitter:PersistenceEventEmitter) {
        this.directIncomeColumnDefs = [
            {headerName: 'Monthly Budgeted', field: 'budget'},
            {headerName: 'Monthly Actual', field: 'actual'},
            {headerName: 'Tax Withheld', field: 'taxWithheld'},
        ];
        this.investmentsColumnDefs = [
            {headerName: 'Monthly Budgeted', field: 'budget'},
            {headerName: 'Monthly Actual', field: 'actual'},
            {headerName: 'Dividends', field: 'dividend'},
        ];
        this.directIncomeColumnDefs.unshift({headerName: 'Income', field: 'source'});
        this.investmentsColumnDefs.unshift({headerName: 'Investment', field: 'source'});

        this.incomeService = incomeService;
        this.persistenceEventEmitter = persistenceEventEmitter;
        this.monthlyIncome = new MonthlyIncome();
    }

    ngOnInit():void {
        this.persistenceEventEmitter.getEmitter().subscribe(
            () => {
                if (this.entityChanged) {
                    this.saveIncomeChanges()
                }
            },
            error => console.log("Error" + error)
        )
    }

    ngOnChanges():void {
        this.incomeService.get(2015, this.monthId).subscribe(
            (monthlyIncome:MonthlyIncome) => {
                this.monthlyIncome = monthlyIncome;
                this.emitIncomeUpdated();
            }
        );
    }
    markEntityChanged():void {
        this.entityChanged = true;
    }

    private saveIncomeChanges() {
        this.incomeService.save(2015, this.monthId, this.monthlyIncome).subscribe(
            data => {
                console.log("Success: " + data);
                this.emitIncomeUpdated();
                this.entityChanged = false
            },
            error => console.log("Error: " + error)
        );
    }

    private emitIncomeUpdated() {
        this.incomeUpdatedEmitter.emit(this.monthlyIncome)
    }
}