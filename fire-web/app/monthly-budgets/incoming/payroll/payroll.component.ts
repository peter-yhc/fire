import {Component, OnInit, Input} from "@angular/core";
import {PayrollService} from "./payroll.service";

@Component({
    selector: "payroll-component",
    templateUrl: "app/monthly-budgets/incoming/payroll/payroll.template.html",
    styleUrls: ["app/monthly-budgets/incoming/payroll/payroll.component.css"],
    providers: [
        PayrollService
    ]
})
export class PayrollComponent implements OnInit {
    @Input() monthId: number;

    private payrollData;
    private columnDefs;
    private payrollService;

    constructor(payrollService: PayrollService) {
        this.payrollService = payrollService;
    }

    logData():void {
        console.log(JSON.stringify(this.payrollData));
    }

    ngOnInit(): void {
        this.columnDefs = [
            {headerName: "Paycheck", field: "payPeriod"},
            {headerName: "Tax", field: "taxedAmount"},
            {headerName: "Net", field: "netPayment"},
            {headerName: "Retirement", field: "retirementPlan"},
            {headerName: "Total", field: "totalAmount"}
        ];

        this.payrollService.get(2016, this.monthId).subscribe(
            payrolls => this.payrollData = payrolls
        );
    }
}
