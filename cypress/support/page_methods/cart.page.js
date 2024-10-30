const saucelabslocators = require('../../support/locators/saucelabs_locators')

class CartPage {

    verifyCartQuantity() {

        cy.xpath(saucelabslocators.CART_PAGE_ITEM_QTY).invoke('text').should('equal', "1")
    }

    verifyCartItemName(item_name) {

        cy.xpath(saucelabslocators.CART_PAGE_ITEM_NAME).invoke('text').should('equal', item_name)
    }

    verifyCartItemPrice(item_price) {

        cy.xpath(saucelabslocators.CART_PAGE_ITEM_PRICE).invoke('text').should('equal', item_price)
    }

    clickCheckoutButton() {

        cy.xpath(saucelabslocators.CART_PAGE_CHECKOUT_BUTTON).click()
    }
}

export default CartPage