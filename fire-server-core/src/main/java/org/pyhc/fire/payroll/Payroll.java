package org.pyhc.fire.payroll;

import lombok.AccessLevel;
import lombok.Getter;

import java.math.BigDecimal;

@Getter
public class Payroll {

    @Getter(AccessLevel.NONE)
    private String _id;
    private String payPeriod;
    private BigDecimal totalAmount;
    private BigDecimal taxedAmount;
    private BigDecimal netPayment;
    private BigDecimal retirementPlan;

    private Payroll() {
    }

    Payroll(String id, String payPeriod, BigDecimal totalAmount, BigDecimal taxedAmount, BigDecimal netPayment, BigDecimal retirementPlan) {
        this._id = id;
        this.payPeriod = payPeriod;
        this.totalAmount = totalAmount;
        this.taxedAmount = taxedAmount;
        this.netPayment = netPayment;
        this.retirementPlan = retirementPlan;
    }

    public String getId() {
        return _id;
    }
}
