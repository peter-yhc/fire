package org.pyhc.fire.payroll;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PayrollService implements PayrollServicePort {

    @Autowired
    private PayrollRepository payrollRepository;

    @Override
    public List<PayrollEntry> findPayrolls() {
        return payrollRepository.findAll()
                .stream()
                .map(PayrollService::toEntry)
                .collect(Collectors.toList());
    }

    @Override
    public List<PayrollEntry> findPayrollsByPeriod(String period) throws PayrollNotFoundException {
        List<Payroll> payrolls = payrollRepository.findByPayPeriod(period);
        if (payrolls.isEmpty()) {
            throw new PayrollNotFoundException("No Payrolls found for period: " + period);
        }
        return toEntry(payrolls);
    }

    @Override
    public String addPayroll(PayrollEntry payrollEntry) {
        Payroll payroll = payrollRepository.save(fromEntry(payrollEntry));
        return payroll.getId();
    }

    @Override
    public PayrollEntry updatePayroll(String id, PayrollEntry payrollEntry) throws PayrollNotFoundException {
        if (null == payrollRepository.findOne(id)) {
            throw new PayrollNotFoundException("No payroll found with id: " + id);
        }
        payrollEntry.setId(id);
        return toEntry(payrollRepository.save(fromEntry(payrollEntry)));
    }

    @Override
    public void delete(String id) {
        payrollRepository.delete(id);
    }

    private static Payroll fromEntry(PayrollEntry payrollEntry) {
        return new Payroll(
                payrollEntry.getId(),
                payrollEntry.getPayPeriod(),
                payrollEntry.getTotalAmount(),
                payrollEntry.getTaxedAmount(),
                payrollEntry.getNetPayment(),
                payrollEntry.getRetirementPlan()
        );
    }

    private static List<PayrollEntry> toEntry(List<Payroll> payrolls) {
        return payrolls.stream().map(PayrollService::toEntry).collect(Collectors.toList());
    }

    private static PayrollEntry toEntry(Payroll payroll) {
        return new PayrollEntryBuilder()
                .withId(payroll.getId())
                .withPayPeriod(payroll.getPayPeriod())
                .withTotalAmount(payroll.getTotalAmount())
                .withTaxedAmount(payroll.getTaxedAmount())
                .withNetPayment(payroll.getNetPayment())
                .withRetirementPlan(payroll.getRetirementPlan())
                .build();
    }
}
