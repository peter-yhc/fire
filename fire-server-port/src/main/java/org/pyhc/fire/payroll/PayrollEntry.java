package org.pyhc.fire.payroll;

import lombok.Getter;
import org.pyhc.fire.service.Obfuscatable;

import java.math.BigDecimal;

@Getter
public class PayrollEntry implements Obfuscatable {

    private String id;
    private String payPeriod;
    private BigDecimal totalAmount;
    private BigDecimal taxedAmount;
    private BigDecimal netPayment;
    private BigDecimal retirementPlan;

    public PayrollEntry() {}

    public PayrollEntry(String id,
                        String payPeriod,
                        BigDecimal totalAmount,
                        BigDecimal taxedAmount,
                        BigDecimal netPayment,
                        BigDecimal retirementPlan) {
        this.id = id;
        this.payPeriod = payPeriod;
        this.totalAmount = totalAmount;
        this.taxedAmount = taxedAmount;
        this.netPayment = netPayment;
        this.retirementPlan = retirementPlan;
    }

    @Override
    public void setId(String obfuscatedId) {
        this.id = obfuscatedId;
    }
}
