import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {MonthlyExpense} from "./MonthlyExpense";
import "rxjs/add/operator/map";

@Injectable()
export class MonthlyExpenseService {

    constructor(private http:Http) {
    }

    get(year:number, month:number):Observable<MonthlyExpense> {
        return this.http.get("/api/budgets/expenses?" + year + "-" + month).map(
            response => {
                return new MonthlyExpense(response.json())
            }
        )
    }

    save(year:number, month:number, data:MonthlyExpense):Observable<any> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post("/api/budgets/expenses?period=" + year + "-" + month, JSON.stringify(data), {headers: headers});
    }
}