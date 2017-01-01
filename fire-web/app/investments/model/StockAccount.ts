import {Stock} from "./Stock";
export class StockAccount {

    public name: string;
    public cash: number;
    public stocks: Stock[];

    constructor(accountData?: any, name?: string) {
        this.stocks = [];
        if (accountData) {
            this.name = accountData.name;
            this.cash = accountData.cash;
            accountData.stocks.forEach(stockData => this.stocks.push(new Stock(stockData)))
        }
        if (name) {
            this.name = name;
        }
    }
}