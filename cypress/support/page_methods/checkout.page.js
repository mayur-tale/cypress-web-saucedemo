const saucelabslocators = require('../../support/locators/saucelabs_locators')

class CheckoutPage {

    fillCheckoutForm (first_name, last_name, postal_code) {

        cy.xpath(saucelabslocators.CHECKOUT_PAGE_FNAME).type(first_name)
        cy.xpath(saucelabslocators.CHECKOUT_PAGE_LNAME).type(last_name)
        cy.xpath(saucelabslocators.CHECKOUT_PAGE_POSTCODE).type(postal_code)
    }

    clickCheckoutContinueButton () {

        cy.xpath(saucelabslocators.CHECKOUT_PAGE_CONTINUE_BUTTON).click()
    }

    fillFirstName (first_name) {

        
        cy.xpath(saucelabslocators.CHECKOUT_PAGE_FNAME).type(first_name)
    }

    fillLastName (last_name) {

        
        cy.xpath(saucelabslocators.CHECKOUT_PAGE_LNAME).type(last_name)
    }

    fillPostalCode (postal_code) {

        
        cy.xpath(saucelabslocators.CHECKOUT_PAGE_POSTCODE).type(postal_code)
    }

    clearAllFields () {

        cy.xpath(saucelabslocators.CHECKOUT_PAGE_FNAME).clear()
        cy.xpath(saucelabslocators.CHECKOUT_PAGE_LNAME).clear()
        cy.xpath(saucelabslocators.CHECKOUT_PAGE_POSTCODE).clear()
    }

    verifyFirstNameMandatoryError() {

        cy.xpath(saucelabslocators.CHECKOUT_PAGE_ERROR_BOX).invoke('text').should('equal', "Error: First Name is required")
    }

    verifyLastNameMandatoryError() {

        cy.xpath(saucelabslocators.CHECKOUT_PAGE_ERROR_BOX).invoke('text').should('equal', "Error: Last Name is required")
    }

    verifyPostalCodeMandatoryError() {

        cy.xpath(saucelabslocators.CHECKOUT_PAGE_ERROR_BOX).invoke('text').should('equal', "Error: Postal Code is required")
    }
}

export default CheckoutPage