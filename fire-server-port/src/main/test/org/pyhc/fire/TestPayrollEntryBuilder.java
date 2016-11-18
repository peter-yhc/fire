package org.pyhc.fire;

import org.pyhc.fire.income.payroll.PayrollEntryBuilder;

import java.math.BigDecimal;

import static org.apache.commons.lang3.RandomStringUtils.randomAlphanumeric;

public class TestPayrollEntryBuilder extends PayrollEntryBuilder {

    public static PayrollEntryBuilder randomPayroll() {
        return new PayrollEntryBuilder()
            .withTotalAmount(new BigDecimal(Math.random()))
            .withNetPayment(new BigDecimal(Math.random()))
            .withRetirementPlan(new BigDecimal(Math.random()))
            .withTaxedAmount(new BigDecimal(Math.random()))
            .withSource(randomAlphanumeric(10));
    }

}
