package org.pyhc.fire.payroll;

import org.junit.Before;
import org.junit.Test;
import org.pyhc.fire.ControllerTestBase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.Collections;

import static java.math.BigDecimal.valueOf;
import static org.hamcrest.CoreMatchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class PayrollControllerTest extends ControllerTestBase {

    @Autowired
    private WebApplicationContext wac;

    @Autowired
    private PayrollServicePort payrollServicePort;

    private MockMvc mockMvc;

    @Before
    public void setupMockMvc() {
        mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
    }

    @Test
    public void canGetPayrollEntries() throws Exception {
        PayrollEntry payrollEntry = new PayrollEntry("2015-01-01", valueOf(2000), valueOf(2001), valueOf(2002), valueOf(2003));
        when(payrollServicePort.findPayrolls()).thenReturn(Collections.singletonList(payrollEntry));
        mockMvc.perform(get("/payrolls"))
                .andDo(print())
                .andExpect(status().is(HttpStatus.OK.value()))
                .andExpect(jsonPath("$[0].totalAmount", is(2000)))
                .andExpect(jsonPath("$[0].taxedAmount", is(2001)))
                .andExpect(jsonPath("$[0].netPayment", is(2002)))
                .andExpect(jsonPath("$[0].retirementPlan", is(2003)))
                .andExpect(jsonPath("$[0].payPeriod", is("2015-01-01")))
                .andReturn();
    }
}