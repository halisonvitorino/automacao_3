Feature: Login

  Background: 
    Given Abro o browser

  Scenario Outline: Logar no google
    Given Estou acessando a tela de login da aplicacao
    When Eu digito meu Email <email> e Eu digito minha Senha <senha>
    And Clico em logar
    Then Acesso a tela principal do sistema

    Examples: 
      | email                       | senha  |
      | "halisonvitorino@gmail.com" | 123123 |
			| "halisonvitorino@gmail.com" | 123456 |
			| "halisonvitorino@gmail.com" | 123156 |