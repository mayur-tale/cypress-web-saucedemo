Feature: Verify that the product page sorting works as expected

Scenario: Verify that the products page list can be sorted for price high to low and low to high

    Given User is logged in to the application
    When User selects sort option as Price Low to high and sees the products list sorted in low to high order of price
    When User selects sort option as Price high to low and sees the products list sorted in high to low order of price
    