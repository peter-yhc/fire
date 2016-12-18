export module StockEntry {
    export class Stock {
        public exchange: string;
        public symbol: string;
        public shareCount: number;
        public managementFee: number;
        public dividends: number;
        public sharePrice: number;

        constructor(stockData: any) {
            this.exchange = stockData.exchange;
            this.symbol = stockData.symbol;
            this.shareCount = stockData.shareCount;
            this.managementFee = stockData.managementFee;
            this.dividends = stockData.dividends;
        }
    }
}

import Stock = StockEntry.Stock;
export class StockAccount {

    public name: number;
    public cash: number;
    public stocks: Stock[];

    constructor(accountData: any) {
        this.name = accountData.name;
        this.cash = accountData.cash;
        this.stocks = [];
        accountData.stocks.forEach(stockData => this.stocks.push(new Stock(stockData)))
    }
}