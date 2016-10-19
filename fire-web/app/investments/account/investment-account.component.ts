import {Component, OnInit, Input} from "@angular/core";

@Component({
    selector: "investment-account-component",
    templateUrl: "app/investments/account/investment-account.component.html"
})
export class InvestmentAccountComponent implements OnInit {
    @Input() account;

    private rowData;
    private columnDefs;

    ngOnInit():void {

        this.columnDefs = [
            {headerName: "Category", field: "category"},
            {headerName: "Symbol", field: "symbol"},
            {headerName: "Value/Share", field: "valueShare"},
            {headerName: "Shares", field: "share"},
            {headerName: "Amount", field: "amount"},
            {headerName: "Breakdown", field: "breakdown"},
            {headerName: "Total Value", field: "totalValue"},
            {headerName: "Updated Date", field: "updatedDate"},
            {headerName: "Fee", field: "fee"},
            {headerName: "Fee (in Dollars)", field: "feeDollars"}
        ];

        this.rowData = [];
    }
}