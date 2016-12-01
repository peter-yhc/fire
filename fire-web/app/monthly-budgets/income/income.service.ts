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
        return this.http.get("/api/budgets/incomes?" + year + "-" + month).map(
            response => {
                return new MonthlyIncome(response.json())
            }
        )
    }

    save(year:number, month:number, data:MonthlyIncome) {
        var body = JSON.stringify(data);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post("/api/budgets/incomes?" + year + "-" + month, body, {headers: headers})
            .map(response => response.json());
    }
}
