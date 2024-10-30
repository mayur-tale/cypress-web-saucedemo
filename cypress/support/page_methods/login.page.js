const saucelabslocators = require('../../support/locators/saucelabs_locators')

class LoginPage {

    login () {
        cy.visit("https://www.saucedemo.com/")
        cy.xpath(saucelabslocators.LOGIN_PAGE_USER_NAME).type("standard_user")
        cy.xpath(saucelabslocators.LOGIN_PAGE_USER_PASSWORD).type("secret_sauce")
        cy.xpath(saucelabslocators.LOGIN_PAGE_LOGIN_BTN).click()
    
    }
}

export default LoginPage