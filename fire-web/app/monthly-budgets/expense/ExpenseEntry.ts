export class Expense {

    public target:string;
    public budget:number;
    public actual:number;

    constructor(expenseData:any) {
        this.target = expenseData.target;
        this.budget = expenseData.budget;
        this.actual = expenseData.actual;
    }
}