package org.pyhc.fire.config;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories(basePackages = "org.pyhc.fire")
public class DatabaseConfiguration extends AbstractMongoConfiguration {

    @Override
    protected String getDatabaseName() {
        return "fire_db";
    }

    @Override
    public Mongo mongo() throws Exception {
        return new MongoClient("raspberry", 27017);
    }

    @Override
    protected String getMappingBasePackage() {
        return "org.pyhc.fire";
    }
}
