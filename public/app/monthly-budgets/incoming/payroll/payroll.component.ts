import {Component, OnInit, Input} from "@angular/core";
import {PayrollService} from "./payroll.service";
import {Payroll} from "./Payroll";

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

    ngOnInit(): void {
        this.columnDefs = [
            {headerName: "Paycheck", field: "rowHeader"},
            {headerName: "Pay Period 1", field: "0"},
            {headerName: "Pay Period 2", field: "1"},
            {headerName: "Pay Period 3", field: "2"},
            {headerName: "Pay Period 4", field: "3"}
        ];

        this.payrollData = [
            {rowHeader: "Total"},
            {rowHeader: "Tax"},
            {rowHeader: "Net"},
            {rowHeader: "Retirement"}
        ];

        this.payrollService.get(2016, this.monthId).subscribe(
            payrolls => (payrolls.forEach((payroll: Payroll, index) => {
                    this.payrollData[0][index] = payroll.totalAmount;
                    this.payrollData[1][index] = payroll.taxedAmount;
                    this.payrollData[2][index] = payroll.netPayment;
                    this.payrollData[3][index] = payroll.retirementPlan;
                })
            )
        );
    }
}
