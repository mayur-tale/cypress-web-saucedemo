const saucelabslocators = require('../../support/locators/saucelabs_locators')

class ProductsPage {

    verifyProductPageLoad() {

        cy.xpath(saucelabslocators.PRODUCT_PAGE_TITLE).should('be.visible')

    }

    verifyPriceOfGivenProduct (item_name, item_price) {

        cy.xpath(saucelabslocators.product_page_item_price(item_name)).invoke('text').should("contain", item_price)
    }

    clickGivenProductLink (item_name) {

        cy.xpath(saucelabslocators.product_page_item_name_link(item_name)).click()
    }

    verifyCartCount() {

        cy.xpath(saucelabslocators.PRODUCT_PAGE_SHOPPING_CART_BADGE).invoke('text').should('equal', '1')
    }

    clickCartIcon() {

        cy.xpath(saucelabslocators.PRODUCT_PAGE_SHOPPING_CART_LINK).click()
    }

    clickAddToCartButtonForGivenItem(item_name) {

        cy.xpath(saucelabslocators.product_page_item_add_to_cart(item_name)).click()
    }

    verifyRemoveButtonForAddedItem (item_name) {

        cy.xpath(saucelabslocators.product_page_item_add_to_cart(item_name)).invoke('text').should('contain', "Remove")
    }

    verifyProductsPageFooterLinks () {
        cy.xpath(saucelabslocators.PRODUCT_PAGE_FOOTER_SOCIAL_MEDIA_LIST).each(($el) => {
            
            expect($el.find('a').attr('href')).to.contain($el.find('a').attr('data-test').replace('social-',''))

        })
    }
    
    selectSortByPriceLowToHigh () {

        cy.xpath(saucelabslocators.PRODUCT_PAGE_SORT_CONTAINER).select('lohi')
    }

    selectSortByPriceHighToLow () {

        cy.xpath(saucelabslocators.PRODUCT_PAGE_SORT_CONTAINER).select('hilo')
    }

    selectAndVerifySortByPriceLowToHigh () {
        
        const arrayOfPricesLowToHigh1 = []
        const arrayOfPricesLowToHigh2 = []
        cy.xpath(saucelabslocators.PRODUCT_PAGE_SORT_CONTAINER).select('az')
        cy.xpath(saucelabslocators.PRODUCT_PAGE_ALL_ITEM_PRICE_ELEMENTS).each(($price1) =>{
            
            cy.wrap($price1).invoke('text').then(($text1) => {
                arrayOfPricesLowToHigh1.push(Number($text1.replace('$','')))
                
            })
        }).then(() =>

        cy.xpath(saucelabslocators.PRODUCT_PAGE_SORT_CONTAINER).select('lohi')).then(() =>
        
        cy.xpath(saucelabslocators.PRODUCT_PAGE_ALL_ITEM_PRICE_ELEMENTS).each(($price2) =>{
            
            cy.wrap($price2).invoke('text').then(($text2) => {
                arrayOfPricesLowToHigh2.push(Number($text2.replace('$','')))
                
            })
        })).then(()=>

        arrayOfPricesLowToHigh1.sort((a,b)=>a-b)).then (() =>
        expect(arrayOfPricesLowToHigh1).to.have.ordered.members(arrayOfPricesLowToHigh2))
        
    }

    selectAndVerifySortByPriceHighToLow () {
        
        const arrayOfPricesLowToHigh3 = []
        const arrayOfPricesLowToHigh4 = []
        cy.xpath(saucelabslocators.PRODUCT_PAGE_SORT_CONTAINER).select('az')
        cy.xpath(saucelabslocators.PRODUCT_PAGE_ALL_ITEM_PRICE_ELEMENTS).each(($price3) =>{
            
            cy.wrap($price3).invoke('text').then(($text3) => {
                arrayOfPricesLowToHigh3.push(Number($text3.replace('$','')))
                
            })
        }).then(() =>

        cy.xpath(saucelabslocators.PRODUCT_PAGE_SORT_CONTAINER).select('hilo')).then(() =>
        
        cy.xpath(saucelabslocators.PRODUCT_PAGE_ALL_ITEM_PRICE_ELEMENTS).each(($price4) =>{
            
            cy.wrap($price4).invoke('text').then(($text4) => {
                arrayOfPricesLowToHigh4.push(Number($text4.replace('$','')))
                
            })
        })).then(()=>

        arrayOfPricesLowToHigh3.sort((a,b)=>b-a)).then (() =>
        expect(arrayOfPricesLowToHigh3).to.have.ordered.members(arrayOfPricesLowToHigh4))
        
    }
        
}

export default ProductsPage