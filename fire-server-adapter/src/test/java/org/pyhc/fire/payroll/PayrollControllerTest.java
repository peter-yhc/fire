package org.pyhc.fire.payroll;

import org.apache.commons.lang3.RandomStringUtils;
import org.junit.Before;
import org.junit.Test;
import org.mockito.stubbing.Answer;
import org.pyhc.fire.ControllerTestBase;
import org.pyhc.fire.TestPayrollEntryBuilder;
import org.pyhc.fire.service.DatabaseIdentityObfuscatorPort;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.List;

import static java.util.Collections.singletonList;
import static org.hamcrest.CoreMatchers.*;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class PayrollControllerTest extends ControllerTestBase {

    @Autowired
    private WebApplicationContext wac;

    @Autowired
    private PayrollServicePort payrollServicePort;

    @Autowired
    private DatabaseIdentityObfuscatorPort databaseIdentityObfuscatorPort;

    private MockMvc mockMvc;

    @Before
    public void setupMockMvc() {
        mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
    }

    @Test
    public void canGetPayrollEntries() throws Exception {
        PayrollEntry payrollEntry = TestPayrollEntryBuilder.randomWithId();
        List<PayrollEntry> payrollEntries = singletonList(payrollEntry);
        when(payrollServicePort.findPayrolls()).thenReturn(payrollEntries);
        doAnswer(hideIdMethodMock()).when(databaseIdentityObfuscatorPort).hideId(payrollEntries);

        mockMvc.perform(get("/payrolls"))
            .andExpect(status().is(HttpStatus.OK.value()))
            .andExpect(jsonPath("$[0].id", not(nullValue())))
            .andExpect(jsonPath("$[0].id", not(payrollEntry.getId())))
            .andExpect(jsonPath("$[0].totalAmount", is(payrollEntry.getTotalAmount())))
            .andExpect(jsonPath("$[0].taxedAmount", is(payrollEntry.getTaxedAmount())))
            .andExpect(jsonPath("$[0].netPayment", is(payrollEntry.getNetPayment())))
            .andExpect(jsonPath("$[0].retirementPlan", is(payrollEntry.getRetirementPlan())))
            .andExpect(jsonPath("$[0].payPeriod", is(payrollEntry.getPayPeriod())))
            .andReturn();

        verify(payrollServicePort, times(1)).findPayrolls();
        verify(databaseIdentityObfuscatorPort, times(1)).hideId(payrollEntries);
    }

    @SuppressWarnings("unchecked")
    private Answer<List<PayrollEntry>> hideIdMethodMock() {
        return invocationOnMock -> {
            List<PayrollEntry> payrollEntryCall = (List<PayrollEntry>) invocationOnMock.getArguments()[0];
            payrollEntryCall.get(0).setId(RandomStringUtils.random(10));
            return payrollEntryCall;
        };
    }
}