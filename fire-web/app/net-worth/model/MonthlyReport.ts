export class MonthlyReport {

    public month: string;
    public total: number;
    public savings: number;
    public invested: number;
    public homeEquity: number;

    constructor(reportData: any) {
        this.month = reportData.month;
        this.total = reportData.total;
        this.savings = reportData.savings;
        this.invested = reportData.invested;
        this.homeEquity = reportData.homeEquity;
    }
}