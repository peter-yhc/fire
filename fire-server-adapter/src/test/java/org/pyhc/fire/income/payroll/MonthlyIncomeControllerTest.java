package org.pyhc.fire.income.payroll;

import com.google.gson.Gson;
import org.apache.commons.lang3.RandomStringUtils;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.mockito.stubbing.Answer;
import org.pyhc.fire.ControllerTestBase;
import org.pyhc.fire.TestMonthlyIncomeEntryBuilder;
import org.pyhc.fire.income.MonthlyIncomeEntry;
import org.pyhc.fire.income.MonthlyIncomeNotFoundException;
import org.pyhc.fire.income.MonthlyIncomePort;
import org.pyhc.fire.service.DatabaseIdentityObfuscatorPort;
import org.pyhc.fire.service.Obfuscatable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.apache.commons.lang3.RandomStringUtils.randomAlphanumeric;
import static org.hamcrest.CoreMatchers.*;
import static org.mockito.Mockito.any;
import static org.mockito.Mockito.*;
import static org.springframework.http.HttpHeaders.CONTENT_TYPE;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

public class MonthlyIncomeControllerTest extends ControllerTestBase {

    @Autowired
    private WebApplicationContext wac;

    @Autowired
    private Gson gson;

    @Autowired
    private MonthlyIncomePort monthlyIncomePort;

    @Autowired
    private DatabaseIdentityObfuscatorPort databaseIdentityObfuscatorPort;

    private MockMvc mockMvc;

    @Before
    public void setupMockMvc() {
        mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
    }

    @After
    public void resetMocks() {
        reset(monthlyIncomePort);
        reset(databaseIdentityObfuscatorPort);
    }

    @Test
    public void canGetMonthlyIncomeForPeriod() throws Exception {
        MonthlyIncomeEntry monthlyIncomeEntry = TestMonthlyIncomeEntryBuilder.randomMonthlyIncome().withPayPeriod("2015-02").build();
        String originalId = monthlyIncomeEntry.getId();

        when(monthlyIncomePort.findByPayPeriod("2015-02")).thenReturn(monthlyIncomeEntry);
        doAnswer(hideIdMethodMock()).when(databaseIdentityObfuscatorPort).hideId(monthlyIncomeEntry);

        PayrollEntry payrollEntry = monthlyIncomeEntry.getPayrolls().get(0);

        mockMvc.perform(get("/api/income?year=2015&month=02"))
            .andExpect(status().is(HttpStatus.OK.value()))
            .andExpect(header().string(CONTENT_TYPE, MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id", not(nullValue())))
            .andExpect(jsonPath("$.id", not(originalId)))
            .andExpect(jsonPath("$.payPeriod", is("2015-02")))
            .andExpect(jsonPath("$.payrolls[0].source", is(payrollEntry.getSource())))
            .andExpect(jsonPath("$.payrolls[0].totalAmount", is(payrollEntry.getTotalAmount())))
            .andExpect(jsonPath("$.payrolls[0].taxedAmount", is(payrollEntry.getTaxedAmount())))
            .andExpect(jsonPath("$.payrolls[0].netPayment", is(payrollEntry.getNetPayment())))
            .andExpect(jsonPath("$.payrolls[0].retirementPlan", is(payrollEntry.getRetirementPlan())))
            .andReturn();

        verify(monthlyIncomePort, times(1)).findByPayPeriod("2015-02");
        verify(databaseIdentityObfuscatorPort, times(1)).hideId(monthlyIncomeEntry);
    }

    @Test
    public void yearAndMonthParamsAreRequired() throws Exception {
        mockMvc.perform(get("/api/income?year=2015")).andExpect(status().is(HttpStatus.BAD_REQUEST.value()));

        mockMvc.perform(get("/api/income?month=02")).andExpect(status().is(HttpStatus.BAD_REQUEST.value()));

        mockMvc.perform(get("/api/income")).andExpect(status().is(HttpStatus.BAD_REQUEST.value()));
    }

    @Test
    public void returns404IfGettingPayrollsWithParamsFails() throws Exception {
        doThrow(MonthlyIncomeNotFoundException.class).when(monthlyIncomePort).findByPayPeriod("1111-99");

        mockMvc.perform(get("/api/income?year=1111&month=99")).andExpect(status().is(HttpStatus.NOT_FOUND.value()));

        verify(monthlyIncomePort, times(1)).findByPayPeriod(any());
        verify(databaseIdentityObfuscatorPort, times(0)).hideId(any());
    }


    @Test
    public void canAddMonthlyIncome() throws Exception {
        MonthlyIncomeEntry monthlyIncomeEntry = TestMonthlyIncomeEntryBuilder.randomMonthlyIncome().withId(null).build();
        when(monthlyIncomePort.addEntry(monthlyIncomeEntry)).thenReturn("aHR0cDovL3d3dy50aGVh");

        mockMvc.perform(post("/api/income")
            .content(gson.toJson(monthlyIncomeEntry))
            .contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(status().is(HttpStatus.ACCEPTED.value()))
            .andExpect(header().string(CONTENT_TYPE, MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id", is("aHR0cDovL3d3dy50aGVh")))
            .andReturn();

        verify(monthlyIncomePort, times(1)).addEntry(monthlyIncomeEntry);
    }

    @Test
    public void canUpdatePayroll() throws Exception {
        String id = RandomStringUtils.randomAlphabetic(5);
        MonthlyIncomeEntry monthlyIncomeEntry = TestMonthlyIncomeEntryBuilder.randomMonthlyIncome().withId(id).build();

        when(monthlyIncomePort.update(id, monthlyIncomeEntry)).thenReturn(id);

        mockMvc.perform(patch("/api/income/" + id)
            .content(gson.toJson(monthlyIncomeEntry))
            .contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(status().is(HttpStatus.OK.value()))
            .andExpect(header().string(CONTENT_TYPE, MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id", is(id)));

        verify(monthlyIncomePort, times(1)).update(id, monthlyIncomeEntry);
    }

    @Test
    public void return404_ifUpdatingNonexistingMonthlyIncome() throws Exception {
        doThrow(MonthlyIncomeNotFoundException.class).when(monthlyIncomePort).update(anyString(), any(MonthlyIncomeEntry.class));

        mockMvc.perform(patch("/api/income/" + randomAlphanumeric(10))
            .content(gson.toJson(TestMonthlyIncomeEntryBuilder.randomMonthlyIncome().build()))
            .contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(status().is(HttpStatus.NOT_FOUND.value()));
    }

    @Test
    public void canDeletePayroll() throws Exception {
        String id = RandomStringUtils.randomAlphabetic(5);

        mockMvc.perform(delete("/api/income/" + id))
            .andExpect(status().is(HttpStatus.OK.value()))
            .andReturn();

        verify(monthlyIncomePort, times(1)).delete(id);
    }

    @SuppressWarnings("unchecked")
    private Answer<Obfuscatable> hideIdMethodMock() {
        return invocationOnMock -> {
            MonthlyIncomeEntry entryCall = (MonthlyIncomeEntry) invocationOnMock.getArguments()[0];
            entryCall.setId(randomAlphanumeric(10));
            return entryCall;
        };
    }
}