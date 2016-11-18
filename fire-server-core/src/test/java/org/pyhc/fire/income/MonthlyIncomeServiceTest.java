package org.pyhc.fire.income;

import org.junit.Test;
import org.pyhc.fire.ServiceTestBase;
import org.pyhc.fire.TestMonthlyIncomeEntryBuilder;
import org.pyhc.fire.TestPayrollEntryBuilder;
import org.pyhc.fire.income.payroll.PayrollEntry;
import org.springframework.beans.factory.annotation.Autowired;

import static java.util.Collections.singletonList;
import static org.apache.commons.lang3.RandomStringUtils.randomAlphabetic;
import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.MatcherAssert.assertThat;

public class MonthlyIncomeServiceTest extends ServiceTestBase {

    @Autowired
    private MonthlyIncomePort monthlyIncomePort;

    @Autowired
    private MonthlyIncomeRepository monthlyIncomeRepository;

    @Test
    public void canSaveMonthlyIncome() throws Exception {
        MonthlyIncomeEntry monthlyIncomeEntry = TestMonthlyIncomeEntryBuilder.randomMonthlyIncome().withId(null).build();
        String id = monthlyIncomePort.addEntry(monthlyIncomeEntry);

        assertThat(id, notNullValue());
        assertThat(monthlyIncomeRepository.findOne(id), notNullValue());
    }

    @Test
    public void canRetrieveMonthlyIncome() throws Exception {
        String payPeriod = randomAlphabetic(10);
        PayrollEntry payrollEntry = TestPayrollEntryBuilder.randomPayroll().build();

        monthlyIncomePort.addEntry(TestMonthlyIncomeEntryBuilder.randomMonthlyIncome().withPayPeriod(payPeriod).withPayrolls(singletonList(payrollEntry)).build());

        MonthlyIncomeEntry monthlyIncomeEntry = monthlyIncomePort.findByPayPeriod(payPeriod);
        assertThat(monthlyIncomeEntry, notNullValue());
        assertThat(monthlyIncomeEntry.getPayPeriod(), is(payPeriod));
        assertThat(monthlyIncomeEntry.getPayrolls().get(0), is(payrollEntry));
    }

    @Test
    public void canUpdateMonthlyIncome() throws Exception {
        String id = monthlyIncomePort.addEntry(TestMonthlyIncomeEntryBuilder.randomMonthlyIncome().build());
        MonthlyIncome preUpdate = monthlyIncomeRepository.findOne(id);

        String update = monthlyIncomePort.update(id, TestMonthlyIncomeEntryBuilder.randomMonthlyIncome().build());
        MonthlyIncome postUpdate = monthlyIncomeRepository.findOne(id);

        assertThat(id, is(update));
        assertThat(preUpdate.getId(), is(postUpdate.getId()));
        assertThat(preUpdate.getPayPeriod(), not(postUpdate.getPayPeriod()));
        assertThat(preUpdate.getPayrolls(), not(postUpdate.getPayrolls()));
    }

    @Test(expected = MonthlyIncomeNotFoundException.class)
    public void updateThrowsExceptionIfNotFound() throws Exception {
        monthlyIncomePort.update("obviouslyfakeid", TestMonthlyIncomeEntryBuilder.randomMonthlyIncome().build());
    }

    @Test
    public void canDeleteMonthlyIncome() throws Exception {
        String id = monthlyIncomePort.addEntry(TestMonthlyIncomeEntryBuilder.randomMonthlyIncome().build());
        assertThat(monthlyIncomeRepository.findAll().size(), is(1));

        monthlyIncomePort.delete(id);
        assertThat(monthlyIncomeRepository.findAll().size(), is(0));
    }
}