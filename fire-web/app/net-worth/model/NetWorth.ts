import {NetWorthProfile} from "./NetWorthProfile";
export class NetWorth {

    public profiles: NetWorthProfile[];

    constructor(netWorthData?) {
        if (netWorthData) {
            this.profiles = [];
            netWorthData.profiles.forEach(profile => {
                this.profiles.push(new NetWorthProfile(profile))
            })
        }
    }
}