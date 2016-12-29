export class Stock {

    public exchange:string;
    public symbol:string;
    public shareCount:number;
    public managementFee:number;
    public sharePrice:number;
    public breakdown:number;
    public totalValue:number;
    public bookValue:number;
    public updatedDate:Date;

    constructor(stockData?:any) {
        if (stockData) {
            this.exchange = stockData.exchange;
            this.symbol = stockData.symbol;
            this.shareCount = stockData.shareCount;
            this.managementFee = stockData.managementFee;
            this.sharePrice = stockData.sharePrice;
            this.breakdown = stockData.breakdown;
            this.totalValue = stockData.totalValue;
            this.bookValue = stockData.bookValue;
            this.updatedDate = stockData.updatedDate;
        }
    }
}