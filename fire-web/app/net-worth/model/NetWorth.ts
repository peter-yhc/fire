import {MonthlyProfile} from "./MonthlyProfile";
export class NetWorth {

    public profiles: MonthlyProfile[];

    constructor(netWorthData?) {
        if (netWorthData) {
            netWorthData.forEach(profile => {
                this.profiles = [];
                this.profiles.push(new MonthlyProfile(profile))
            })
        }
    }
}