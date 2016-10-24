package org.pyhc.fire.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ComponentScan.Filter;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.FilterType;
import org.springframework.context.annotation.Import;


@Configuration
@ComponentScan(
        value = "org.pyhc.fire",
        excludeFilters = @Filter(value = Configuration.class, type = FilterType.ANNOTATION)
)
@Import(value = {
        DatabaseConfiguration.class
})
public class MainConfiguration {
}
