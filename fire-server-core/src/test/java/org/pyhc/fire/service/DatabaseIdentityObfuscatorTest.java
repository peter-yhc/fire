package org.pyhc.fire.service;

import org.junit.Test;
import org.pyhc.fire.TestMonthlyIncomeEntryBuilder;
import org.pyhc.fire.income.MonthlyIncomeEntry;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.CoreMatchers.not;
import static org.junit.Assert.assertThat;

public class DatabaseIdentityObfuscatorTest {

    private DatabaseIdentityObfuscatorPort databaseIdentityObfuscatorPort = new DatabaseIdentityObfuscator();

    @Test
    public void canObfuscateMonthlyIncomeEntry() throws Exception {
        MonthlyIncomeEntry monthlyIncomeEntry = TestMonthlyIncomeEntryBuilder.randomMonthlyIncome().build();
        String id = monthlyIncomeEntry.getId();

        databaseIdentityObfuscatorPort.hideId(monthlyIncomeEntry);
        assertThat(monthlyIncomeEntry.getId(), not(id));
    }

    @Test
    public void canObfuscateList() throws Exception {
        String id1 = "id1";
        String id2 = "id2";
        String id3 = "id3";

        List<Obfuscatable> list = new ArrayList<>();
        list.add(TestMonthlyIncomeEntryBuilder.randomMonthlyIncome().withId(id1).build());
        list.add(TestMonthlyIncomeEntryBuilder.randomMonthlyIncome().withId(id2).build());
        list.add(TestMonthlyIncomeEntryBuilder.randomMonthlyIncome().withId(id3).build());

        databaseIdentityObfuscatorPort.hideIds(list);

        assertThat(list.get(0).getId(), not(id1));
        assertThat(list.get(1).getId(), not(id2));
        assertThat(list.get(2).getId(), not(id3));
    }
}