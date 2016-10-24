package org.pyhc.fire.payroll;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RestResource;

@RestResource
public interface PayrollRepository extends MongoRepository<Payroll, String> {

}
