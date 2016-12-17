import {Component, OnInit, Input} from "@angular/core";
import {StockAccount} from "../model/StockAccount";

@Component({
    selector: "investment-account-component",
    templateUrl: "app/investments/account/investment-account.component.html"
})
export class InvestmentAccountComponent implements OnInit {
    @Input() stockAccount:StockAccount;

    private rowData;
    private columnDefs;

    ngOnInit():void {

        this.columnDefs = [
            {headerName: "Category", field: "exchange"},
            {headerName: "Symbol", field: "symbol"},
            {headerName: "Share Price", field: "sharePrice"},
            {headerName: "Shares", field: "shareCount"},
            {headerName: "Breakdown", field: "breakdown"},
            {headerName: "Fee", field: "managementFee"},
            {headerName: "Total Value", field: "totalValue"},
            {headerName: "Updated Date", field: "updatedDate"}
        ];

        this.rowData = this.stockAccount.stocks;
    }
}