import LoginPage from "./loginobjectpattern";

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open login page", () => {
    LoginPage.visit()
})

When("I submit login", () => {
    LoginPage.fillUsername('username')
    LoginPage.fillPassword('password')
    LoginPage.SignIn()
})

Then("I should see homepage", () => {
    cy.get('.offset2 > :nth-child(1)').should('be.visible')
})
