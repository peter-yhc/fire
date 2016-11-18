package org.pyhc.fire.income.payroll;

import java.math.BigDecimal;

public class PayrollEntryBuilder {
    private String source;
    private BigDecimal totalAmount;
    private BigDecimal taxedAmount;
    private BigDecimal netPayment;
    private BigDecimal retirementPlan;

    public PayrollEntryBuilder withSource(String source) {
        this.source = source;
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

    public PayrollEntry build() {
        return new PayrollEntry(source, totalAmount, taxedAmount, netPayment, retirementPlan);
    }
}