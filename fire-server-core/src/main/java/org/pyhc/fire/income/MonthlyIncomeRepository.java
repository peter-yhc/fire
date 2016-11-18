package org.pyhc.fire.income;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface MonthlyIncomeRepository extends MongoRepository<MonthlyIncome, String> {

    MonthlyIncome findOneByPayPeriod(String payPeriod);

}
