
import {Injectable} from "@angular/core";
import {Payroll} from "./Payroll";

@Injectable()
export class PayrollService {

    getForMonth() {
        return [
            new Payroll('{"payPeriod": "2016-09-01", "totalAmount": 2000, "taxedAmount": 300, "netPayment": 1700, "retirementPlan": 100}'),
            new Payroll('{"payPeriod": "2016-09-08", "totalAmount": 2000, "taxedAmount": 300, "netPayment": 1700, "retirementPlan": 100}'),
            new Payroll('{"payPeriod": "2016-09-15", "totalAmount": 2000, "taxedAmount": 300, "netPayment": 1700, "retirementPlan": 100}'),
            new Payroll('{"payPeriod": "2016-09-22", "totalAmount": 2000, "taxedAmount": 300, "netPayment": 1700, "retirementPlan": 100}')
        ]
    }
}
