package org.pyhc.fire.payroll;

import org.junit.Test;
import org.pyhc.fire.ServiceTestBase;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.MatcherAssert.assertThat;

public class PayrollServiceTest extends ServiceTestBase {

    @Autowired
    private PayrollServicePort payrollServicePort;

    @Test
    public void canSaveAndRetrievePayrollEntries() throws Exception {
        PayrollEntry payrollEntry = TestPayrollEntryBuilder.random();
        payrollServicePort.addPayroll(payrollEntry);

        List<PayrollEntry> payrolls = payrollServicePort.findPayrolls();
        assertThat(payrolls.size(), is(1));

        PayrollEntry entryFromDB = payrolls.get(0);
        assertThat(entryFromDB.getId(), not(nullValue()));
        assertThat(entryFromDB.getTotalAmount(), is(payrollEntry.getTotalAmount()));
        assertThat(entryFromDB.getNetPayment(), is(payrollEntry.getNetPayment()));
        assertThat(entryFromDB.getPayPeriod(), is(payrollEntry.getPayPeriod()));
        assertThat(entryFromDB.getTaxedAmount(), is(payrollEntry.getTaxedAmount()));
        assertThat(entryFromDB.getRetirementPlan(), is(payrollEntry.getRetirementPlan()));
    }

    @Test
    public void canObfuscateId() throws Exception {
        payrollServicePort.addPayroll(TestPayrollEntryBuilder.random());

        PayrollEntry payrollEntry = payrollServicePort.findPayrolls().get(0);

    }
}