package org.pyhc.fire.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.FilterType;

@Configuration
@ComponentScan(
        value = "org.pyhc.fire",
        excludeFilters = @ComponentScan.Filter(value = Configuration.class, type = FilterType.ANNOTATION)
)
public class AdapterConfiguration {
}
