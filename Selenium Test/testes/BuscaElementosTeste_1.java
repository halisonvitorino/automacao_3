package testes;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import io.github.bonigarcia.wdm.WebDriverManager;
import paginas.BuscaElementos;

public class BuscaElementosTeste_1 {

	private static WebDriver driver = null;
	
	@BeforeTest
	public void setUpTest() {
		WebDriverManager.firefoxdriver().setup();
		driver = new FirefoxDriver();
	}

	@Test
	public static void buscaElementosTeste() {
		BuscaElementos busca = new BuscaElementos(driver);
		driver.get("https://webjump-user.github.io/testqa/");
		busca.clicaBotao();
		busca.validaBotao();
	}
	
	@AfterTest
	public void tearDownTest() {
		driver.close();	
		//driver.quit();		
	}
}
