package org.pyhc.fire.payroll;

import org.junit.Test;
import org.pyhc.fire.ServiceTestBase;
import org.pyhc.fire.TestPayrollEntryBuilder;
import org.pyhc.fire.service.DatabaseIdentityObfuscatorPort;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.MatcherAssert.assertThat;

public class PayrollServiceTest extends ServiceTestBase {

    @Autowired
    private PayrollServicePort payrollServicePort;

    @Autowired
    private DatabaseIdentityObfuscatorPort databaseIdentityObfuscatorPort;

    @Test
    public void canSaveAndRetrievePayrollEntries() throws Exception {
        PayrollEntry payrollEntry = TestPayrollEntryBuilder.randomWithId();
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
        payrollServicePort.addPayroll(TestPayrollEntryBuilder.randomWithId());

        PayrollEntry payrollEntry = payrollServicePort.findPayrolls().get(0);
        String originalId = payrollEntry.getId();

        databaseIdentityObfuscatorPort.hideId(payrollEntry);

        assertThat(payrollEntry.getId(), not(originalId));
    }

    @Test
    public void canUpdatePayroll() throws Exception {
        PayrollEntry payrollEntry = TestPayrollEntryBuilder.randomWithId();
        String payrollId = payrollServicePort.addPayroll(payrollEntry);

        PayrollEntry updateRequest = TestPayrollEntryBuilder.randomWithId();
        updateRequest.setId(payrollId);

        PayrollEntry updateResponse = payrollServicePort.updatePayroll(updateRequest);
        assertThat(updateResponse.getId(), is(payrollId));
        assertThat(updateResponse.getNetPayment(), is(updateRequest.getNetPayment()));
        assertThat(updateResponse.getPayPeriod(), is(updateRequest.getPayPeriod()));
        assertThat(updateResponse.getRetirementPlan(), is(updateRequest.getRetirementPlan()));
        assertThat(updateResponse.getTaxedAmount(), is(updateRequest.getTaxedAmount()));
        assertThat(updateResponse.getTotalAmount(), is(updateRequest.getTotalAmount()));
    }

}