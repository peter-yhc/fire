package org.pyhc.fire.income;

import org.pyhc.fire.income.payroll.PayrollEntry;

import java.util.List;

public class MonthlyIncomeEntryBuilder {

    private String id;
    private String payPeriod;
    private List<PayrollEntry> payrolls;

    public static MonthlyIncomeEntryBuilder newEntry() {
        return new MonthlyIncomeEntryBuilder();
    }

    protected MonthlyIncomeEntryBuilder() {
    }

    public MonthlyIncomeEntryBuilder withId(String id) {
        this.id = id;
        return this;
    }

    public MonthlyIncomeEntryBuilder withPayPeriod(String payPeriod) {
        this.payPeriod = payPeriod;
        return this;
    }

    public MonthlyIncomeEntryBuilder withPayrolls(List<PayrollEntry> payrolls) {
        this.payrolls = payrolls;
        return this;
    }

    public MonthlyIncomeEntry build() {
        return new MonthlyIncomeEntry(id, payPeriod, payrolls);
    }
}