export class Payroll {
    private payPeriod: string;
    private totalAmount: number;
    private taxedAmount: number;
    private netPayment: number;
    private retirementPlan: number;

    constructor(payrollInfo: any) {
        payrollInfo = JSON.parse(payrollInfo);
        this.payPeriod = payrollInfo.payPeriod;
        this.totalAmount = payrollInfo.totalAmount;
        this.taxedAmount = payrollInfo.taxedAmount;
        this.netPayment = payrollInfo.netPayment;
        this.retirementPlan = payrollInfo.retirementPlan;
    }

}
