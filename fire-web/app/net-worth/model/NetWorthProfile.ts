import {MonthlyReport} from "./MonthlyReport";
export class NetWorthProfile {

    public currency: string;
    public reports: MonthlyReport[];

    constructor(netWorthProfileData?:any) {
        if (netWorthProfileData) {
            this.currency = netWorthProfileData.currency;
            this.reports = [];
            netWorthProfileData.reports.forEach(monthlyReportData => {
                this.reports.push(new MonthlyReport(monthlyReportData));
            })
        }
    }
}