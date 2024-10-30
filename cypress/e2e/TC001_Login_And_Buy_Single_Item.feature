Feature: Login and Buy the given single item

    Scenario Outline: Verify that User is able to Login to the application and buy the specified single item

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
        And User fills out the checkout form with user details first name "<first_name>" last name "<last_name>" and postal code "<postal_code>"
        And User clicks the Continue button
        Then User sees the total as "<total_price>"
        When User clicks the Finish button
        Then User sees the Order Confirmed page and text

        Examples:
            | item_name               | item_price | total_price | first_name | last_name | postal_code |
            | Sauce Labs Bolt T-Shirt | $15.99     | $17.27      | test_user  | test_last | HA9 8ED     |