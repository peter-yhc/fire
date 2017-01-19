export class Stock {

    public exchange:string;
    public symbol:string;
    public shareCount:number;
    public managementFee:number;
    public sharePrice:number;
    public breakdown:number;
    public marketValue:number;
    public bookValue:number;
    public gain:number;
    public updatedDate:Date;

    constructor(stockData?:any) {
        if (stockData) {
            this.exchange = stockData.exchange;
            this.symbol = stockData.symbol;
            this.shareCount = stockData.shareCount;
            this.managementFee = stockData.managementFee;
            this.sharePrice = stockData.sharePrice;
            this.breakdown = stockData.breakdown;
            this.marketValue = stockData.marketValue;
            this.bookValue = stockData.bookValue;
            this.gain = stockData.gain;
            this.updatedDate = stockData.updatedDate;
        }
    }
}