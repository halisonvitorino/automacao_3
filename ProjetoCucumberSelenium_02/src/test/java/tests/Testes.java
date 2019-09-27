package tests;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;
import io.github.bonigarcia.wdm.WebDriverManager;

@CucumberOptions(features="src/test/resources/features",
			     glue   = {"stepdefinitions"},
			     plugin = {"pretty", "html:target/cucumber-reports" })

public class Testes {
	
	public static WebDriver driver;
	private TestNGCucumberRunner testRunner;
	
	@BeforeClass
	public void setUp() {
		WebDriverManager.chromedriver().setup();
		driver     = new ChromeDriver();
		testRunner = new TestNGCucumberRunner(Testes.class);
	}
	
	@Test(description = "login", dataProvider = "features")
	public void login(CucumberFeatureWrapper cFeature) {
		testRunner.runCucumber(cFeature.getCucumberFeature());	
	}
	
	@DataProvider(name = "features")
	public Object[][] getFeatures(){
		return testRunner.provideFeatures();
	}
	
	@AfterClass
	public void tearDown() {
		testRunner.finish();
	}
}
