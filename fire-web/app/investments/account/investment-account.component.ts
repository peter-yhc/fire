import {Component, OnInit, OnChanges, Input, Output, EventEmitter} from "@angular/core";
import {StockAccount} from "../model/StockAccount";
import {InvestmentsService} from "../investments.service";
import {Stock} from "../model/Stock";

@Component({
    selector: "investment-account-component",
    templateUrl: "app/investments/account/investment-account.component.html"
})
export class InvestmentAccountComponent implements OnInit, OnChanges {

    @Input() stockAccount: StockAccount;
    @Input() editModeToggle: boolean;
    @Output() investmentUpdatedEmitter: EventEmitter<StockAccount> = new EventEmitter<StockAccount>();

    private columnDefs;
    private backupShareCount;
    private tableRefreshToggle;

    constructor(private investmentsService: InvestmentsService) {
        this.backupShareCount = {};
        this.tableRefreshToggle = true;
        this.columnDefs = [
            {headerName: "Exchange", field: "exchange"},
            {headerName: "Symbol", field: "symbol"},
            {headerName: "Share Price", field: "sharePrice"},
            {headerName: "Shares", field: "shareCount"},
            {headerName: "Breakdown", field: "breakdown"},
            {headerName: "Fee", field: "managementFee"},
            {headerName: "Total Value", field: "totalValue"},
            {headerName: "Book Value", field: "bookValue"},
            {headerName: "Gain", field: "gain"},
            {headerName: "Updated Date", field: "updatedDate"}
        ];
    }

    ngOnInit(): void {
        this.updateStockViewModel();
    }

    ngOnChanges(changes) {
        if (changes.editModeToggle && changes.editModeToggle.currentValue === true) {
            this.tableRefreshToggle = false;
            if (this.columnDefs[this.columnDefs.length - 1].headerName !== "Delete") {
                this.columnDefs.push({headerName: "Delete", field: "delete"});
            }
        } else {
            if (this.columnDefs[this.columnDefs.length - 1].headerName === "Delete") {
                this.columnDefs.splice(this.columnDefs.length - 1, 1)
            }
        }
        setTimeout(() => this.tableRefreshToggle = true, 0)
    }

    addRow() {
        this.stockAccount.stocks.push(new Stock());
        this.investmentUpdatedEmitter.emit(this.stockAccount);
    }

    emitChanges() {
        this.updateStockViewModel();
        this.investmentUpdatedEmitter.emit(this.stockAccount);
    }

    deleteRow(row: Stock): void {
        let index = this.stockAccount.stocks.indexOf(row);
        this.stockAccount.stocks.splice(index, 1);
        this.investmentUpdatedEmitter.emit(this.stockAccount);
    }

    private updateStockViewModel() {
        let totalAccountValue = 0;
        this.investmentsService.getSharePrices(this.stockAccount).subscribe(data => {
            this.stockAccount.stocks.forEach((stock: Stock, idx) => {
                if (stock.shareCount.toString().match(/[^0-9]+/)) {
                    stock.shareCount = this.backupShareCount[stock.symbol];
                }

                if (stock.symbol == data.symbol) {
                    stock.sharePrice = parseFloat(data.price);
                    stock.totalValue = parseFloat((stock.sharePrice * stock.shareCount).toFixed(2));
                    stock.gain = parseFloat(((stock.totalValue - stock.bookValue) / stock.bookValue).toFixed(2));
                    totalAccountValue += stock.totalValue;
                    this.stockAccount.stocks[idx] = stock;
                    this.backupShareCount[stock.symbol] = stock.shareCount;
                }
            });
            this.updateBreakdown(totalAccountValue);
        });
    }

    private updateBreakdown(totalAccountValue) {
        this.stockAccount.stocks.forEach(stock => {
            stock.breakdown = parseFloat((stock.totalValue / totalAccountValue).toFixed(3));
        })
    }

    private updateStockAccountCash($event) {
        this.stockAccount.cash = $event.target.value.replace(',','').replace('$','');
        this.investmentUpdatedEmitter.emit(this.stockAccount);
    }
}