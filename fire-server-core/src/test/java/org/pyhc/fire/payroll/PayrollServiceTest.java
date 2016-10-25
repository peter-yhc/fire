package org.pyhc.fire.payroll;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.pyhc.fire.config.MainConfiguration;
import org.pyhc.fire.listeners.MongoExecutionListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;

import java.math.BigDecimal;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = MainConfiguration.class)
@TestExecutionListeners({DependencyInjectionTestExecutionListener.class, MongoExecutionListener.class})
public class PayrollServiceTest {

    @Autowired
    private PayrollService payrollService;

    @Test
    public void canSavePayrolls() throws Exception {
        PayrollEntry payrollEntry = new PayrollEntry("", BigDecimal.ONE, BigDecimal.ONE, BigDecimal.ONE, BigDecimal.ZERO);
        payrollService.save(payrollEntry);

        assertThat(payrollService.findPayroll().size(), is(1));
    }
}