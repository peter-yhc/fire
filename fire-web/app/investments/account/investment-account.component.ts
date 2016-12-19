import {Component, OnInit, Input} from "@angular/core";
import {StockAccount} from "../model/StockAccount";
import {InvestmentsService} from "../investments.service";
import {Stock} from "../model/Stock";

@Component({
    selector: "investment-account-component",
    templateUrl: "app/investments/account/investment-account.component.html"
})
export class InvestmentAccountComponent implements OnInit {
    @Input() stockAccount:StockAccount;

    private columnDefs;
    private stocks:Stock[];

    constructor(private investmentsService:InvestmentsService) {
        this.stocks = [];
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
        this.updateStockViewModel();
    }

    private updateStockViewModel() {
        let totalAccountValue = 0;
        this.investmentsService.getSharePrices(this.stockAccount).subscribe(data => {
            this.stockAccount.stocks.forEach(stock => {
                if (stock.symbol == data.symbol) {
                    stock.sharePrice = parseFloat(data.price);
                    stock.totalValue = parseFloat((stock.sharePrice * stock.shareCount).toFixed(2));
                    totalAccountValue += stock.totalValue;
                    this.stocks.push(stock);
                }
            });
            this.updateBreakdown(totalAccountValue);
        });
    }

    private updateBreakdown(totalAccountValue) {
        this.stocks.forEach(stock => {
            stock.breakdown = (stock.totalValue / totalAccountValue).toFixed(3);
        })
    }
}