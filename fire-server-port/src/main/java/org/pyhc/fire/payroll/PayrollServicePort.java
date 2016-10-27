package org.pyhc.fire.payroll;

import java.util.List;

public interface PayrollServicePort {

    List<PayrollEntry> findPayrolls();

    PayrollEntry addPayroll(PayrollEntry payrollEntry);
}
