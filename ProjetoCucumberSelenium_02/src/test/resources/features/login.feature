Feature: Login no sistema

  Scenario: Logar
    Given Abro a aplicacao
    When eu digito o usu�rio
    And eu digito a senha
    And clico em ok
    Then eu valido se ocorreu tudo certo
