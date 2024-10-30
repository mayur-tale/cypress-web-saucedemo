Feature: Verify that the 3 form fields on the checkout page are all mandatory

Scenario Outline: Verify that an error message is displayed when any of the fields in Checkout page is left blank

        Given User is logged in to the application
        Then User sees the price of item "<item_name>" as value "<item_price>"
        When User clicks on the item "<item_name>" link
        Then User sees the correct name "<item_name>" and price "<item_price>" of the item
        When User clicks the link Back to Products
        Then User navigates to the Products page
        When User clicks Add To Cart button for item name "<item_name>"
        Then User sees that Remove button is shown for item name "<item_name>"
        And User sees the Trolley counter as 1
        When User clicks the Trolley icon
        Then User sees the item count as 1 and the item name "<item_name>" and price "<item_price>"
        When User clicks on the Checkout button
        And User fills only the last name "<last_name>" and postal code "<postal_code>" fields
        And User clicks the Continue button
        Then User sees the mandatory error message for missing value in first name field
        When User fills only the first name "<first_name>" and postal code "<postal_code>" fields
        And User clicks the Continue button
        Then User sees the mandatory error message for missing value in last name field
        When User fills only the first name "<first_name>" and last name "<last_name>" fields
        And User clicks the Continue button
        Then User sees the mandatory error message for missing value in postal code field

        Examples:
            | item_name               | item_price | total_price | first_name | last_name | postal_code |
            | Sauce Labs Bolt T-Shirt | $15.99     | $17.27      | test_user  | test_last | HA9 8ED     |