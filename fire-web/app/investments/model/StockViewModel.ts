import {Stock} from "./Stock";

export class StockViewModel {

    public exchangeSymbol:string;
    public shareCount:number;
    public managementFee:number;
    public dividends:number;
    public sharePrice:number;
    public totalValue:number;

    constructor(stock:Stock) {
        this.exchangeSymbol = `${stock.exchange} : ${stock.symbol}`;
        this.shareCount = stock.shareCount;
        this.managementFee = stock.managementFee;
        this.dividends = stock.dividends;
    }
}