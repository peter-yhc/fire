import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Payroll} from "./Payroll";
import "rxjs/add/operator/map";
import {Observable} from "rxjs";

@Injectable()
export class PayrollService {

    private payrolls: Payroll[];

    constructor(private http: Http) {
    }

    get(year: number, month: number): Observable<any> {
        return this.http.get("/api/payrolls").map(
            response => response.json()
        )
    }
}
