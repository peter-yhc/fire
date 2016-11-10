package org.pyhc.fire.payroll;

import org.junit.Test;
import org.pyhc.fire.ServiceTestBase;
import org.pyhc.fire.service.DatabaseIdentityObfuscatorPort;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import static org.apache.commons.lang3.RandomStringUtils.randomAlphanumeric;
import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.pyhc.fire.TestPayrollEntryBuilder.randomPayroll;
import static org.pyhc.fire.TestPayrollEntryBuilder.randomPayrollWithId;

public class PayrollServiceTest extends ServiceTestBase {

    @Autowired
    private PayrollServicePort payrollServicePort;

    @Autowired
    private DatabaseIdentityObfuscatorPort databaseIdentityObfuscatorPort;

    @Autowired
    private PayrollRepository payrollRepository;

    @Test
    public void canSaveAndRetrievePayrollEntries() throws Exception {
        PayrollEntry payrollEntry = randomPayrollWithId().build();
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
    public void canRetrievePayrollsByPeriod() throws Exception {
        PayrollEntry payrollEntry = randomPayroll().withPayPeriod("2015-05").build();
        payrollServicePort.addPayroll(payrollEntry);

        List<PayrollEntry> dbPayrolls = payrollServicePort.findPayrollsByPeriod("2015-05");
        assertThat(dbPayrolls, not(nullValue()));
        assertThat(dbPayrolls.size(), is(1));
        assertThat(dbPayrolls.get(0).getPayPeriod(), is("2015-05"));
    }

    @Test(expected = PayrollNotFoundException.class)
    public void throwsExceptionIfSearchByPeriodFindsNothing() throws Exception {
        PayrollEntry payrollEntry = randomPayroll().withPayPeriod("2015-05").build();
        payrollServicePort.addPayroll(payrollEntry);

        payrollServicePort.findPayrollsByPeriod("2015-06");
    }

    @Test
    public void canObfuscateId() throws Exception {
        payrollServicePort.addPayroll(randomPayrollWithId().build());

        PayrollEntry payrollEntry = payrollServicePort.findPayrolls().get(0);
        String originalId = payrollEntry.getId();

        databaseIdentityObfuscatorPort.hideId(payrollEntry);

        assertThat(payrollEntry.getId(), not(originalId));
    }

    @Test
    public void canUpdatePayroll() throws Exception {
        PayrollEntry payrollEntry = randomPayrollWithId().build();
        String payrollId = payrollServicePort.addPayroll(payrollEntry);

        PayrollEntry updateRequest = randomPayrollWithId().build();
        updateRequest.setId(payrollId);

        PayrollEntry updateResponse = payrollServicePort.updatePayroll(payrollId, updateRequest);
        assertThat(updateResponse.getId(), is(payrollId));
        assertThat(updateResponse.getNetPayment(), is(updateRequest.getNetPayment()));
        assertThat(updateResponse.getPayPeriod(), is(updateRequest.getPayPeriod()));
        assertThat(updateResponse.getRetirementPlan(), is(updateRequest.getRetirementPlan()));
        assertThat(updateResponse.getTaxedAmount(), is(updateRequest.getTaxedAmount()));
        assertThat(updateResponse.getTotalAmount(), is(updateRequest.getTotalAmount()));
    }

    @Test(expected = PayrollNotFoundException.class)
    public void throwsException_IfUpdatingPayrollThatDoesNotExist() throws Exception {
        payrollServicePort.updatePayroll(randomAlphanumeric(10), randomPayrollWithId().build());
    }

    @Test
    public void canDeletePayroll() throws Exception {
        PayrollEntry payrollEntry = randomPayrollWithId().build();
        String payrollId = payrollServicePort.addPayroll(payrollEntry);

        payrollServicePort.delete(payrollId);
        assertThat(payrollRepository.findAll().size(), is(0));
    }

}