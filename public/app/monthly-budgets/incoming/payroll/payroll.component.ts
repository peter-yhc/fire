import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'payroll-component',
    templateUrl: 'app/monthly-budgets/incoming/budget.template.html',
    styleUrls: ['app/monthly-budgets/incoming/payroll/payroll.component.css']
})
export class PayrollComponent implements OnInit {

    private rowData;
    private columnDefs;

    ngOnInit():void {
        this.columnDefs = [
            {headerName: 'Paycheck', field: 'rowHeader'},
            {headerName: 'Pay Period 1', field: 'period1'},
            {headerName: 'Pay Period 2', field: 'period2'},
            {headerName: 'Pay Period 3', field: 'period3'},
            {headerName: 'Pay Period 4', field: 'period4'}
        ];

        this.rowData = [
            {rowHeader: 'Net Pay', period1: '1532', period2: '1532'},
            {rowHeader: 'Tax', period1: '250', period2: '250'},
            {rowHeader: 'Superannuation', period1: '150', period2: '150'}
        ];
    }
}