export module IncomeEntry {
    export class Income {

        private _source:string;
        private _actual:number;
        private _budget:number;
        private _taxWithheld:number;

        constructor(incomeData:any) {
            this._source = incomeData.source;
            this._actual = incomeData.actual;
            this._budget = incomeData.budget;
            this._taxWithheld = incomeData.taxWithheld;
        }

        get source():string {
            return this._source;
        }

        get actual():number {
            return this._actual;
        }

        get budget():number {
            return this._budget;
        }

        get taxWithheld():number {
            return this._taxWithheld;
        }
    }
}

export module InvestmentEntry {
    export class Investment {
        constructor(investmentData:any) {
            this._source = investmentData.source;
            this._actual = investmentData.actual;
            this._budget = investmentData.budget;
            this._dividend = investmentData.dividend;
        }

        private _source:string;
        private _actual:number;
        private _budget:number;
        private _dividend:number;

        get source():string {
            return this._source;
        }

        get actual():number {
            return this._actual;
        }

        get budget():number {
            return this._budget;
        }

        get dividend():number {
            return this._dividend;
        }
    }
}

import Income = IncomeEntry.Income;
import Investment = InvestmentEntry.Investment;
export class MonthlyIncome {

    private _period:string;
    private _incomes:Income[];
    private _investments:Investment[];

    constructor(monthlyIncomeData:any) {
        this._period = monthlyIncomeData.period;
        this._incomes = [];
        this._investments = [];
        monthlyIncomeData['incomes'].forEach(incomeData => this._incomes.push(new Income(incomeData)));
        monthlyIncomeData['investments'].forEach(investmentData => this._investments.push(new Investment(investmentData)));
    }

    get period():string {
        return this._period;
    }

    get incomes():IncomeEntry.Income[] {
        return this._incomes;
    }

    get investments():InvestmentEntry.Investment[] {
        return this._investments;
    }
}
