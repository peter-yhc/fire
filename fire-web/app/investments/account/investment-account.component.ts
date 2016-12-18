import {Component, OnInit, Input} from "@angular/core";
import {StockAccount} from "../model/StockAccount";
import {InvestmentsService} from "../investments.service";

@Component({
    selector: "investment-account-component",
    templateUrl: "app/investments/account/investment-account.component.html"
})
export class InvestmentAccountComponent implements OnInit {
    @Input() stockAccount:StockAccount;

    private columnDefs;

    constructor(private investmentsService:InvestmentsService) {

    }

    ngOnInit():void {

        this.columnDefs = [
            {headerName: "Exchange", field: "exchange"},
            {headerName: "Symbol", field: "symbol"},
            {headerName: "Share Price", field: "sharePrice"},
            {headerName: "Shares", field: "shareCount"},
            {headerName: "Breakdown", field: "breakdown"},
            {headerName: "Fee", field: "managementFee"},
            {headerName: "Total Value", field: "totalValue"},
            {headerName: "Updated Date", field: "updatedDate"}
        ];

        this.investmentsService.getSharePrices(this.stockAccount).subscribe(data => {
            this.stockAccount.stocks.forEach(stock => {
                if (stock.symbol == data.symbol) {
                    stock.sharePrice = data.price;
                }
            })
        });
    }
}