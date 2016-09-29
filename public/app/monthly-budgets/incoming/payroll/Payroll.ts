export class Payroll {
    private _payPeriod: string;
    private _totalAmount: number;
    private _taxedAmount: number;
    private _netPayment: number;
    private _retirementPlan: number;

    constructor(payrollInfo: any) {
        payrollInfo = JSON.parse(payrollInfo);
        this._payPeriod = payrollInfo.payPeriod;
        this._totalAmount = payrollInfo.totalAmount;
        this._taxedAmount = payrollInfo.taxedAmount;
        this._netPayment = payrollInfo.netPayment;
        this._retirementPlan = payrollInfo.retirementPlan;
    }

    get payPeriod(): string {
        return this._payPeriod;
    }

    get totalAmount(): number {
        return this._totalAmount;
    }

    get taxedAmount(): number {
        return this._taxedAmount;
    }

    get netPayment(): number {
        return this._netPayment;
    }

    get retirementPlan(): number {
        return this._retirementPlan;
    }
}
