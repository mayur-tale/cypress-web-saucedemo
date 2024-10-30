import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import ProductInfoPage from "../page_methods/product_info.page"


const ProductInfoPg = new ProductInfoPage


Then ("User sees the correct name {string} and price {string} of the item", (item_name, item_price) =>{
    ProductInfoPg.verifyPriceOfProduct(item_name,item_price)
}),

When ("User clicks the link Back to Products", () =>{
    ProductInfoPg.clickBackToProductsLink();
})