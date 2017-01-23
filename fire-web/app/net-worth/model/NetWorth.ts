import {MonthlyReport} from "./MonthlyReport";
export class NetWorth {

    public profiles: MonthlyReport[];

    constructor(netWorthData?) {
        if (netWorthData) {
            netWorthData.forEach(profile => {
                this.profiles = [];
                this.profiles.push(new MonthlyReport(profile))
            })
        }
    }
}