package org.pyhc.fire.payroll;

import java.util.List;

public interface PayrollServicePort {

    List<PayrollEntry> findPayrolls();

    String addPayroll(PayrollEntry payrollEntry);

    PayrollEntry updatePayroll(String id, PayrollEntry payrollEntry) throws PayrollNotFoundException;
}