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
    public String addPayroll(PayrollEntry payrollEntry) {
        Payroll payroll = payrollRepository.save(fromEntry(payrollEntry));
        return payroll.getId();
    }

    private static Payroll fromEntry(PayrollEntry payrollEntry) {
        return new Payroll(
                payrollEntry.getPayPeriod(),
                payrollEntry.getTotalAmount(),
                payrollEntry.getTaxedAmount(),
                payrollEntry.getNetPayment(),
                payrollEntry.getRetirementPlan()
        );
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
