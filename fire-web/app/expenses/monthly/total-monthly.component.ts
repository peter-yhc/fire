import {Component, Inject, OnInit} from '@angular/core';
import {DateGeneratorService} from '../../application/service/date-generator.service';
import moment = require('moment/moment');

@Component({
    selector: 'total-monthly-component',
    templateUrl: 'app/expenses/expense-table.template.html',
    styleUrls: ['app/expenses/monthly/monthly.component.css']
})
export class TotalMonthlyComponent implements OnInit {

    private rowData;
    private columnDefs;
    private dateGeneratorService;

    constructor(@Inject(DateGeneratorService) dateGeneratorService) {
        this.dateGeneratorService = dateGeneratorService;
    }

    ngOnInit(): void {
        this.columnDefs = [
            {headerName: 'Total Expenses', field: 'totalExpenses'}
        ];
        let months = this.dateGeneratorService.getMonths();
        for (let index in months) {
            this.columnDefs.push({headerName: months[index], field: index});
        }

        this.rowData = [
            {totalExpenses: 'Totals'},
            {totalExpenses: 'Income After Tax'},
            {totalExpenses: 'Savings'},
            {totalExpenses: 'Investment Income'},
            {totalExpenses: 'Expenses'}
        ];

    }
}
