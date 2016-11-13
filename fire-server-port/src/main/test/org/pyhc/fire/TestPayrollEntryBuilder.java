package org.pyhc.fire;

import org.pyhc.fire.payroll.PayrollEntryBuilder;

import java.math.BigDecimal;

import static org.apache.commons.lang3.RandomStringUtils.randomAlphanumeric;

public class TestPayrollEntryBuilder extends PayrollEntryBuilder {

    public static PayrollEntryBuilder randomPayrollWithId() {
        return randomPayrollWithId(randomAlphanumeric(10));
    }

    public static PayrollEntryBuilder randomPayrollWithId(String id) {
        return new PayrollEntryBuilder()
            .withId(id)
            .withTotalAmount(new BigDecimal(Math.random()))
            .withNetPayment(new BigDecimal(Math.random()))
            .withRetirementPlan(new BigDecimal(Math.random()))
            .withTaxedAmount(new BigDecimal(Math.random()))
            .withPayPeriod(randomAlphanumeric(10));
    }

    public static PayrollEntryBuilder randomPayroll() {
        return new PayrollEntryBuilder()
            .withTotalAmount(new BigDecimal(Math.random()))
            .withNetPayment(new BigDecimal(Math.random()))
            .withRetirementPlan(new BigDecimal(Math.random()))
            .withTaxedAmount(new BigDecimal(Math.random()))
            .withPayPeriod(randomAlphanumeric(10));
    }

}
