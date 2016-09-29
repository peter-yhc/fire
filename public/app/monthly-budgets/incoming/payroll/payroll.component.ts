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
            {headerName: "Pay Period 1", field: "1"},
            {headerName: "Pay Period 2", field: "2"},
            {headerName: "Pay Period 3", field: "3"},
            {headerName: "Pay Period 4", field: "4"}
        ];

        this.payrollData = [
            {rowHeader: "Total", "1": "250", "2": "250"},
            {rowHeader: "Tax", "1": "250", "2": "250"},
            {rowHeader: "Net", "1": "1532", "2": "1532"},
            {rowHeader: "Superannuation", "1": "150", "2": "150"}
        ];

        let payrollList = this.payrollService.get(2016, this.monthId);
        payrollList.forEach((payroll : Payroll, index) => {
            this.payrollData[0][index] = payroll.totalAmount;
            this.payrollData[1][index] = payroll.taxedAmount;
            this.payrollData[2][index] = payroll.netPayment;
            this.payrollData[3][index] = payroll.retirementPlan;
        });

        console.log(this.payrollService.get(2016, this.monthId))
    }
}
