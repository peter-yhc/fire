package org.pyhc.fire.payroll;

import lombok.Getter;
import org.pyhc.fire.service.Obfuscatable;

import java.math.BigDecimal;
import java.util.Objects;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PayrollEntry that = (PayrollEntry) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(payPeriod, that.payPeriod) &&
                Objects.equals(totalAmount, that.totalAmount) &&
                Objects.equals(taxedAmount, that.taxedAmount) &&
                Objects.equals(netPayment, that.netPayment) &&
                Objects.equals(retirementPlan, that.retirementPlan);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, payPeriod, totalAmount, taxedAmount, netPayment, retirementPlan);
    }
}
