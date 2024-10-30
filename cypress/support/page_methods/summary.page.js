const saucelabslocators = require('../../support/locators/saucelabs_locators')

class SummaryPage {

    verifyTotalPrice(total_price) {

        let price_text = "Total: " + total_price;
        cy.xpath(saucelabslocators.SUMMARY_PAGE_TOTAL_PRICE).invoke('text').should('equal', price_text)
        
    }

    clickFinishButton() {

        cy.xpath(saucelabslocators.SUMMARY_PAGE_FINISH_BUTTON).click()
    }
}

export default SummaryPage