package org.pyhc.fire.payroll;

import java.math.BigDecimal;

public class PayrollEntryBuilder {
    private String payPeriod;
    private BigDecimal totalAmount;
    private BigDecimal taxedAmount;
    private BigDecimal netPayment;
    private BigDecimal retirementPlan;
    private String id;

    public PayrollEntryBuilder withPayPeriod(String payPeriod) {
        this.payPeriod = payPeriod;
        return this;
    }

    public PayrollEntryBuilder withTotalAmount(BigDecimal totalAmount) {
        this.totalAmount = totalAmount;
        return this;
    }

    public PayrollEntryBuilder withTaxedAmount(BigDecimal taxedAmount) {
        this.taxedAmount = taxedAmount;
        return this;
    }

    public PayrollEntryBuilder withNetPayment(BigDecimal netPayment) {
        this.netPayment = netPayment;
        return this;
    }

    public PayrollEntryBuilder withRetirementPlan(BigDecimal retirementPlan) {
        this.retirementPlan = retirementPlan;
        return this;
    }

    public PayrollEntryBuilder withId(String id) {
        this.id = id;
        return this;
    }

    public PayrollEntry build() {
        return new PayrollEntry(payPeriod, totalAmount, taxedAmount, netPayment, retirementPlan);
    }
}