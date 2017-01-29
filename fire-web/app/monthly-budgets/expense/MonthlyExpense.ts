import {Expense} from "./ExpenseEntry";
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
