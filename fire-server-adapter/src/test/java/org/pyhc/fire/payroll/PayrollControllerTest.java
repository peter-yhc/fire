package org.pyhc.fire.payroll;

import com.google.gson.Gson;
import org.apache.commons.lang3.RandomStringUtils;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.mockito.stubbing.Answer;
import org.pyhc.fire.ControllerTestBase;
import org.pyhc.fire.TestPayrollEntryBuilder;
import org.pyhc.fire.service.DatabaseIdentityObfuscatorPort;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.List;

import static java.util.Collections.singletonList;
import static org.apache.commons.lang3.RandomStringUtils.randomAlphanumeric;
import static org.hamcrest.CoreMatchers.*;
import static org.mockito.Matchers.any;
import static org.mockito.Mockito.*;
import static org.pyhc.fire.TestPayrollEntryBuilder.randomPayrollWithId;
import static org.springframework.http.HttpHeaders.CONTENT_TYPE;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

public class PayrollControllerTest extends ControllerTestBase {

    @Autowired
    private WebApplicationContext wac;

    @Autowired
    private Gson gson;

    @Autowired
    private PayrollServicePort payrollServicePort;

    @Autowired
    private DatabaseIdentityObfuscatorPort databaseIdentityObfuscatorPort;

    private MockMvc mockMvc;

    @Before
    public void setupMockMvc() {
        mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
    }

    @After
    public void resetMocks() {
        reset(payrollServicePort);
        reset(databaseIdentityObfuscatorPort);
    }

