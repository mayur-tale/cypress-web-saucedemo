import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../page_methods/login.page"

const LoginPg = new LoginPage


Given ("User is logged in to the application", () => {
    LoginPg.login();
})




