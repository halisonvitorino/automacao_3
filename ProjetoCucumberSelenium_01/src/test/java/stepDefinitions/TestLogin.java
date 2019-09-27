package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class TestLogin {

	private WebDriver driver = null;
	WebElement we = null;

	@Given("^Abro o browser$")
	public void abro_o_browser() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
	}

	@Given("^Estou acessando a tela de login da aplicacao$")
	public void estou_acessando_a_tela_de_login_da_aplicacao() {
		driver.get("http://paypertest.crowdtest.me/users/sign_in");
	}

	@When("^Eu digito meu Email \"([^\"]*)\" e Eu digito minha Senha (\\d+)$")
	public void eu_digito_meu_Email_e_Eu_digito_minha_Senha(String arg1, String arg2) throws Throwable {
		we = driver.findElement(By.id("user_email"));
		we.sendKeys(arg1);
		we = driver.findElement(By.id("user_password"));
		we.sendKeys(arg2);
	}

	@When("^Clico em logar$")
	public void clico_em_logar() {
		we = driver.findElement(By.name("commit"));
		we.click();
	}

	@Then("^Acesso a tela principal do sistema$")
	public void acesso_a_tela_principal_do_sistema() {
		try {
			if (driver.findElement(By.cssSelector(".alert")).isDisplayed()) {
				String texto = driver.findElement(By.cssSelector(".alert")).getText();
				System.out.println("Mensagem apresentada na tela de erro: " + texto);
			}
		} catch (NoSuchElementException e) {
			System.out.println("**********Dados de login válidos **************");
		}
		driver.quit();
	}
}