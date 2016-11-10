package org.pyhc.fire.payroll;

import java.util.List;

public interface PayrollServicePort {

    List<PayrollEntry> findPayrolls();

    List<PayrollEntry> findPayrollsByPeriod(String period) throws PayrollNotFoundException;

    String addPayroll(PayrollEntry payrollEntry);

    PayrollEntry updatePayroll(String id, PayrollEntry payrollEntry) throws PayrollNotFoundException;

    void delete(String id);
}
