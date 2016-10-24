package org.pyhc.fire.payroll;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface PayrollRepository extends MongoRepository<Payroll, String> {

}
