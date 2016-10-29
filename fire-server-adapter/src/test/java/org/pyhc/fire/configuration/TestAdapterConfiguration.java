package org.pyhc.fire.configuration;

import org.mockito.Mockito;
import org.pyhc.fire.config.AdapterConfiguration;
import org.pyhc.fire.payroll.PayrollServicePort;
import org.pyhc.fire.service.DatabaseIdentityObfuscatorPort;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class TestAdapterConfiguration extends AdapterConfiguration {

    @Bean
    public PayrollServicePort payrollServicePort() {
        return Mockito.mock(PayrollServicePort.class);
    }

    @Bean
    public DatabaseIdentityObfuscatorPort databaseIdentityObfuscatorPort() {
        return Mockito.mock(DatabaseIdentityObfuscatorPort.class);
    }
}
