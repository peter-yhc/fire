import {Component, Inject, OnInit} from '@angular/core';
import {DateGeneratorService} from '../../application/service/date-generator.service';
import moment = require('moment/moment');

@Component({
    selector: 'necessary-monthly-component',
    templateUrl: 'app/expenses/expense-table.template.html',
    styleUrls: ['app/expenses/monthly/monthly.component.css']
})
export class NecessaryMonthlyComponent implements OnInit {

    private rowData;
    private columnDefs;
    private dateGeneratorService;

    constructor(@Inject(DateGeneratorService) dateGeneratorService) {
        this.dateGeneratorService = dateGeneratorService;
    }

    ngOnInit(): void {
        this.columnDefs = [
            {headerName: 'Necessary Expenses', field: 'necessaryExpenses'}
        ];
        let months = this.dateGeneratorService.getMonths();
        for (let index in months) {
            this.columnDefs.push({headerName: months[index], field: index});
        }

        this.rowData = [
            {necessaryExpenses: 'Mortgage / Rent'},
            {necessaryExpenses: 'Home Insurance'},
            {necessaryExpenses: 'Property Tax'},
            {necessaryExpenses: 'Health Insurance'},
            {necessaryExpenses: 'Medical'},
            {necessaryExpenses: 'Food & Groceries'},
            {necessaryExpenses: 'Electric'},
            {necessaryExpenses: 'Natural Gas'},
            {necessaryExpenses: 'Cable & Internet'},
            {necessaryExpenses: 'Mobile Phones'},
            {necessaryExpenses: 'Public Transport'},
            {necessaryExpenses: 'Car Insurance'},
            {necessaryExpenses: 'Car Maintenance'},
            {necessaryExpenses: 'Petrol'},
            {necessaryExpenses: 'Home Repairs'},
            {necessaryExpenses: 'Pets'},
            {necessaryExpenses: 'Furniture'},
            {necessaryExpenses: 'Misc'}
        ];

    }
}
