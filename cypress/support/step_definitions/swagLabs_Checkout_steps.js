import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import CheckoutPage from "../page_methods/checkout.page"


const CheckoutPg = new CheckoutPage

And ("User fills out the checkout form with user details first name {string} last name {string} and postal code {string}", (first_name, last_name, postal_code) => {
    CheckoutPg.fillCheckoutForm(first_name,last_name,postal_code);
}),

And ("User clicks the Continue button", () => {
    CheckoutPg.clickCheckoutContinueButton();
}),

And ("User fills only the last name {string} and postal code {string} fields", (last_name, postal_code) => {
    CheckoutPg.clearAllFields()
    CheckoutPg.fillLastName(last_name)
    CheckoutPg.fillPostalCode(postal_code)
}),

When ("User fills only the first name {string} and postal code {string} fields", (first_name, postal_code) => {
    CheckoutPg.clearAllFields()
    CheckoutPg.fillFirstName(first_name)
    CheckoutPg.fillPostalCode(postal_code)
}),

When ("User fills only the first name {string} and last name {string} fields", (first_name, last_name) => {
    CheckoutPg.clearAllFields()
    CheckoutPg.fillFirstName(first_name)
    CheckoutPg.fillLastName(last_name)
}),

Then ("User sees the mandatory error message for missing value in first name field", () => {
    CheckoutPg.verifyFirstNameMandatoryError()
}),

Then ("User sees the mandatory error message for missing value in last name field", () => {
    CheckoutPg.verifyLastNameMandatoryError()
}),

Then ("User sees the mandatory error message for missing value in postal code field", () => {
    CheckoutPg.verifyPostalCodeMandatoryError()
})