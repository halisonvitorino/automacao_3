$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Logar no google",
  "description": "",
  "id": "login;logar-no-google",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Estou acessando a tela de login da aplicacao",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Eu digito meu Email \u003cemail\u003e e Eu digito minha Senha \u003csenha\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Clico em logar",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Acesso a tela principal do sistema",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login;logar-no-google;",
  "rows": [
    {
      "cells": [
        "email",
        "senha"
      ],
      "line": 13,
      "id": "login;logar-no-google;;1"
    },
    {
      "cells": [
        "\"halisonvitorino@gmail.com\"",
        "123123"
      ],
      "line": 14,
      "id": "login;logar-no-google;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Abro o browser",
  "keyword": "Given "
});
formatter.match({
  "location": "TestLogin.abro_o_browser()"
});
formatter.result({
  "duration": 6265847000,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Logar no google",
  "description": "",
  "id": "login;logar-no-google;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Estou acessando a tela de login da aplicacao",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Eu digito meu Email \"halisonvitorino@gmail.com\" e Eu digito minha Senha 123123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Clico em logar",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Acesso a tela principal do sistema",
  "keyword": "Then "
});
formatter.match({
  "location": "TestLogin.estou_acessando_a_tela_de_login_da_aplicacao()"
});
formatter.result({
  "duration": 5264434500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "halisonvitorino@gmail.com",
      "offset": 21
    },
    {
      "val": "123123",
      "offset": 72
    }
  ],
  "location": "TestLogin.eu_digito_meu_Email_e_Eu_digito_minha_Senha(String,String)"
});
formatter.result({
  "duration": 249616000,
  "status": "passed"
});
formatter.match({
  "location": "TestLogin.clico_em_logar()"
});
formatter.result({
  "duration": 1064184800,
  "status": "passed"
});
formatter.match({
  "location": "TestLogin.acesso_a_tela_principal_do_sistema()"
});
formatter.result({
  "duration": 24783200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"a.alert\"}\n  (Session info: chrome\u003d76.0.3809.132)\n  (Driver info: chromedriver\u003d76.0.3809.68 (420c9498db8ce8fcd190a954d51297672c1515d5-refs/branch-heads/3809@{#864}),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 18 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.48.2\u0027, revision: \u002741bccdd10cf2c0560f637404c2d96164b67d9d67\u0027, time: \u00272015-10-09 13:08:06\u0027\nSystem info: host: \u0027BSBDSK139\u0027, ip: \u0027192.168.183.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:63769}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d76.0.3809.68 (420c9498db8ce8fcd190a954d51297672c1515d5-refs/branch-heads/3809@{#864}), userDataDir\u003dC:\\Users\\CAST~1.BSB\\AppData\\Local\\Temp\\scoped_dir4540_1249002029}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d76.0.3809.132, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 6b8ca1b2230084a6de0b3d734f9acba5\n*** Element info: {Using\u003dcss selector, value\u003da.alert}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:647)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:482)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:345)\r\n\tat stepDefinitions.TestLogin.acesso_a_tela_principal_do_sistema(TestLogin.java:44)\r\n\tat ✽.Then Acesso a tela principal do sistema(login.feature:10)\r\n",
  "status": "failed"
});
});