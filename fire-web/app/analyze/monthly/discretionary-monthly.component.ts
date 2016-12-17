import {Component, Inject, OnInit} from "@angular/core";
import {DateGeneratorService} from "../../application/service/date-generator.service";
import moment = require("moment/moment");

@Component({
    selector: 'discretionary-monthly-component',
    templateUrl: 'app/analyze/analyze-table.template.html',
    styleUrls: ['app/analyze/monthly/monthly.component.css']
})
export class DiscretionaryMonthlyComponent implements OnInit {

    private rowData;
    private columnDefs;
    private dateGeneratorService;

    constructor(@Inject(DateGeneratorService) dateGeneratorService) {
        this.dateGeneratorService = dateGeneratorService;
    }

    ngOnInit(): void {
        this.columnDefs = [
            {headerName: 'Discretionary Expenses', field: 'discretionaryExpenses'}
        ];
        let months = this.dateGeneratorService.getMonths();
        for (let index in months) {
            this.columnDefs.push({headerName: months[index], field: index});
        }

        this.rowData = [
            {discretionaryExpenses: 'Hobbies'},
            {discretionaryExpenses: 'Gifts'},
            {discretionaryExpenses: 'Eating Out'},
            {discretionaryExpenses: 'Entertainment'},
            {discretionaryExpenses: 'Electronics'},
            {discretionaryExpenses: 'Personal'},
            {discretionaryExpenses: 'Clothing'},
            {discretionaryExpenses: 'Misc'}
        ];

    }
}
