import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {MonthlyIncome} from "./MonthlyIncome";
import {Observable} from "rxjs/Rx";

@Injectable()
export class IncomeService {


    constructor(private http:Http) {
    }

    get(year:number, month:number):Observable<MonthlyIncome> {
        return this.http.get("/api/payrolls?" + year + "-" + month).map(
            response => {
                return new MonthlyIncome(response.json())
            }
        )
    }
}
