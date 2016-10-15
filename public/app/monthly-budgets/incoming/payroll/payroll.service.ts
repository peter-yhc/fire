import {Injectable} from "@angular/core";
import {Payroll} from "./Payroll";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {Observable} from "rxjs";

@Injectable()
export class PayrollService {

    constructor(private http: Http) {
    }

    get(year: number, month: number): Payroll[] {
        // return this.stub(year, month)

        const response = this.http.get("/api/payrolls")
            .map(response => console.log(response));

        response.subscribe(
            payrolls => console.log(payrolls),
            () => console.log("some error"),
            () => console.log("completed."));

        return this.stub(year, month);

    }

    private stub(year: number, month: number) {
        var paddedMonth = ('00' + month).substring((month + "").length);
        return [
            new Payroll('{"payPeriod": "' + year + '-' + paddedMonth + '-01", "totalAmount": 2000, "taxedAmount": 300, "netPayment": 1700, "retirementPlan": 100}'),
            new Payroll('{"payPeriod": "' + year + '-' + paddedMonth + '-08", "totalAmount": 2000, "taxedAmount": 300, "netPayment": 1700, "retirementPlan": 100}'),
            new Payroll('{"payPeriod": "' + year + '-' + paddedMonth + '-15", "totalAmount": 2000, "taxedAmount": 300, "netPayment": 1700, "retirementPlan": 100}'),
            new Payroll('{"payPeriod": "' + year + '-' + paddedMonth + '-22", "totalAmount": 2000, "taxedAmount": 300, "netPayment": 1700, "retirementPlan": 100}')
        ]
    }
}
