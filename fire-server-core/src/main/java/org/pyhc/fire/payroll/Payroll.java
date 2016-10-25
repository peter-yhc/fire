package org.pyhc.fire.payroll;

import lombok.Getter;

import java.math.BigDecimal;

@Getter
public class Payroll {

    private String payPeriod;
    private BigDecimal totalAmount;
    private BigDecimal taxedAmount;
    private BigDecimal netPayment;
    private BigDecimal retirementPlan;

    private Payroll() {
    }

    private Payroll(PayrollEntry payrollEntry) {
        this.payPeriod = payrollEntry.getPayPeriod();
        this.totalAmount = payrollEntry.getTotalAmount();
        this.taxedAmount = payrollEntry.getTaxedAmount();
        this.netPayment = payrollEntry.getNetPayment();
        this.retirementPlan = payrollEntry.getRetirementPlan();
    }

    public static Payroll fromEntry(PayrollEntry payrollEntry) {
        return new Payroll(payrollEntry);
    }
}
