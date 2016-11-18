package org.pyhc.fire.income;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import org.pyhc.fire.income.payroll.PayrollEntry;
import org.pyhc.fire.service.Obfuscatable;

import java.util.List;

@Getter
@EqualsAndHashCode
public class MonthlyIncomeEntry implements Obfuscatable{

    private String id;
    private String payPeriod;
    private List<PayrollEntry> payrolls;

    public MonthlyIncomeEntry(String id, String payPeriod, List<PayrollEntry> payrolls) {
        this.id = id;
        this.payPeriod = payPeriod;
        this.payrolls = payrolls;
    }

    @Override
    public void setId(String obfuscatedId) {
        this.id = obfuscatedId;
    }

}
