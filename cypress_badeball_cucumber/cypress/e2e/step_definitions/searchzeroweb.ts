import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("User access homepage", () => {
  cy.visit("http://zero.webappsecurity.com/index.html")
})
  
Then("User see a search bar and type keyword", () => {
  cy.get('#searchTerm').type('transfer')
  cy.get('form').submit()
  cy.contains('h2', 'Search Results:').should('be.visible')
})
