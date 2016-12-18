import {Component, OnInit, Input} from "@angular/core";
import {StockAccount} from "../model/StockAccount";
import {InvestmentsService} from "../investments.service";
import {StockViewModel} from "../model/StockViewModel";

@Component({
    selector: "investment-account-component",
    templateUrl: "app/investments/account/investment-account.component.html"
})
export class InvestmentAccountComponent implements OnInit {
    @Input() stockAccount:StockAccount;

    private columnDefs;
    private stockViewModels:StockViewModel[];

    constructor(private investmentsService:InvestmentsService) {
        this.stockViewModels = [];
    }

    ngOnInit():void {

        this.columnDefs = [
            {headerName: "Symbol", field: "exchangeSymbol"},
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
        this.investmentsService.getSharePrices(this.stockAccount).subscribe(data => {
            this.stockAccount.stocks.forEach(stock => {
                if (stock.symbol == data.symbol) {
                    let stockViewModel = new StockViewModel(stock);
                    stockViewModel.sharePrice = data.price;
                    stockViewModel.totalValue = (stockViewModel.sharePrice * stockViewModel.shareCount).toFixed(2);
                    this.stockViewModels.push(stockViewModel);
                }
            })
        });
    }
}