import {Http, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {MonthlyIncome} from "./MonthlyIncome";
import {Observable} from "rxjs/Rx";

@Injectable()
export class IncomeService {

    constructor(private http:Http) {
    }

    get(year:number, month:number):Observable<MonthlyIncome> {
        return this.http.get("/api/budgets/incomes?period=" + year + "-" + month.toFixed(2)).map(
            response => {
                return new MonthlyIncome(response.json())
            }
        )
    }

    save(year:number, month:number, data:MonthlyIncome):Observable<any> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post("/api/budgets/incomes?period=" + year + "-" + month, data.toJsonString(), {headers: headers});
    }
}
