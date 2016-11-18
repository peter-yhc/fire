package org.pyhc.fire.income.payroll;

import lombok.EqualsAndHashCode;
import lombok.Getter;

import java.math.BigDecimal;

@Getter
@EqualsAndHashCode
public class PayrollEntry {

    private String source;
    private BigDecimal totalAmount;
    private BigDecimal taxedAmount;
    private BigDecimal netPayment;
    private BigDecimal retirementPlan;

    public PayrollEntry() {}

    public PayrollEntry(String source,
                        BigDecimal totalAmount,
                        BigDecimal taxedAmount,
                        BigDecimal netPayment,
                        BigDecimal retirementPlan) {
        this.source = source;
        this.totalAmount = totalAmount;
        this.taxedAmount = taxedAmount;
        this.netPayment = netPayment;
        this.retirementPlan = retirementPlan;
    }

}
