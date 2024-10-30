import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import SummaryPage from "../page_methods/summary.page"

const SummaryPg = new SummaryPage

Then ("User sees the total as {string}", (total_price) => {
    SummaryPg.verifyTotalPrice(total_price);
}),

When ("User clicks the Finish button", () => {
    SummaryPg.clickFinishButton();
})