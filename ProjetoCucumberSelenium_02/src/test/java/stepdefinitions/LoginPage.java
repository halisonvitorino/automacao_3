package stepdefinitions;

import org.openqa.selenium.By;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import tests.Testes;

public class LoginPage {
	
	@Given("^Abro a aplicacao$")
	public void abro_a_aplica_o(){
	    Testes.driver.get("http://paypertest.crowdtest.me/users/sign_in");
	}

	@When("^eu digito o usu�rio$")
	public void eu_digito_o_usu_rio(){
	    Testes.driver.findElement(By.id("user_email")).sendKeys("halisonvitorino@gmail.com");
	}

	@When("^eu digito a senha$")
	public void eu_digito_a_senha(){
		Testes.driver.findElement(By.id("user_password")).sendKeys("123456");
	}

	@When("^clico em ok$")
	public void clico_em_ok(){
	    Testes.driver.findElement(By.name("commit")).click();
	}

	@Then("^eu valido se ocorreu tudo certo$")
	public void eu_valido_se_ocorreu_tudo_certo(){
		if (Testes.driver.findElement(By.id("general-home")) != null) {
					System.out.println("**********Dados de login válidos **************");				
		}
		Testes.driver.quit();
	}
}