export const LOGIN_PAGE_USER_NAME = ('//*[@id = "user-name"]')

export const LOGIN_PAGE_USER_PASSWORD = ('//*[@id = "password"]')

export const LOGIN_PAGE_LOGIN_BTN = ('//*[@id = "login-button"]')

export const PRODUCT_PAGE_TITLE = '//span[@class = "title"]'

export const product_page_item_add_to_cart = (item_name) => `//div[div/a/div[contains (text(), "${item_name}")]]/div[contains(@class , "pricebar")]/button`

export const product_page_item_name_link = (item_name) => `//*[contains (text(), "${item_name}")]`

export const product_page_item_price = (item_name) => `//div[div/a/div[contains (text(), "${item_name}")]]/div[contains(@class , "pricebar")]/div`

export const PRODUCT_PAGE_SHOPPING_CART_LINK = '//a[contains(@class , "shopping_cart_link")]'

export const PRODUCT_PAGE_SHOPPING_CART_BADGE = '//a[contains(@class , "shopping_cart_link")]/span'

export const PRODUCT_PAGE_FOOTER_SOCIAL_MEDIA_LIST = '//ul[@class = "social"]/li'

export const PRODUCT_PAGE_SORT_CONTAINER = '//select'

export const PRODUCT_PAGE_ALL_ITEM_PRICE_ELEMENTS = '//div[contains(@class , "pricebar")]/div'

export const ITEM_PAGE_ITEM_NAME = '//div[contains(@class , "inventory_details_name")]'

export const ITEM_PAGE_ITEM_PRICE = '//div[contains(@class , "inventory_details_price")]'

export const ITEM_PAGE_BACK_TO_PRODUCTS_BUTTON = '//*[@id = "back-to-products"]'

export const CART_PAGE_ITEM_QTY = '//div[@class = "cart_quantity"]'

export const CART_PAGE_ITEM_NAME = '//div[@class = "inventory_item_name"]'

export const CART_PAGE_ITEM_PRICE = '//div[@class = "inventory_item_price"]'

export const CART_PAGE_CHECKOUT_BUTTON = '//button[@id = "checkout"]'

export const CHECKOUT_PAGE_FNAME = '//input[@id = "first-name"]'

export const CHECKOUT_PAGE_LNAME = '//input[@id = "last-name"]'

export const CHECKOUT_PAGE_POSTCODE = '//input[@id = "postal-code"]'

export const CHECKOUT_PAGE_ERROR_BOX = '//h3'

export const CHECKOUT_PAGE_CONTINUE_BUTTON = '//input[@id = "continue"]'

export const SUMMARY_PAGE_TOTAL_PRICE = '//div[@class = "summary_total_label"]'

export const SUMMARY_PAGE_FINISH_BUTTON = '//button[@id = "finish"]'

export const COMPLETION_PAGE_SUCCESS_HEADER = '//h2[@class = "complete-header"]'

export const COMPLETION_PAGE_SUCCESS_BODY = '//div[@class = "complete-text"]'

