package org.pyhc.fire;

import org.junit.runner.RunWith;
import org.pyhc.fire.configuration.TestAdapterConfiguration;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = {TestAdapterConfiguration.class})
public class ControllerTestBase {


}
