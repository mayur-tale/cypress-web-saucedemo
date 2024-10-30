import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import CartPage from "../page_methods/cart.page"

const CartPg = new CartPage


Then ("User sees the item count as 1 and the item name {string} and price {string}", (item_name, item_price) => {
    CartPg.verifyCartQuantity();
    CartPg.verifyCartItemName(item_name);
    CartPg.verifyCartItemPrice(item_price);
}),

When ("User clicks on the Checkout button", () => {
    CartPg.clickCheckoutButton();
})

