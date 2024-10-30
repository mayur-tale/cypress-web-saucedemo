import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import ProductsPage from "../page_methods/products.page"

const ProductsPg = new ProductsPage


Then ("User sees the price of item {string} as value {string}", (item_name, item_price) => {
    ProductsPg.verifyPriceOfGivenProduct(item_name,item_price);
}),

When ("User clicks on the item {string} link", (item_name) => {
    ProductsPg.clickGivenProductLink(item_name);
}),

Then ("User navigates to the Products page", () => {
    ProductsPg.verifyProductPageLoad();
}),

When ("User clicks Add To Cart button for item name {string}", (item_name) => {
    ProductsPg.clickAddToCartButtonForGivenItem(item_name);
}),

Then ("User sees that Remove button is shown for item name {string}", (item_name) => {
    ProductsPg.verifyRemoveButtonForAddedItem(item_name);
}),

And ("User sees the Trolley counter as 1", () => {
    ProductsPg.verifyCartCount();
}),

When ("User clicks the Trolley icon", () => {
    ProductsPg.clickCartIcon();
}),

Then ("User can access the links in the footer without errors", () => {
    ProductsPg.verifyProductsPageFooterLinks();
}),

When ("User selects sort option as Price Low to high and sees the products list sorted in low to high order of price", () => {
    ProductsPg.selectAndVerifySortByPriceLowToHigh();
}),

When ("User selects sort option as Price high to low and sees the products list sorted in high to low order of price", () => {
    ProductsPg.selectAndVerifySortByPriceHighToLow();
})

