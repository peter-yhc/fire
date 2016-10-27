package org.pyhc.fire.config;

import com.google.gson.Gson;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.FilterType;

@Configuration
@ComponentScan(
    value = "org.pyhc.fire",
    excludeFilters = @ComponentScan.Filter(value = Configuration.class, type = FilterType.ANNOTATION))
public class AdapterConfiguration {

    @Bean
    public Gson gson() {
        return new Gson();
    }

}
