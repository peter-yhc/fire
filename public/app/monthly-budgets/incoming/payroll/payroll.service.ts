import {Injectable} from "@angular/core";
import {Payroll} from "./Payroll";

@Injectable()
export class PayrollService {

    get(year: number, month: number): Payroll[] {
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
