import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("User access to page duckduckgo", () => {
    cy.visit("https://duckduckgo.com/");
})

Then("I should see a search bar", () => {
    cy.fixture("example").then(data => {
        cy.get('[aria-label="Search with DuckDuckGo"]').type(data.name)
    })
})