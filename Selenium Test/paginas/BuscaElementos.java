package paginas;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class BuscaElementos {

	WebDriver driver = null;
	WebElement dropdown = null;
	boolean imagem;

	By botao_one     = By.id("btn_one");
	By botao_two     = By.id("btn_two");
	By botao_four    = By.id("btn_link");
	By campo_nome    = By.id("first_name");
	By campo_opcao 	 = By.id("opt_three");
	By caixa_selecao = By.id("select_box");
	By elemento_box  = By.xpath("//option[. = 'ExampleTwo']");
	By logomarca     = By.xpath("/html/body/div[1]/div[2]/div[3]/div/div[2]/img[4]");

	public BuscaElementos(WebDriver driver) {
		this.driver = driver;
	}

	public void acessaPainel() {
		driver.switchTo().frame(0);
	}

	public void preencheCampo(String texto) {
		driver.findElement(campo_nome).click();
		driver.findElement(campo_nome).sendKeys(texto);		
		driver.findElement(botao_one).click();					
	}
	
	public void validaCaixaSelecao() {
		driver.findElement(caixa_selecao).click();
		dropdown = driver.findElement(caixa_selecao);
		dropdown.findElement(elemento_box).click();		
	}
	
	public void validaImagem() {
		imagem = driver.findElements(logomarca) != null;		
	}
	
	public void validaCampoOpcao() {
		driver.findElement(campo_opcao).click();
	}

	public void clicaBotao() {
		driver.findElement(botao_one).click();
		driver.findElement(botao_two).click();
		driver.findElement(botao_four).click();
	}

	public void validaBotao() {
		driver.findElements(botao_one).isEmpty();
		driver.findElements(botao_two).isEmpty();
		driver.findElements(botao_four).isEmpty();
	}
}
