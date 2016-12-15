export module IncomeEntry {
    export class Income {

        public source:string;
        public actual:number;
        public budget:number;
        public taxWithheld:number;

        constructor(incomeData:any) {
            this.source = incomeData.source;
            this.actual = incomeData.actual;
            this.budget = incomeData.budget;
            this.taxWithheld = incomeData.taxWithheld;
        }
    }
}

export module InvestmentEntry {
    export class Investment {
        constructor(investmentData:any) {
            this.source = investmentData.source;
            this.actual = investmentData.actual;
            this.budget = investmentData.budget;
            this.dividend = investmentData.dividend;
        }

        public source:string;
        public actual:number;
        public budget:number;
        public dividend:number;
    }
}

import Income = IncomeEntry.Income;
import Investment = InvestmentEntry.Investment;
export class MonthlyIncome {

    public period:string;
    public incomes:Income[];
    public investments:Investment[];

    constructor(monthlyIncomeData?:any) {
        this.incomes = [];
        this.investments = [];
        if (monthlyIncomeData !== undefined) {
            this.period = monthlyIncomeData.period;
            monthlyIncomeData['incomes'].forEach(incomeData => this.incomes.push(new Income(incomeData)));
            monthlyIncomeData['investments'].forEach(investmentData => this.investments.push(new Investment(investmentData)));
        }
    }
}
