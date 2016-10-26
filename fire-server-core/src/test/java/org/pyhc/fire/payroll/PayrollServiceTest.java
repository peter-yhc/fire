package org.pyhc.fire.payroll;

import org.junit.Test;
import org.pyhc.fire.ServiceTestBase;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import static java.math.BigDecimal.valueOf;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class PayrollServiceTest extends ServiceTestBase {

    @Autowired
    private PayrollService payrollService;

    @Test
    public void canSaveAndRetrievePayrollEntries() throws Exception {
        PayrollEntry payrollEntry = new PayrollEntry("2016-01-10", valueOf(1000), valueOf(100), valueOf(1900), valueOf(80));
        payrollService.save(payrollEntry);

        List<PayrollEntry> payrolls = payrollService.findPayrolls();
        assertThat(payrolls.size(), is(1));

        PayrollEntry entryFromDB = payrolls.get(0);
        assertThat(payrollEntry.getTotalAmount(), is(entryFromDB.getTotalAmount()));
        assertThat(payrollEntry.getNetPayment(), is(entryFromDB.getNetPayment()));
        assertThat(payrollEntry.getPayPeriod(), is(entryFromDB.getPayPeriod()));
        assertThat(payrollEntry.getTaxedAmount(), is(entryFromDB.getTaxedAmount()));
        assertThat(payrollEntry.getRetirementPlan(), is(entryFromDB.getRetirementPlan()));
    }
}