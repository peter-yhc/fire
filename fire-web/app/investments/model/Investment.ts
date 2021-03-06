import {StockAccount} from "./StockAccount";
export class Investment {

    public accounts:StockAccount[];

    constructor(investmentData?:any) {
        this.accounts = [];
        if (investmentData !== undefined) {
            investmentData.accounts.forEach(accountData => this.accounts.push(new StockAccount(accountData)))
        }
    }
}