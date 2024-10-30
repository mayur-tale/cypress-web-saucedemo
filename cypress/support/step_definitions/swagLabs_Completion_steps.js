import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import CompletionPage from "../page_methods/completion.page"


const CompletionPg = new CompletionPage

Then ("User sees the Order Confirmed page and text", ()=> {
    CompletionPg.verifyCompletionHeaderText();
    CompletionPg.verifyCompletionBodyText();
})