    @Test
    public void canGetAllPayrollEntries() throws Exception {
        String originalId = randomAlphanumeric(10);
        PayrollEntry payrollEntry = randomPayrollWithId().withId(originalId).build();

        List<PayrollEntry> payrollEntries = singletonList(payrollEntry);
        when(payrollServicePort.findPayrolls()).thenReturn(payrollEntries);
        doAnswer(hideIdMethodMock()).when(databaseIdentityObfuscatorPort).hideId(payrollEntries);

        mockMvc.perform(get("/api/payrolls"))
            .andExpect(status().is(HttpStatus.OK.value()))
            .andExpect(header().string(CONTENT_TYPE, MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$[0].id", not(nullValue())))
            .andExpect(jsonPath("$[0].id", not(originalId)))
            .andExpect(jsonPath("$[0].totalAmount", is(payrollEntry.getTotalAmount())))
            .andExpect(jsonPath("$[0].taxedAmount", is(payrollEntry.getTaxedAmount())))
            .andExpect(jsonPath("$[0].netPayment", is(payrollEntry.getNetPayment())))
            .andExpect(jsonPath("$[0].retirementPlan", is(payrollEntry.getRetirementPlan())))
            .andExpect(jsonPath("$[0].payPeriod", is(payrollEntry.getPayPeriod())))
            .andReturn();

        verify(payrollServicePort, times(1)).findPayrolls();
        verify(databaseIdentityObfuscatorPort, times(1)).hideId(payrollEntries);
    }

    @Test
    public void canGetPayrollsWithParameters() throws Exception {
        PayrollEntry payrollEntry = randomPayrollWithId().build();

        List<PayrollEntry> payrollEntries = singletonList(payrollEntry);
        when(payrollServicePort.findPayrollsByPeriod("2015-06")).thenReturn(payrollEntries);

        mockMvc.perform(get("/api/payrolls?payPeriod=2015-06"))
            .andExpect(status().is(HttpStatus.OK.value()))
            .andExpect(header().string(CONTENT_TYPE, MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$[0].totalAmount", is(payrollEntry.getTotalAmount())))
            .andExpect(jsonPath("$[0].taxedAmount", is(payrollEntry.getTaxedAmount())))
            .andExpect(jsonPath("$[0].netPayment", is(payrollEntry.getNetPayment())))
            .andExpect(jsonPath("$[0].retirementPlan", is(payrollEntry.getRetirementPlan())))
            .andExpect(jsonPath("$[0].payPeriod", is(payrollEntry.getPayPeriod())));

        verify(payrollServicePort, times(1)).findPayrollsByPeriod("2015-06");
        verify(databaseIdentityObfuscatorPort, times(1)).hideId(payrollEntries);
    }

    @Test
    public void returns404IfGettingPayrollsWithParamsFails() throws Exception {
        PayrollEntry payrollEntry = randomPayrollWithId().build();

        List<PayrollEntry> payrollEntries = singletonList(payrollEntry);
        doThrow(PayrollNotFoundException.class).when(payrollServicePort).findPayrollsByPeriod("obviouslyfakeperiod");

        mockMvc.perform(get("/api/payrolls?payPeriod=obviouslyfakeperiod"))
            .andExpect(status().is(HttpStatus.NOT_FOUND.value()));

        verify(payrollServicePort, times(1)).findPayrollsByPeriod("obviouslyfakeperiod");
        verify(databaseIdentityObfuscatorPort, times(0)).hideId(payrollEntries);
    }

    @Test
    public void canAddPayrolls() throws Exception {
        PayrollEntry payrollEntry = randomPayrollWithId().build();
        when(payrollServicePort.addPayroll(payrollEntry)).thenReturn("aHR0cDovL3d3dy50aGVh");

        mockMvc.perform(post("/api/payrolls")
            .content(gson.toJson(payrollEntry))
            .contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(status().is(HttpStatus.ACCEPTED.value()))
            .andExpect(header().string(CONTENT_TYPE, MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id", is("aHR0cDovL3d3dy50aGVh")))
            .andReturn();

        verify(payrollServicePort, times(1)).addPayroll(payrollEntry);
    }

    @Test
    public void canUpdatePayroll() throws Exception {
        String id = RandomStringUtils.randomAlphabetic(5);

        PayrollEntry payrollEntry = randomPayrollWithId(id).build();
        when(payrollServicePort.updatePayroll(id, payrollEntry)).thenReturn(payrollEntry);

        mockMvc.perform(patch("/api/payrolls/" + id)
            .content(gson.toJson(payrollEntry))
            .contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(status().is(HttpStatus.OK.value()))
            .andExpect(header().string(CONTENT_TYPE, MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id", is(id)))
            .andExpect(jsonPath("$.totalAmount", is(payrollEntry.getTotalAmount())))
            .andExpect(jsonPath("$.taxedAmount", is(payrollEntry.getTaxedAmount())))
            .andExpect(jsonPath("$.netPayment", is(payrollEntry.getNetPayment())))
            .andExpect(jsonPath("$.retirementPlan", is(payrollEntry.getRetirementPlan())))
            .andExpect(jsonPath("$.payPeriod", is(payrollEntry.getPayPeriod())))
            .andReturn();

        verify(payrollServicePort, times(1)).updatePayroll(id, payrollEntry);
    }

    @Test
    public void return404_ifUpdatingNonexistingPayroll() throws Exception {
        doThrow(PayrollNotFoundException.class).when(payrollServicePort).updatePayroll(anyString(), any(PayrollEntry.class));

        mockMvc.perform(patch("/api/payrolls/" + randomAlphanumeric(10))
            .content(gson.toJson(TestPayrollEntryBuilder.randomPayroll()))
            .contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(status().is(HttpStatus.NOT_FOUND.value()));
    }

    @Test
    public void canDeletePayroll() throws Exception {
        String id = RandomStringUtils.randomAlphabetic(5);
        doNothing().when(payrollServicePort).delete(id);

        mockMvc.perform(delete("/api/payrolls/" + id))
            .andExpect(status().is(HttpStatus.OK.value()))
            .andReturn();

        verify(payrollServicePort, times(1)).delete(id);
    }

    @SuppressWarnings("unchecked")
    private Answer<List<PayrollEntry>> hideIdMethodMock() {
        return invocationOnMock -> {
            List<PayrollEntry> payrollEntryCall = (List<PayrollEntry>) invocationOnMock.getArguments()[0];
            payrollEntryCall.get(0).setId(randomAlphanumeric(10));
            return payrollEntryCall;
        };
    }
}