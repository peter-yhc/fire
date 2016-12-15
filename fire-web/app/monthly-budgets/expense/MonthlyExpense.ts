export module ExpenseEntry {
    export class Expense {

        public target:String;
        public budget:Number;
        public actual:Number;

        constructor(expenseData:any) {
            this.target = expenseData.target;
            this.budget = expenseData.budget;
            this.actual = expenseData.actual;
        }
    }
}

import Expense = ExpenseEntry.Expense;
export class MonthlyExpense {

    public period:string;
    public necessaries:Expense[];
    public discretionaries:Expense[];
    public excesses:Expense[];

    constructor(monthlyExpenseData?:any) {
        this.necessaries = [];
        this.discretionaries = [];
        this.excesses = [];
        if (monthlyExpenseData !== undefined) {
            this.period = monthlyExpenseData.period;
            monthlyExpenseData['necessaries'].forEach(necessaryData => this.necessaries.push(new Expense(necessaryData)));
            monthlyExpenseData['discretionaries'].forEach(discretionaryData => this.discretionaries.push(new Expense(discretionaryData)));
            monthlyExpenseData['excesses'].forEach(excessData => this.excesses.push(new Expense(excessData)));
        }
    }
}
