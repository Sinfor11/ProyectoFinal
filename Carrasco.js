const {By,Key,Builder, until} = require("selenium-webdriver");
require("chromedriver");
var assets = require("assert");

// Daniel - Inicio de sesión con usuario y contraseña incorretos

describe('Pruebas en el login', function(){

    it('Datos incorrectos de inicio', async function(){
        this.timeout(50000); 
        let driver = new Builder().forBrowser("chrome").build();
        
        await driver.manage().window().maximize();
        await driver.get("http://localhost:8080/LoginPrueba/");

        //Datos que vamos a enviar para iniciar la sesión
        await driver.findElement(By.id('user')).sendKeys("Daniel1");
        await driver.findElement(By.id('pass')).sendKeys("123452");

        await driver.findElement(By.id('btn')).click();
        
        var tituloActual = 'Login Prueba UTAgs';
        var tituloEsperado = await driver.getTitle();
        assets.equal(tituloActual, tituloEsperado); 

        await driver.quit();
    });
});