import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {MonthlyExpense} from "./MonthlyExpense";
import "rxjs/add/operator/map";

@Injectable()
export class ExpenseService {

    constructor(private http:Http) {
    }

    get(year:number, month:number):Observable<MonthlyExpense> {
        return this.http.get("/api/budgets/expenses?" + year + "-" + month).map(
            response => {
                return new MonthlyExpense(response.json())
            }
        )
    }
}