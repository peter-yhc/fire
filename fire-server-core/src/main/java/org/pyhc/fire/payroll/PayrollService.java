package org.pyhc.fire.payroll;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PayrollService {

    @Autowired
    private PayrollRepository payrollRepository;

    public List<PayrollEntry> findPayrolls() {
        return payrollRepository.findAll()
                .stream()
                .map(PayrollService::toEntry)
                .collect(Collectors.toList());
    }

    public PayrollEntry save(PayrollEntry payrollEntry) {
        Payroll payroll = payrollRepository.save(fromEntry(payrollEntry));
        return toEntry(payroll);
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
        return new PayrollEntry(
                payroll.getPayPeriod(),
                payroll.getTotalAmount(),
                payroll.getTaxedAmount(),
                payroll.getNetPayment(),
                payroll.getRetirementPlan()
        );
    }
}
