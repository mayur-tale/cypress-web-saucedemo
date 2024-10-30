const saucelabslocators = require('../../support/locators/saucelabs_locators')

class ProductInfoPage {

    verifyProductInfoPageLoad () {

        cy.xpath(saucelabslocators.ITEM_PAGE_BACK_TO_PRODUCTS_BUTTON).should('be.visible')
    
    }

    verifyPriceOfProduct(item_name,item_price) {

        cy.xpath(saucelabslocators.ITEM_PAGE_ITEM_PRICE).invoke('text').should('contain', item_price)
    }

    clickBackToProductsLink() {

        cy.xpath(saucelabslocators.ITEM_PAGE_BACK_TO_PRODUCTS_BUTTON).click()
    }
}

export default ProductInfoPage