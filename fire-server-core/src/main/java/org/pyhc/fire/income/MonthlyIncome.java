package org.pyhc.fire.income;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;

import java.math.BigDecimal;
import java.util.List;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
public class MonthlyIncome {

    @Getter(AccessLevel.NONE)
    private String _id;

    private String payPeriod;

    private List<Payroll> payrolls;

    public String getId() {
        return this._id;
    }

    @Getter
    @EqualsAndHashCode
    public static class Payroll {

        private String source;
        private BigDecimal totalAmount;
        private BigDecimal taxedAmount;
        private BigDecimal netPayment;
        private BigDecimal retirementPlan;

        private Payroll() {
        }

        public Payroll(String source, BigDecimal totalAmount, BigDecimal taxedAmount, BigDecimal netPayment, BigDecimal retirementPlan) {
            this.source = source;
            this.totalAmount = totalAmount;
            this.taxedAmount = taxedAmount;
            this.netPayment = netPayment;
            this.retirementPlan = retirementPlan;
        }
    }
}
