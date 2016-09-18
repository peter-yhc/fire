import {Component, OnInit} from "@angular/core";

@Component({
    templateUrl: 'app/net-worth/net-worth.component.html'
})
export class NetWorthComponent implements OnInit {
    private rowData;
    private columnDefs;

    ngOnInit() {
        this.columnDefs = [
            {headerName: 'Month', field: 'month'},
            {headerName: 'Net Worth', field: 'netWorth'},
            {headerName: 'Liquid', field: 'liquid'},
            {headerName: 'Income', field: 'income'},
            {headerName: 'Expenses', field: 'expenses'},
            {headerName: 'Investment Acc 1', field: 'investmentAcc1'},
            {headerName: 'Investment Acc 2', field: 'investmentAcc2'},
            {headerName: 'Investment Acc 3', field: 'investmentAcc3'},
            {headerName: 'Savings 1', field: 'savings1'}
        ];

        this.rowData = [
            {month: "2016-01", netWorth: "20000", liquid: "10000", income: "1500", expenses: "500", investmentAcc1: "400", investmentAcc2: "600", investmentAcc3: "200", savings1: "500"},
            {month: "2016-02", netWorth: "20000", liquid: "10000", income: "1500", expenses: "500", investmentAcc1: "400", investmentAcc2: "600", investmentAcc3: "200", savings1: "500"},
            {month: "2016-03", netWorth: "20000", liquid: "10000", income: "1500", expenses: "500", investmentAcc1: "400", investmentAcc2: "600", investmentAcc3: "200", savings1: "500"},
        ];
    }
}