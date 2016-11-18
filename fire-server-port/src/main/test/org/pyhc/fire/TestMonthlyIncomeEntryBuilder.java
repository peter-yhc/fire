package org.pyhc.fire;

import org.pyhc.fire.income.MonthlyIncomeEntryBuilder;

import java.util.Collections;

import static org.apache.commons.lang3.RandomStringUtils.randomAlphanumeric;

public class TestMonthlyIncomeEntryBuilder extends MonthlyIncomeEntryBuilder {

    private TestMonthlyIncomeEntryBuilder() {
        super();
    }

    public static MonthlyIncomeEntryBuilder randomMonthlyIncome() {
        return MonthlyIncomeEntryBuilder.newEntry()
            .withId(randomAlphanumeric(10))
            .withPayrolls(Collections.singletonList(TestPayrollEntryBuilder.randomPayroll().build()))
            .withPayPeriod(randomAlphanumeric(10));
    }

}
