export class Stock {
    public exchange:string;
    public symbol:string;
    public shareCount:number;
    public managementFee:number;
    public dividends:number;

    constructor(stockData:any) {
        this.exchange = stockData.exchange;
        this.symbol = stockData.symbol;
        this.shareCount = stockData.shareCount;
        this.managementFee = stockData.managementFee;
        this.dividends = stockData.dividends;
    }
}