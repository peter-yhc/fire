export module ExpenseEntry {
    export class Expense {

        private _target: String;
        private _budget: Number;
        private _actual: Number;

        constructor(expenseData:any) {
            this._target = expenseData.target;
            this._budget = expenseData.budget;
            this._actual = expenseData.actual;
        }

        get target():String {
            return this._target;
        }

        get budget():Number {
            return this._budget;
        }

        get actual():Number {
            return this._actual;
        }
    }
}

import Expense = ExpenseEntry.Expense;
export class MonthlyExpense {

    private _period:string;
    private _necessaries:Expense[];
    private _discretionaries:Expense[];
    private _excesses:Expense[];

    constructor(monthlyExpenseData:any) {
        this._period = monthlyExpenseData.period;
        this._necessaries = [];
        this._discretionaries = [];
        this._excesses = [];
        monthlyExpenseData  ['necessaries'].forEach(necessaryData => this._necessaries.push(new Expense(necessaryData)));
        monthlyExpenseData['discretionaries'].forEach(discretionaryData => this._discretionaries.push(new Expense(discretionaryData)));
        monthlyExpenseData['excesses'].forEach(excessData => this._excesses.push(new Expense(excessData)));
    }

    get period():string {
        return this._period;
    }

    get necessaries():ExpenseEntry.Expense[] {
        return this._necessaries;
    }

    get discretionaries():ExpenseEntry.Expense[] {
        return this._discretionaries;
    }

    get excesses():ExpenseEntry.Expense[] {
        return this._excesses;
    }
}
