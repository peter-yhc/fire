import {Component, Inject, OnInit} from '@angular/core';
import {DateGeneratorService} from '../../application/service/date-generator.service';
import moment = require('moment/moment');

@Component({
    selector: 'excess-monthly-component',
    templateUrl: 'app/expenses/expense-table.template.html',
    styleUrls: ['app/expenses/monthly/monthly.component.css']
})
export class ExcessMonthlyComponent implements OnInit {

    private rowData;
    private columnDefs;
    private dateGeneratorService;

    constructor(@Inject(DateGeneratorService) dateGeneratorService) {
        this.dateGeneratorService = dateGeneratorService;
    }

    ngOnInit(): void {
        this.columnDefs = [
            {headerName: 'Excess Expenses', field: 'excessExpenses'}
        ];
        let months = this.dateGeneratorService.getMonths();
        for (let index in months) {
            this.columnDefs.push({headerName: months[index], field: index});
        }

        this.rowData = [
            {excessExpenses: 'Gifts'},
            {excessExpenses: 'Anniversaries'},
            {excessExpenses: 'Holidays'},
            {excessExpenses: 'Travel'},
            {excessExpenses: 'Business expenses'}
        ];

    }
}
