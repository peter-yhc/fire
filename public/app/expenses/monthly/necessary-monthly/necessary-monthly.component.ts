import {Component, Inject, OnInit} from "@angular/core";
import {DateGeneratorService} from "../../../service/date-generator.service";
import moment = require("moment/moment");

@Component({
    selector: 'necessary-monthly-component',
    templateUrl: 'app/expenses/monthly/necessary-monthly/necessary-monthly.component.html'
})
export class NecessaryMonthlyComponent implements OnInit {

    private rowData;
    private columnDefs;
    private dateGeneratorService;

    constructor(@Inject(DateGeneratorService) dateGeneratorService) {
        this.dateGeneratorService = dateGeneratorService;
    }

    ngOnInit():void {
        this.columnDefs = [
            {headerName: 'Necessary Expenses', field: 'necessaryExpenses'}
        ];
        let months = this.dateGeneratorService.getMonths();
        for (let index in months) {
            this.columnDefs.push({headerName: months[index], field: index});
        }

        this.rowData = [
            {necessaryExpenses: 'Totals',},
            {necessaryExpenses: 'Income After Tax',},
            {necessaryExpenses: 'Savings',},
            {necessaryExpenses: 'Investment Income',},
            {necessaryExpenses: 'Expenses',},
        ];

    }
}