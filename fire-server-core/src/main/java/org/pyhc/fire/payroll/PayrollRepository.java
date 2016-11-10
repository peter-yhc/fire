package org.pyhc.fire.payroll;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

interface PayrollRepository extends MongoRepository<Payroll, String> {

    List<Payroll> findByPayPeriod(String payPeriod);
}
