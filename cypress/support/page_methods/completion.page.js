const saucelabslocators = require('../../support/locators/saucelabs_locators')

class CompletionPage {

    verifyCompletionHeaderText() {

        cy.xpath(saucelabslocators.COMPLETION_PAGE_SUCCESS_HEADER).invoke('text').should('contain', "Thank you for your order!")
    }

    verifyCompletionBodyText() {

        cy.xpath(saucelabslocators.COMPLETION_PAGE_SUCCESS_BODY).invoke('text').should('contain', "Your order has been dispatched, and will arrive just as fast as the pony can get there!")
    }
}

export default CompletionPage