import {Stock} from "./Stock";
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