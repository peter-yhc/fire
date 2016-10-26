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

    Payroll(String payPeriod, BigDecimal totalAmount, BigDecimal taxedAmount, BigDecimal netPayment, BigDecimal retirementPlan) {
        this.payPeriod = payPeriod;
        this.totalAmount = totalAmount;
        this.taxedAmount = taxedAmount;
        this.netPayment = netPayment;
        this.retirementPlan = retirementPlan;
    }
}
