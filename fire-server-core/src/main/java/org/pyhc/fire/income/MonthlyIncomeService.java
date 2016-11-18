package org.pyhc.fire.income;

import org.pyhc.fire.income.MonthlyIncome.Payroll;
import org.pyhc.fire.income.payroll.PayrollEntry;
import org.pyhc.fire.income.payroll.PayrollEntryBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MonthlyIncomeService implements MonthlyIncomePort {

    @Autowired
    private MonthlyIncomeRepository monthlyIncomeRepository;

    @Override
    public MonthlyIncomeEntry findByPayPeriod(String payPeriod) {
        return toEntry(monthlyIncomeRepository.findOneByPayPeriod(payPeriod));
    }

    @Override
    public String addEntry(MonthlyIncomeEntry monthlyIncomeEntry) {
        MonthlyIncome monthlyIncome = monthlyIncomeRepository.save(fromEntry(monthlyIncomeEntry));
        return monthlyIncome.getId();
    }

    @Override
    public String update(String id, MonthlyIncomeEntry monthlyIncomeEntry) throws MonthlyIncomeNotFoundException {
        if (null == monthlyIncomeRepository.findOne(id)) {
            throw new MonthlyIncomeNotFoundException();
        }
        monthlyIncomeEntry.setId(id);
        MonthlyIncome monthlyIncome = fromEntry(monthlyIncomeEntry);
        return monthlyIncomeRepository.save(monthlyIncome).getId();
    }

    @Override
    public void delete(String id) {
        monthlyIncomeRepository.delete(id);
    }

    private static MonthlyIncomeEntry toEntry(MonthlyIncome monthlyIncome) {
        return MonthlyIncomeEntryBuilder.newEntry()
            .withId(monthlyIncome.getId())
            .withPayPeriod(monthlyIncome.getPayPeriod())
            .withPayrolls(toEntry(monthlyIncome.getPayrolls()))
            .build();
    }

    private static MonthlyIncome fromEntry(MonthlyIncomeEntry monthlyIncomeEntry) {
        return new MonthlyIncome(
            monthlyIncomeEntry.getId(),
            monthlyIncomeEntry.getPayPeriod(),
            fromEntry(monthlyIncomeEntry.getPayrolls())
        );
    }

    private static List<PayrollEntry> toEntry(List<Payroll> payrolls) {
        return payrolls.stream().map(MonthlyIncomeService::toEntry).collect(Collectors.toList());
    }

    private static List<Payroll> fromEntry(List<PayrollEntry> payrollEntries) {
        return payrollEntries.stream().map(MonthlyIncomeService::fromEntry).collect(Collectors.toList());
    }

    private static PayrollEntry toEntry(Payroll payroll) {
        return new PayrollEntryBuilder()
            .withSource(payroll.getSource())
            .withTotalAmount(payroll.getTotalAmount())
            .withTaxedAmount(payroll.getTaxedAmount())
            .withNetPayment(payroll.getNetPayment())
            .withRetirementPlan(payroll.getRetirementPlan())
            .build();
    }

    private static Payroll fromEntry(PayrollEntry payrollEntry) {
        return new Payroll(
            payrollEntry.getSource(),
            payrollEntry.getTotalAmount(),
            payrollEntry.getTaxedAmount(),
            payrollEntry.getNetPayment(),
            payrollEntry.getRetirementPlan()
        );
    }
}
