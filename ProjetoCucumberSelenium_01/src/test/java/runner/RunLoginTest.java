package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(value = Cucumber.class)
@CucumberOptions(features 	= "src/test/java/features",
				 glue 		= "stepDefinitions",
				 plugin 	= {"pretty","html:target/cucumber-reports"},
				 strict 	= false)
public class RunLoginTest {

}
