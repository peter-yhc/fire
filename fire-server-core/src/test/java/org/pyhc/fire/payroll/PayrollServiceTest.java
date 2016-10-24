package org.pyhc.fire.payroll;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.pyhc.fire.config.MainConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = MainConfiguration.class)
public class PayrollServiceTest {

    @Autowired
    private PayrollService payrollService;

    @Test
    public void canFindPayrolls() throws Exception {
        assertThat(payrollService.findPayroll().size(), is(0));
    }
}