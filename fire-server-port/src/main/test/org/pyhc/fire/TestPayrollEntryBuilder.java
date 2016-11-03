package org.pyhc.fire;

import org.apache.commons.lang3.RandomStringUtils;
import org.pyhc.fire.payroll.PayrollEntry;
import org.pyhc.fire.payroll.PayrollEntryBuilder;

import java.math.BigDecimal;

public class TestPayrollEntryBuilder extends PayrollEntryBuilder {

    public static PayrollEntry randomWithId() {
        return randomWithId(RandomStringUtils.randomAlphabetic(10));
    }

    public static PayrollEntry randomWithId(String id) {
        return new PayrollEntryBuilder()
            .withId(id)
            .withTotalAmount(new BigDecimal(Math.random()))
            .withNetPayment(new BigDecimal(Math.random()))
            .withRetirementPlan(new BigDecimal(Math.random()))
            .withTaxedAmount(new BigDecimal(Math.random()))
            .withPayPeriod(RandomStringUtils.randomAlphanumeric(10))
            .build();
    }

    public static PayrollEntry random() {
        return new PayrollEntryBuilder()
            .withTotalAmount(new BigDecimal(Math.random()))
            .withNetPayment(new BigDecimal(Math.random()))
            .withRetirementPlan(new BigDecimal(Math.random()))
            .withTaxedAmount(new BigDecimal(Math.random()))
            .withPayPeriod(RandomStringUtils.randomAlphanumeric(10))
            .build();
    }

}
