package org.pyhc.fire.income;

public interface MonthlyIncomePort {

    MonthlyIncomeEntry findByPayPeriod(String period);

    String addEntry(MonthlyIncomeEntry monthlyIncomeEntry);

    String update(String id, MonthlyIncomeEntry monthlyIncomeEntry) throws MonthlyIncomeNotFoundException;

    void delete(String id);
}
