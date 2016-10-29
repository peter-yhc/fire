package org.pyhc.fire.payroll;

import org.apache.commons.lang3.RandomStringUtils;

import java.math.BigDecimal;

public class TestPayrollEntryBuilder extends PayrollEntryBuilder {

    public static PayrollEntry random() {
        return new PayrollEntryBuilder()
                .withTotalAmount(new BigDecimal(Math.random()))
                .withNetPayment(new BigDecimal(Math.random()))
                .withRetirementPlan(new BigDecimal(Math.random()))
                .withTaxedAmount(new BigDecimal(Math.random()))
                .withPayPeriod(RandomStringUtils.random(10))
                .build();
    }

}
