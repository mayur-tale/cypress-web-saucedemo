# cypress-web-saucedemo
This project uses the website saucedemo.com as application-under-test

# Steps to get the scripts working
1. Download the git repo
2. Open Command Prompt / Terminal in Admin mode
3. install cypress using following command
    
        npm install cypress --save-dev

4. Install Cucumber preprocessor for Cypress - IMPORTANT run both of these commands one after the other. Some components differ in both cases

    4a. command 1

        npm i -D cypress-cucumber-preprocessor

    4b. command 2

        npm install cypress cypress-cucumber-preprocessor

5. Install xpath for Cypress - plugin to access elements with xpath locators

        npm install -D cypress-xpath

6. Install Mochawesome - plugin for html reports

        npm i --save-dev cypress-mochawesome-reporter

7. To launch Cypress in Open mode (Open mode allows to select specs manually and then runs the selected spec)

        npx cypress open

8. To launch Cypress in Run mode 

        npx cypress run --headed