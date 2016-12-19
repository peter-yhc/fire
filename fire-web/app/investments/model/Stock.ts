export class Stock {

    public exchange:string;
    public symbol:string;
    public shareCount:number;
    public managementFee:number;
    public sharePrice:number;
    public breakdown:number;
    public totalValue:number;
    public updatedDate:Date;

    constructor(stockData:any) {
        this.exchange = stockData.exchange;
        this.symbol = stockData.symbol;
        this.shareCount = stockData.shareCount;
        this.managementFee = stockData.managementFee;
        this.sharePrice = stockData.sharePrice;
        this.breakdown = stockData.breakdown;
        this.totalValue = stockData.totalValue;
        this.updatedDate = stockData.updatedDate;
    }
}